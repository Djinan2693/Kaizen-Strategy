# Déploiement Automatique avec GitHub Actions

Le workflow `.github/workflows/deploy.yml` est configuré pour déployer automatiquement sur cPanel à chaque push sur `main` ou `master`.

## Configuration requise

### 1. Créer un dépôt GitHub

Si ce n'est pas déjà fait :
1. Va sur https://github.com/new
2. Crée un repo `kaizen-strategy` (ou le nom de ton choix)
3. Clone-le ou initialise le repo ici

### 2. Ajouter les credentials GitHub Secrets

Les identifiants cPanel sont stockés en tant que **GitHub Secrets** (cryptés).

1. Va sur ton repo GitHub → **Settings** → **Secrets and variables** → **Actions**
2. Clique **New repository secret** et ajoute les 3 secrets suivants :

| Secret Name | Valeur | Exemple |
|---|---|---|
| `CPANEL_HOST` | Ton domaine ou IP du serveur | `kaizenstrategy.org` ou `123.45.67.89` |
| `CPANEL_USERNAME` | Utilisateur cPanel | `kaizen` |
| `CPANEL_PASSWORD` | Mot de passe cPanel | `XyZ@2024Secure!` |

⚠️ **Important** : Ces secrets ne seront JAMAIS visibles dans les logs GitHub, ne risque pas d'exposition.

### 3. Initialiser Git et pousser le code

```bash
cd "/Users/Djinan/Downloads/Kaizen Strategy"
git init
git add .
git commit -m "Initial commit: Kaizen Strategy site with auto-deploy"
git branch -M main
git remote add origin https://github.com/TONUSERNAME/kaizen-strategy.git
git push -u origin main
```

Remplace `TONUSERNAME` par ton vrai username GitHub.

## Workflow en action

### À chaque push sur `main` :

1. ✅ GitHub Actions récupère le code
2. ✅ Installe les dépendances (`npm ci`)
3. ✅ Build le projet (`npm run build`)
4. ✅ Envoie le contenu de `dist/` sur cPanel via SFTP

### Voir l'état du déploiement

- Va sur ton repo GitHub
- Clique sur l'onglet **Actions**
- Vois l'historique de chaque déploiement
- Clique sur un workflow pour voir les logs détaillés

## Workflow local (VS Code SFTP)

Si tu veux déployer **sans pousser sur GitHub**, utilise `.vscode/sftp.json` :

1. Modifie `.vscode/sftp.json` avec tes infos cPanel
2. `npm run build`
3. `Cmd+Shift+P` → `SFTP: Sync Local → Remote`

## Bonnes pratiques

- **Main = Production** : Ne pousse sur `main` que du code testé et prêt
- **Dev branch** : Crée une branche `dev` pour tester avant de merger sur `main`
- **Tags pour les releases** : Ajoute des tags git pour marquer les versions importantes

```bash
git tag v1.0.0
git push origin v1.0.0
```

## Troubleshooting

### Le déploiement échoue avec "Connection refused"

- Vérifie que l'hôte cPanel est correct (cherche dans cPanel → "Account Information")
- Assure-toi que FTP est activé sur cPanel

### Les fichiers ne sont pas mis à jour

- Le workflow utilise `.ftp-deploy-sync-state.json` pour tracker les changements
- Si tu veux forcer un redéploiement complet, change `dangerous-clean-slate: false` à `true` dans le workflow
- ⚠️ **Attention** : `true` supprime tous les fichiers sur le serveur avant de redéployer

### "npm ci" prend trop longtemps

C'est normal — la première fois, les dépendances sont téléchargées et cachées par GitHub Actions.

---

**Besoin d'aide pour configurer les secrets GitHub ?** Dis-moi et je te guide pas à pas.
