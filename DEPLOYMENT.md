# 🚀 Guide de Déploiement - Ekose RX

Ce guide détaille les différentes méthodes de déploiement du site vitrine Ekose RX.

## 📋 Pré-requis

Avant de déployer, assurez-vous que :

- ✅ Le projet compile sans erreur (`npm run build`)
- ✅ Tous les tests passent (`npm run test`)
- ✅ Le linting est propre (`npm run lint`)
- ✅ Les variables d'environnement sont configurées

## 🌐 Option 1 : Déploiement sur Vercel (Recommandé)

Vercel est optimisé pour les applications React/Vite.

### Méthode A : Via l'interface Vercel

1. **Créer un compte sur [Vercel](https://vercel.com)**

2. **Importer le projet**
   - Cliquer sur "New Project"
   - Importer depuis Git (GitHub, GitLab, Bitbucket)
   - Sélectionner le repository

3. **Configuration**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Variables d'environnement**
   - Ajouter `VITE_API_URL` dans Settings > Environment Variables

5. **Déployer**
   - Cliquer sur "Deploy"
   - Le site sera disponible sur `https://votre-projet.vercel.app`

### Méthode B : Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Configuration vercel.json

Créer un fichier `vercel.json` à la racine :

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🔷 Option 2 : Déploiement sur Netlify

### Méthode A : Via l'interface Netlify

1. **Créer un compte sur [Netlify](https://netlify.com)**

2. **Nouveau site depuis Git**
   - Sites > Add new site > Import an existing project
   - Connecter votre repository Git

3. **Configuration du build**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Variables d'environnement**
   - Site settings > Environment variables
   - Ajouter `VITE_API_URL`

5. **Déployer**

### Méthode B : Via CLI

```bash
# Installer Netlify CLI
npm i -g netlify-cli

# Se connecter
netlify login

# Initialiser
netlify init

# Build et déployer
netlify deploy --prod
```

### Configuration netlify.toml

Créer un fichier `netlify.toml` à la racine :

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

## 🐳 Option 3 : Déploiement avec Docker

### Dockerfile

Créer un `Dockerfile` :

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

Créer un fichier `nginx.conf` :

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "80:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### Commandes Docker

```bash
# Build l'image
docker build -t ekose-rx-site .

# Lancer le container
docker run -d -p 80:80 --name ekose-site ekose-rx-site

# Avec docker-compose
docker-compose up -d
```

---

## 🖥️ Option 4 : Serveur VPS (Ubuntu/Debian)

### 1. Préparer le serveur

```bash
# Mettre à jour le système
sudo apt update && sudo apt upgrade -y

# Installer Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Installer Nginx
sudo apt install -y nginx

# Installer PM2 (optionnel, pour servir avec Node)
sudo npm install -g pm2
```

### 2. Cloner et builder le projet

```bash
# Cloner le projet
cd /var/www
sudo git clone <repository-url> ekose-rx
cd ekose-rx

# Installer les dépendances
sudo npm install

# Builder
sudo npm run build
```

### 3. Configuration Nginx

Créer `/etc/nginx/sites-available/ekose-rx` :

```nginx
server {
    listen 80;
    server_name ekose-rx.com www.ekose-rx.com;
    root /var/www/ekose-rx/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

Activer le site :

```bash
sudo ln -s /etc/nginx/sites-available/ekose-rx /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. SSL avec Let's Encrypt

```bash
# Installer Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtenir le certificat
sudo certbot --nginx -d ekose-rx.com -d www.ekose-rx.com

# Renouvellement automatique
sudo certbot renew --dry-run
```

---

## 🔄 CI/CD avec GitHub Actions

Créer `.github/workflows/deploy.yml` :

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm run test

      - name: Build
        run: npm run build
        env:
          VITE_API_URL: ${{ secrets.VITE_API_URL }}

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

## ✅ Checklist de Déploiement

Avant chaque déploiement :

- [ ] Tests passent (`npm run test`)
- [ ] Build réussit (`npm run build`)
- [ ] Linting propre (`npm run lint`)
- [ ] Variables d'environnement configurées
- [ ] Images optimisées
- [ ] Traductions à jour (FR/EN)
- [ ] Favicon et manifest.json configurés
- [ ] Meta tags SEO vérifiés
- [ ] Performance testée (Lighthouse)
- [ ] Compatibilité mobile vérifiée
- [ ] HTTPS configuré (production)
- [ ] Domaine configuré
- [ ] Analytics configuré (optionnel)

---

## 🔍 Vérification Post-Déploiement

```bash
# Vérifier que le site est accessible
curl -I https://ekose-rx.com

# Tester les performances
npx lighthouse https://ekose-rx.com --view

# Vérifier le SSL
openssl s_client -connect ekose-rx.com:443 -servername ekose-rx.com
```

---

## 🐛 Troubleshooting

### Le site affiche une page blanche

- Vérifier la console du navigateur
- Vérifier que le chemin de base est correct
- Vérifier les variables d'environnement

### Erreur 404 sur les routes

- Configurer les redirections (voir configurations Nginx/Vercel/Netlify)
- Vérifier que le mode `history` du router est supporté

### Assets non chargés

- Vérifier les chemins des assets (utiliser `/assets/...` et non `./assets/...`)
- Vérifier que le dossier `public` est bien copié

### Performance lente

- Activer la compression Gzip
- Optimiser les images
- Utiliser le lazy loading
- Configurer le cache des assets

---

## 📞 Support

Pour toute question sur le déploiement :
- Email : support@ekose.com
- Documentation : https://docs.ekose-rx.com

---

**Dernière mise à jour** : Octobre 2025
