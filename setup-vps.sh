#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════════════
# setup-vps.sh — Configuration automatique VPS Hostinger pour Ekose RX
# Usage : sudo ./setup-vps.sh
# ═══════════════════════════════════════════════════════════════════════
set -euo pipefail

# ─── Couleurs ───────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_info()  { echo -e "${BLUE}ℹ️  $1${NC}"; }
log_ok()    { echo -e "${GREEN}✅ $1${NC}"; }
log_warn()  { echo -e "${YELLOW}⚠️  $1${NC}"; }
log_error() { echo -e "${RED}❌ $1${NC}"; }

# ─── Vérification root ─────────────────────────────────────────────
if [[ $EUID -ne 0 ]]; then
    log_error "Ce script doit être exécuté en tant que root (sudo ./setup-vps.sh)"
    exit 1
fi

# ─── Variables ──────────────────────────────────────────────────────
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
DOMAIN="${1:-}"
EMAIL="${2:-}"

if [[ -z "$DOMAIN" ]]; then
    read -rp "🌐 Entrez votre nom de domaine (ex: ekose-rx.com) : " DOMAIN
fi

if [[ -z "$DOMAIN" ]]; then
    log_error "Le nom de domaine est obligatoire."
    exit 1
fi

if [[ -z "$EMAIL" ]]; then
    read -rp "📧 Entrez votre email (pour Let's Encrypt) : " EMAIL
fi

if [[ -z "$EMAIL" ]]; then
    log_error "L'email est obligatoire pour Let's Encrypt."
    exit 1
fi

echo ""
log_info "Configuration pour : $DOMAIN (email: $EMAIL)"
log_info "Répertoire projet  : $PROJECT_DIR"
echo ""

# ═══════════════════════════════════════════════════════════════════════
# Étape 1 : Mise à jour du système
# ═══════════════════════════════════════════════════════════════════════
log_info "Étape 1/7 — Mise à jour du système..."
apt update -qq && apt upgrade -y -qq
log_ok "Système à jour."

# ═══════════════════════════════════════════════════════════════════════
# Étape 2 : Installation des prérequis
# ═══════════════════════════════════════════════════════════════════════
log_info "Étape 2/7 — Vérification et installation des prérequis..."

# Docker
if ! command -v docker &>/dev/null; then
    log_info "Installation de Docker..."
    curl -fsSL https://get.docker.com | sh
    systemctl enable --now docker
    log_ok "Docker installé."
else
    log_ok "Docker déjà installé : $(docker --version)"
fi

# Docker Compose v2 (plugin)
if ! docker compose version &>/dev/null; then
    log_info "Installation de Docker Compose v2..."
    apt install -y -qq docker-compose-plugin
    log_ok "Docker Compose v2 installé."
else
    log_ok "Docker Compose v2 déjà installé : $(docker compose version --short)"
fi

# Nginx
if ! command -v nginx &>/dev/null; then
    apt install -y -qq nginx
    log_ok "Nginx installé."
else
    log_ok "Nginx déjà installé : $(nginx -v 2>&1)"
fi

# Certbot
if ! command -v certbot &>/dev/null; then
    apt install -y -qq certbot python3-certbot-nginx
    log_ok "Certbot installé."
else
    log_ok "Certbot déjà installé : $(certbot --version 2>&1)"
fi

# ═══════════════════════════════════════════════════════════════════════
# Étape 3 : Firewall (UFW)
# ═══════════════════════════════════════════════════════════════════════
log_info "Étape 3/7 — Configuration du firewall UFW..."

if ! command -v ufw &>/dev/null; then
    apt install -y -qq ufw
fi

ufw --force reset >/dev/null 2>&1
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp comment "SSH"
ufw allow 80/tcp comment "HTTP"
ufw allow 443/tcp comment "HTTPS"
ufw --force enable
log_ok "Firewall configuré (ports 22, 80, 443 uniquement)."

# ═══════════════════════════════════════════════════════════════════════
# Étape 4 : Configuration Nginx Reverse Proxy
# ═══════════════════════════════════════════════════════════════════════
log_info "Étape 4/7 — Configuration du reverse proxy Nginx..."

CONF_FILE="/etc/nginx/sites-available/${DOMAIN}"

cat > "$CONF_FILE" <<'NGINX_EOF'
# ─── Redirect HTTP → HTTPS ──────────────────────────────────────────
server {
    listen 80;
    listen [::]:80;
    server_name DOMAIN_PLACEHOLDER www.DOMAIN_PLACEHOLDER;
    return 301 https://$host$request_uri;
}

