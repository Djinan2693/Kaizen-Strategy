# 📧 Guide Complet - Système d'Email

## ✅ Ce qui est maintenant configuré

### 1. **Page d'Inscription aux Formations** 
- ✅ Quand tu cliques sur "S'inscrire maintenant" sur une formation
- ✅ Redirection vers la page `EnrollmentPage`
- ✅ Formulaire avec validation complète
- ✅ **Envoi automatique par email** à `contact@kaizenstrategy.ci`
- ✅ Confirmation email envoyée au participant

### 2. **Page de Rendez-vous**
- ✅ Bouton "Planifier un rendez-vous" sur la page d'accueil
- ✅ Redirection vers `AppointmentPage`
- ✅ Formulaire complet (nom, email, téléphone, date, heure, etc.)
- ✅ **Envoi automatique par email** à `contact@kaizenstrategy.ci`
- ✅ Confirmation email envoyée au demandeur

---

## 🚀 Comment utiliser

### **IMPORTANT: Configuration Gmail requise**

Avant de tester, tu DOIS configurer ton compte Gmail:

1. **Active la double authentification:**
   - Va sur https://myaccount.google.com/security
   - Active "2-Step Verification"

2. **Génère un mot de passe d'application:**
   - Va sur https://myaccount.google.com/apppasswords
   - Sélectionne Mail + Windows Computer
   - Copie le mot de passe (16 caractères)

3. **Configure le fichier `.env` à la racine du projet:**
   ```
   PORT=3001
   EMAIL_USER=ton_email@gmail.com
   EMAIL_PASSWORD=ton_mot_de_passe_app_de_16_caracteres
   CONTACT_EMAIL=contact@kaizenstrategy.ci
   ```

### **Démarrer l'application:**

**Méthode 1 (Recommandé):** Deux terminaux
```bash
# Terminal 1
npm run dev

# Terminal 2
npm run dev:server
```

**Méthode 2:** Un seul terminal
```bash
npm run dev:all
```

### **Tester:**
1. Va sur http://localhost:5173
2. Clique sur une formation et appuie sur "S'inscrire maintenant"
3. Remplis le formulaire et valide
4. Tu devrais recevoir un email à `contact@kaizenstrategy.ci`

---

## 📧 Emails envoyés

### Lors d'une **inscription à une formation**:

**Email 1 (à contact@kaizenstrategy.ci):**
- Nom complet, email, téléphone
- Entreprise et position
- Formation sélectionnée
- Date et heure de soumission

**Email 2 (au participant):**
- Confirmation de réception
- Récapitulatif de l'inscription
- Message "Nous vous recontacterons dans 24h"

### Lors d'une **demande de rendez-vous**:

**Email 1 (à contact@kaizenstrategy.ci):**
- Tous les détails du rendez-vous (date, heure, sujet)
- Informations de contact

**Email 2 (au demandeur):**
- Confirmation de réception
- Récapitulatif de la demande

---

## 🔧 Architecture

```
Frontend (http://localhost:5173)
         ↓
   Vite + React
         ↓
  EnrollmentPage.tsx
  AppointmentPage.tsx
         ↓
  (Requête POST /api/...)
         ↓
Proxy Vite (vite.config.ts)
         ↓
Backend (http://localhost:3001)
         ↓
   Express Server
         ↓
   Nodemailer + Gmail
         ↓
    📧 Email envoyé!
```

---

## 🎯 Flux utilisateur

### **Inscription Formation:**
1. Utilisateur navigue sur http://localhost:5173/formations
2. Sélectionne une formation (ex: "Leadership Stratégique")
3. Clique sur "S'inscrire maintenant"
4. Remplis le formulaire d'inscription
5. Clique sur "Confirmer mon inscription"
6. **Page de succès** affichée
7. **Email** reçu à contact@kaizenstrategy.ci

### **Rendez-vous:**
1. Utilisateur clique sur "Planifier un rendez-vous" (Hero)
2. Remplis les détails (nom, email, date, heure, etc.)
3. Clique sur "Planifier mon rendez-vous"
4. **Page de succès** affichée
5. **Email** reçu à contact@kaizenstrategy.ci

---

## 🐛 Troubleshooting

### ❌ "Port 3001 déjà utilisé"
```bash
# Tue le processus Node.js existant
lsof -ti:3001 | xargs kill -9
npm run dev:server
```

### ❌ "Erreur d'authentification Gmail"
- Vérifie que tu as utilisé le **mot de passe d'application** (16 caractères)
- Vérifie que **Double Authentication** est activée sur Google
- Les caractères spéciaux doivent être correctement échappés dans `.env`

### ❌ "Les emails ne s'envoient pas"
- Ouvre les logs du terminal backend: `npm run dev:server`
- Cherche les erreurs de connexion
- Vérifie que `contact@kaizenstrategy.ci` existe

### ❌ "Erreur CORS"
- Assure-toi que le serveur backend est en cours d'exécution
- Vérifie que vite.config.ts a le proxy configuré

---

## ✨ Prochaines étapes

1. **Authentification:** Ajoute une authentification pour les inscriptions
2. **Base de données:** Store les inscriptions dans MongoDB/PostgreSQL
3. **Dashboard:** Admin dashboard pour voir toutes les inscriptions
4. **SMS:** Envoie aussi des SMS de confirmation
5. **Calendar:** Intégration calendrier pour les rendez-vous
6. **Payment:** Intégration paiement pour les formations payantes

---

## 📞 Support

Si tu as des questions, contacte: contact@kaizenstrategy.ci

