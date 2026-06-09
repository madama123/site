# 🚀 Guide Final de Mise en Production — Ekose RX

Ce document récapitule les étapes pour déployer le site vitrine Ekose RX sur le VPS Hostinger (`195.110.59.18`).

---

## 🏗️ Architecture du Déploiement

```
Internet → DNS (ekose-rx.com)
         → VPS 195.110.59.18
           → Nginx (port 80/443) — Reverse Proxy + SSL + Headers sécurité
             → Docker Container (port 3000:8080) — Nginx + App React statique
```

| Composant       | Technologie                     |
|-----------------|---------------------------------|
| **Frontend**    | React 18 / Vite (build statique) |
| **Conteneur**   | Docker (Nginx Alpine, non-root)  |
| **Orchestration** | Docker Compose v2              |
| **Reverse Proxy** | Nginx (hôte VPS)               |
| **SSL**         | Let's Encrypt via Certbot        |
| **Firewall**    | UFW (ports 22, 80, 443)         |
| **CI/CD**       | GitHub Actions → SSH → VPS      |

---

## 🛠️ Prérequis VPS

Le script `setup-vps.sh` installe automatiquement les prérequis manquants :
- Docker & Docker Compose v2
- Nginx
- Certbot
- UFW

---

## ⚡ Déploiement Initial (Première fois)

### 1. Configurer le DNS (Hostinger)

1. Allez dans la gestion DNS de votre domaine sur Hostinger
2. Enregistrement **A** : `@` → `195.110.59.18`
3. Enregistrement **CNAME** : `www` → `ekose-rx.com`
4. Attendez la propagation DNS (5-30 min)

### 2. Préparer le VPS

```bash
# Connexion SSH
ssh root@195.110.59.18

# Cloner le repo (ou git pull si déjà cloné)
cd /var/www/ekose-rx-vitrine/site
git pull origin main

# Rendre le script exécutable et le lancer
chmod +x setup-vps.sh
sudo ./setup-vps.sh
```

Le script vous demandera :
- **Nom de domaine** (ex: `ekose-rx.com`)
- **Email** (pour Let's Encrypt)

Il effectuera automatiquement :
1. ✅ Mise à jour du système
2. ✅ Installation des prérequis
3. ✅ Configuration du firewall UFW
4. ✅ Configuration Nginx reverse proxy + headers de sécurité
5. ✅ Build et lancement Docker
6. ✅ Génération du certificat SSL
7. ✅ Vérification post-déploiement

### 3. Vérification

```bash
# Vérifier le conteneur
docker ps

# Vérifier Nginx
sudo systemctl status nginx

# Tester HTTPS
curl -I https://ekose-rx.com

# Vérifier les headers de sécurité
curl -sI https://ekose-rx.com | grep -E "(Strict-Transport|X-Frame|X-Content|Permissions)"
```

---

## 🔄 Mises à jour (Déploiements suivants)

### Automatique (via CI/CD)
Chaque `git push` sur `main` déclenche automatiquement :
1. Lint + TypeCheck + Build (CI)
2. Déploiement SSH vers le VPS (CD)
3. Health check post-déploiement

### Manuel (si nécessaire)
```bash
ssh root@195.110.59.18
cd /var/www/ekose-rx-vitrine/site
git pull origin main
docker compose up --build -d
```

---

## 📊 Monitoring & Logs

```bash
# Logs en temps réel
docker logs -f ekose-showcase-web

# État du conteneur (inclut le healthcheck)
docker inspect --format='{{.State.Health.Status}}' ekose-showcase-web

# Logs Nginx (reverse proxy hôte)
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

---

## 🔒 Sécurité

| Protection | État |
|------------|------|
| HTTPS (TLS 1.2+) | ✅ Certbot auto-renew |
| HSTS (2 ans) | ✅ `Strict-Transport-Security` |
| Anti-Clickjacking | ✅ `X-Frame-Options: DENY` |
| Anti-MIME Sniffing | ✅ `X-Content-Type-Options: nosniff` |
| CSP | ✅ Whitelist stricte |
| Permissions-Policy | ✅ Camera/micro/payment bloqués |
| Firewall UFW | ✅ Ports 22, 80, 443 uniquement |
| Container non-root | ✅ `USER nginx` |
| Filesystem read-only | ✅ `read_only: true` |
| Healthcheck Docker | ✅ Toutes les 30s |

---

## 🔧 CI/CD — Secrets GitHub à configurer

Pour activer le déploiement automatique, ajoutez ces secrets dans
**GitHub → Settings → Secrets and variables → Actions** :

| Secret | Valeur |
|--------|--------|
| `VPS_HOST` | `195.110.59.18` |
| `VPS_USER` | `root` |
| `VPS_SSH_KEY` | Clé privée SSH (contenu de `~/.ssh/id_rsa` ou `id_ed25519`) |
| `VPS_PORT` | `22` (optionnel) |

---

## 🐛 Dépannage

### Le conteneur redémarre en boucle
```bash
docker logs ekose-showcase-web --tail 50
docker inspect --format='{{json .State}}' ekose-showcase-web | python3 -m json.tool
```

### Erreur 502 Bad Gateway
```bash
# Vérifier que le conteneur tourne
docker ps
# Vérifier que le port 3000 est bien exposé
curl http://127.0.0.1:3000/health
```

### Renouvellement SSL
```bash
sudo certbot renew --dry-run
```

---

**Version** : 2.0.0
**Dernière mise à jour** : Juin 2026
**Développé par** : INTERACT
**Statut** : 🟢 Production Ready
