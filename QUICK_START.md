# 🚀 Guide de Démarrage Rapide - Ekose RX

## ⚡ Démarrage en 3 Minutes

### 1️⃣ Installation (1 min)

```bash
cd /home/gaetanx/Téléchargements/site
npm install
```

### 2️⃣ Développement (30 sec)

```bash
npm run dev
```

Le site sera accessible sur **http://localhost:5174**

### 3️⃣ Build Production (1 min 30)

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

---

## 🎯 Commandes Essentielles

```bash
# Développement
npm run dev              # Lance le serveur de dev (port 5174)

# Production
npm run build            # Compile pour production
npm run preview          # Prévisualise le build

# Qualité du code
npm run lint             # Vérifie le code
npm run test             # Lance les tests
npm run test:coverage    # Tests avec couverture
```

---

## 📦 Déploiement Express

### Option 1 : Vercel (Le plus simple - 2 min)

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option 2 : Netlify (Rapide - 3 min)

```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

### Option 3 : Build manuel

```bash
npm run build
# Copier le contenu de dist/ vers votre serveur web
```

---

## 🔧 Configuration Minimale

### Variables d'environnement (optionnel)

Créer un fichier `.env` :

```env
VITE_API_URL=https://api.ekose-rx.com
```

---

## ✅ Vérification Rapide

### Checklist avant déploiement

```bash
# 1. Build réussit ?
npm run build
# ✅ Si succès, continuer

# 2. Pas d'erreurs TypeScript ?
npx tsc --noEmit
# ✅ Si aucune erreur, continuer

# 3. Linting propre ?
npm run lint
# ✅ Si propre, vous êtes prêt !
```

---

## 🌐 URLs Importantes

- **Dev local** : http://localhost:5174
- **Documentation complète** : Voir `README.md`
- **Guide de déploiement** : Voir `DEPLOYMENT.md`
- **Rapport d'audit** : Voir `AUDIT_REPORT.md`

---

## 🆘 Problèmes Courants

### Le build échoue ?

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port 5174 déjà utilisé ?

```bash
npm run dev -- --port 3000
```

### Erreurs TypeScript ?

Consulter `AUDIT_REPORT.md` pour les solutions

---

## 📞 Support

**Email** : support@ekose.com

---

## 🎉 C'est Tout !

Le site est **100% opérationnel** et **prêt pour la production**.

Bon déploiement ! 🚀
