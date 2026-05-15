# Kaizen Strategy PWA - Configuration Email

## 🚀 Setup pour les emails

### 1. **Configurer Gmail avec un mot de passe d'application**

L'application utilise **Nodemailer** avec Gmail pour envoyer les emails. Voici comment configurer:

#### Étapes:
1. Active la **double authentification** sur ton compte Google
   - Va sur https://myaccount.google.com/security
   - Clique sur "2-Step Verification"

2. Crée un **mot de passe d'application**
   - Va sur https://myaccount.google.com/apppasswords
   - Sélectionne "Mail" et "Windows Computer" (ou ton appareil)
   - Google va générer un mot de passe de 16 caractères
   - Copie ce mot de passe

3. Configure le fichier `.env`:
   ```env
   PORT=3001
   EMAIL_USER=ton_email@gmail.com
   EMAIL_PASSWORD=ton_mot_de_passe_app_de_16_caracteres
   CONTACT_EMAIL=contact@kaizenstrategy.ci
   ```

### 2. **Démarrer l'application**

#### Option 1: Mode développement avec proxy
```bash
# Terminal 1 - Vite Frontend (port 5173)
npm run dev

# Terminal 2 - Backend Server (port 3001)  
npm run dev:server
```

#### Option 2: Lancer tout d'un coup
```bash
npm run dev:all
```

### 3. **Comment ça fonctionne**

- **Frontend** (Vite): `http://localhost:5173`
- **Backend** (Express): `http://localhost:3001`
- **Proxy**: Les requêtes `/api/*` du frontend sont automatiquement routées vers le backend

### 4. **Routes API disponibles**

#### POST `/api/enrollments`
Envoie une inscription à une formation
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+225 01 23 45 67 89",
  "company": "Acme Corp",
  "position": "Director",
  "message": "Optional message",
  "courseName": "Leadership Stratégique",
  "submittedAt": "2025-11-16T10:00:00Z"
}
```

**Résultat**: 
- Email envoyé à `contact@kaizenstrategy.ci` avec tous les détails
- Email de confirmation envoyé à `john@example.com`

#### POST `/api/appointments`
Envoie une demande de rendez-vous
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+225 01 23 45 67 89",
  "company": "Acme Corp",
  "subject": "Consultation générale",
  "preferredDate": "2025-12-01",
  "preferredTime": "14:30",
  "message": "Optional message",
  "submittedAt": "2025-11-16T10:00:00Z"
}
```

**Résultat**:
- Email envoyé à `contact@kaizenstrategy.ci` avec tous les détails
- Email de confirmation envoyé à `john@example.com`

### 5. **Troubleshooting**

#### Erreur: "Incorrect credentials"
- Vérifie que tu as utilisé le **mot de passe d'application** (16 caractères) et non ton vrai mot de passe Google
- Vérifie que la double authentification est activée

#### Erreur: "Network error"
- Assure-toi que le serveur backend est en cours d'exécution (`npm run dev:server`)
- Vérifie que le port 3001 n'est pas bloqué

#### Les emails ne s'envoient pas
- Vérifie les logs du terminal du backend
- Assure-toi que les variables d'environnement sont correctement configurées
- Teste avec `curl`:
  ```bash
  curl -X POST http://localhost:3001/api/enrollments \
    -H "Content-Type: application/json" \
    -d '{"fullName":"Test","email":"test@example.com","phone":"+225123456789"}'
  ```

### 6. **Production**

Pour la production, tu dois:
1. Mettre les variables d'environnement sur le serveur (ne pas commiter `.env`)
2. Utiliser un service d'email professionnel (SendGrid, AWS SES, etc.) au lieu de Gmail
3. Sécuriser ton backend avec HTTPS, authentification, rate limiting, etc.

---

**Questions?** Contacte `contact@kaizenstrategy.ci`