# ─── HTTPS Server Block ─────────────────────────────────────────────
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name DOMAIN_PLACEHOLDER www.DOMAIN_PLACEHOLDER;

    # SSL sera configuré par Certbot automatiquement
    # Les lignes ci-dessous seront remplacées/ajoutées par certbot --nginx

    # ─── Limites & Timeouts ──────────────────────────────────────
    client_max_body_size 1M;
    proxy_connect_timeout 10s;
    proxy_send_timeout    30s;
    proxy_read_timeout    30s;

    # ─── Headers de sécurité ─────────────────────────────────────
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=(self), payment=()" always;

    # ─── Reverse Proxy vers le conteneur Docker ──────────────────
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;

        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Connection        "";

        # Buffers pour éviter les erreurs 502 sur gros assets
        proxy_buffer_size       128k;
        proxy_buffers           4 256k;
        proxy_busy_buffers_size 256k;
    }
}
NGINX_EOF

# Remplacer le placeholder par le vrai domaine
sed -i "s/DOMAIN_PLACEHOLDER/${DOMAIN}/g" "$CONF_FILE"

# Supprimer le site default s'il existe
rm -f /etc/nginx/sites-enabled/default

# Activer le site (idempotent)
ln -sf "$CONF_FILE" "/etc/nginx/sites-enabled/${DOMAIN}"

# Tester la config Nginx (on ne garde que le bloc port 80 pour l'instant)
# car SSL n'est pas encore configuré
# On crée une config temporaire sans le bloc 443
TMP_CONF="/etc/nginx/sites-available/${DOMAIN}.tmp"
cat > "$TMP_CONF" <<NGINX_TMP
server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} www.${DOMAIN};

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host              \$host;
        proxy_set_header X-Real-IP         \$remote_addr;
        proxy_set_header X-Forwarded-For   \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
NGINX_TMP

# On utilise la config temporaire pour démarrer Nginx (le SSL viendra après)
ln -sf "$TMP_CONF" "/etc/nginx/sites-enabled/${DOMAIN}"
nginx -t && systemctl restart nginx
log_ok "Nginx reverse proxy configuré."

# ═══════════════════════════════════════════════════════════════════════
# Étape 5 : Build et lancement Docker
# ═══════════════════════════════════════════════════════════════════════
log_info "Étape 5/7 — Build et lancement du conteneur Docker..."

cd "$PROJECT_DIR"
docker compose down --remove-orphans 2>/dev/null || true
docker compose up --build -d

# Attendre que le conteneur soit healthy
log_info "Attente du healthcheck Docker (max 60s)..."
SECONDS=0
until docker inspect --format='{{.State.Health.Status}}' ekose-showcase-web 2>/dev/null | grep -q "healthy"; do
    if (( SECONDS > 60 )); then
        log_error "Le conteneur n'est pas devenu healthy en 60s."
        docker logs ekose-showcase-web --tail 20
        exit 1
    fi
    sleep 2
done
log_ok "Conteneur Docker opérationnel et healthy."

# ═══════════════════════════════════════════════════════════════════════
# Étape 6 : Certificat SSL (Let's Encrypt)
# ═══════════════════════════════════════════════════════════════════════
log_info "Étape 6/7 — Génération du certificat SSL..."

# Remettre la config complète (avec le bloc 443)
ln -sf "$CONF_FILE" "/etc/nginx/sites-enabled/${DOMAIN}"
rm -f "$TMP_CONF"

certbot --nginx \
    --non-interactive \
    --agree-tos \
    --email "$EMAIL" \
    --redirect \
    -d "$DOMAIN" \
    -d "www.${DOMAIN}"

# Vérifier le renouvellement automatique
systemctl enable certbot.timer 2>/dev/null || true
log_ok "Certificat SSL installé et renouvellement automatique activé."

# ═══════════════════════════════════════════════════════════════════════
# Étape 7 : Vérification finale
# ═══════════════════════════════════════════════════════════════════════
log_info "Étape 7/7 — Vérification post-déploiement..."

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Test HTTPS
if curl -sf --max-time 10 "https://${DOMAIN}" >/dev/null 2>&1; then
    log_ok "HTTPS fonctionne : https://${DOMAIN}"
else
    log_warn "HTTPS pas encore accessible (propagation DNS en cours ?)"
    log_info "Test HTTP fallback..."
    if curl -sf --max-time 10 "http://${DOMAIN}" >/dev/null 2>&1; then
        log_ok "HTTP fonctionne : http://${DOMAIN}"
    else
        log_warn "Le site n'est pas encore accessible. Vérifiez la propagation DNS."
    fi
fi

# Test healthcheck
if curl -sf --max-time 5 "http://127.0.0.1:3000/health" >/dev/null 2>&1; then
    log_ok "Healthcheck OK : http://127.0.0.1:3000/health"
else
    log_warn "Healthcheck non accessible."
fi

# Résumé Docker
echo ""
log_info "État du conteneur :"
docker ps --filter "name=ekose-showcase-web" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
log_ok "🎉 Déploiement terminé !"
echo ""
log_info "📌 Commandes utiles :"
echo "   Logs        : docker logs -f ekose-showcase-web"
echo "   Redémarrer  : docker compose restart"
echo "   Mise à jour : git pull && docker compose up --build -d"
echo "   SSL test    : sudo certbot renew --dry-run"
echo ""
