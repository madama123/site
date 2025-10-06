# 🏥 EKOSE RX - Site Vitrine

Site vitrine officiel d'Ekose RX, plateforme de santé numérique innovante.

## 📋 Description

Ekose RX est une plateforme complète de santé numérique qui permet aux patients de :
- 📱 Prendre des rendez-vous médicaux en ligne
- 💊 Localiser des pharmacies à proximité
- 🚑 Accéder aux services d'urgence
- 👨‍⚕️ Consulter des médecins via téléconsultation
- 📝 Gérer leurs ordonnances et prescriptions

## 🚀 Technologies Utilisées

- **React 18.3.1** - Framework JavaScript
- **TypeScript 5.5.3** - Typage statique
- **Vite 6.3.4** - Build tool et dev server
- **TailwindCSS 3.4.17** - Framework CSS utility-first
- **React Router DOM 6.22.3** - Routing
- **Framer Motion 11.0.8** - Animations
- **i18next 23.10.1** - Internationalisation (FR/EN)
- **Zustand 4.5.2** - State management
- **React Query 5.75.1** - Data fetching
- **Axios 1.11.0** - HTTP client

## 📁 Structure du Projet

```
site/
├── public/
│   ├── assets/
│   │   └── images/          # Images et logos
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Header/
│   │   ├── LanguageSwitcher/
│   │   └── ...
│   ├── pages/              # Pages de l'application
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Blog/
│   │   └── ...
│   ├── context/            # Contexts React
│   ├── hooks/              # Custom hooks
│   ├── locales/            # Fichiers de traduction
│   │   ├── fr.json
│   │   └── en.json
│   ├── shared/             # Composants et utils partagés
│   │   ├── providers/
│   │   └── hooks/
│   ├── services/           # Services API
│   ├── types/              # Types TypeScript
│   ├── App.tsx             # Composant principal
│   ├── main.tsx            # Point d'entrée
│   └── index.css           # Styles globaux
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🛠️ Installation

### Prérequis

- Node.js >= 18.x
- npm >= 9.x

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone <repository-url>
cd site
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement** (optionnel)
```bash
cp .env.example .env
```

Éditer `.env` avec vos configurations :
```env
VITE_API_URL=http://localhost:3000/api
```

## 🚀 Commandes Disponibles

### Développement
```bash
npm run dev
```
Lance le serveur de développement sur `http://localhost:5174`

### Build Production
```bash
npm run build
```
Compile le projet pour la production dans le dossier `dist/`

### Preview Production
```bash
npm run preview
```
Prévisualise le build de production localement

### Linting
```bash
npm run lint
```
Vérifie le code avec ESLint

### Tests
```bash
npm run test
```
Lance les tests unitaires avec Vitest

```bash
npm run test:coverage
```
Lance les tests avec rapport de couverture

## 🌍 Internationalisation

Le site supporte deux langues :
- 🇫🇷 Français (par défaut)
- 🇬🇧 Anglais

Les fichiers de traduction se trouvent dans `src/locales/`

## 🎨 Personnalisation des Couleurs

Les couleurs principales sont définies dans `tailwind.config.js` :

```javascript
colors: {
  'blue-primary': '#134888',
  'blue-header': '#0A458E',
  'primary-green': '#32E800',
  // ...
}
```

## 📦 Build et Déploiement

### Build pour Production

```bash
npm run build
```

Le dossier `dist/` contiendra les fichiers optimisés prêts pour le déploiement.

### Déploiement sur Vercel

1. Installer Vercel CLI
```bash
npm i -g vercel
```

2. Déployer
```bash
vercel
```

### Déploiement sur Netlify

1. Installer Netlify CLI
```bash
npm i -g netlify-cli
```

2. Déployer
```bash
netlify deploy --prod
```

### Déploiement sur serveur classique (Apache/Nginx)

1. Build le projet
```bash
npm run build
```

2. Copier le contenu de `dist/` vers votre serveur web

3. Configuration Nginx exemple :
```nginx
server {
    listen 80;
    server_name ekose-rx.com;
    root /var/www/ekose-rx/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔧 Configuration Vite

Le fichier `vite.config.ts` contient la configuration du serveur de développement :

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    open: true,
  },
});
```

## 📝 Bonnes Pratiques

- ✅ Utiliser TypeScript pour tous les nouveaux fichiers
- ✅ Suivre la convention de nommage des composants (PascalCase)
- ✅ Utiliser les hooks personnalisés pour la logique réutilisable
- ✅ Lazy loading des composants lourds
- ✅ Optimiser les images avant de les ajouter
- ✅ Tester les composants critiques

## 🐛 Résolution des Problèmes

### Erreur de permissions sur node_modules

```bash
chmod +x node_modules/.bin/*
```

### Erreur de build

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port déjà utilisé

Modifier le port dans `vite.config.ts` ou utiliser :
```bash
npm run dev -- --port 3000
```

## 📄 Licence

Propriétaire - Ekose RX © 2024

## 👥 Équipe

- **Développement** : Équipe Ekose RX
- **Design** : Équipe Ekose RX

## 📞 Support

Pour toute question ou problème :
- Email : support@ekose.com
- Site web : https://ekose-rx.com

---

**Version** : 1.0.0  
**Dernière mise à jour** : Octobre 2025
