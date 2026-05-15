import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5555;

// Middleware
app.use(cors());
app.use(express.json());

// Configuration Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Ou votre service d'email
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Route pour les inscriptions
app.post('/api/enrollments', async (req, res) => {
  const { fullName, email, phone, company, position, message, courseName, submittedAt } = req.body;

  // Validation basique
  if (!fullName || !email || !phone) {
    return res.status(400).json({ error: 'Données manquantes' });
  }

  try {
    // Email pour le contact
    const contactEmailContent = `
      <h2>Nouvelle Inscription à une Formation</h2>
      <p><strong>Formation:</strong> ${courseName || 'Non spécifiée'}</p>
      <p><strong>Date d'inscription:</strong> ${new Date(submittedAt).toLocaleString('fr-FR')}</p>
      
      <h3>Informations du participant:</h3>
      <p><strong>Nom:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Téléphone:</strong> ${phone}</p>
      <p><strong>Entreprise:</strong> ${company || 'Non fournie'}</p>
      <p><strong>Fonction:</strong> ${position || 'Non fournie'}</p>
      
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      
      <hr>
      <p><em>Email automatique - Ne pas répondre directement</em></p>
    `;

    // Email de confirmation pour le participant
    const confirmationEmailContent = `
      <h2>Confirmation de votre inscription</h2>
      <p>Bonjour ${fullName},</p>
      <p>Nous avons bien reçu votre inscription à la formation <strong>${courseName || 'notre formation'}</strong>.</p>
      <p>Notre équipe vous contactera dans les 24 heures pour confirmer les détails.</p>
      
      <h3>Récapitulatif de votre inscription:</h3>
      <p><strong>Nom:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Téléphone:</strong> ${phone}</p>
      <p><strong>Entreprise:</strong> ${company || 'Non fournie'}</p>
      <p><strong>Fonction:</strong> ${position || 'Non fournie'}</p>
      
      <p>Merci de votre confiance!</p>
      <p>L'équipe Kaizen Strategy</p>
    `;

    // Envoyer email au contact
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'contact@kaizenstrategy.org',
      subject: `Nouvelle inscription - ${courseName || 'Formation'}`,
      html: contactEmailContent,
    });

    // Envoyer email de confirmation au participant
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmation de votre inscription à Kaizen Strategy',
      html: confirmationEmailContent,
    });

    res.json({ success: true, message: 'Inscription envoyée avec succès' });
  } catch (error) {
    console.error('Erreur d\'envoi d\'email:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi' });
  }
});

// Route pour les rendez-vous
app.post('/api/appointments', async (req, res) => {
  const { fullName, email, phone, company, subject, preferredDate, preferredTime, message, submittedAt } = req.body;

  if (!fullName || !email || !phone) {
    return res.status(400).json({ error: 'Données manquantes' });
  }

  try {
    const contactEmailContent = `
      <h2>Nouvelle Demande de Rendez-vous</h2>
      <p><strong>Date de demande:</strong> ${new Date(submittedAt).toLocaleString('fr-FR')}</p>
      
      <h3>Informations du contact:</h3>
      <p><strong>Nom:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Téléphone:</strong> ${phone}</p>
      <p><strong>Entreprise:</strong> ${company || 'Non fournie'}</p>
      
      <h3>Demande de rendez-vous:</h3>
      <p><strong>Sujet:</strong> ${subject}</p>
      <p><strong>Date préférée:</strong> ${preferredDate}</p>
      <p><strong>Heure préférée:</strong> ${preferredTime}</p>
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      
      <hr>
      <p><em>Email automatique - Ne pas répondre directement</em></p>
    `;

    const confirmationEmailContent = `
      <h2>Confirmation de votre demande de rendez-vous</h2>
      <p>Bonjour ${fullName},</p>
      <p>Nous avons bien reçu votre demande de rendez-vous.</p>
      <p>Notre équipe vous contactera dans les 24 heures pour confirmer.</p>
      
      <h3>Récapitulatif de votre demande:</h3>
      <p><strong>Date préférée:</strong> ${preferredDate}</p>
      <p><strong>Heure préférée:</strong> ${preferredTime}</p>
      <p><strong>Sujet:</strong> ${subject}</p>
      
      <p>Merci!</p>
      <p>L'équipe Kaizen Strategy</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'contact@kaizenstrategy.org',
      subject: `Nouvelle demande de rendez-vous - ${subject}`,
      html: contactEmailContent,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmation de votre demande de rendez-vous',
      html: confirmationEmailContent,
    });

    res.json({ success: true, message: 'Demande de rendez-vous envoyée avec succès' });
  } catch (error) {
    console.error('Erreur d\'envoi d\'email:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi' });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
