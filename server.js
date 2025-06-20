require('dotenv').config();
const express = require('express');
const cloudinary = require('cloudinary').v2;
const cors = require('cors'); 
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// CORS Middleware
app.use(cors({
  origin: ['https://jasonhollidaymagic.up.railway.app'], 
  methods: ['GET', 'POST'],
}));

app.use(express.json());

const PORT = process.env.PORT || 4000;

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  connectionTimeout: 10000,
  greetingTimeout: 5000,
  socketTimeout: 10000
});

// Prüfe Mailserver nur, wenn nicht Produktion
if (process.env.NODE_ENV !== 'production') {
  transporter.verify((error, success) => {
    if (error) {
      console.error('Mail Server Verbindungsfehler:', error);
    } else {
      console.log('Mail Server ist bereit');
    }
  });
}

// Cloudinary konfigurieren
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


app.post('/send-email', async (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  const name = `${firstName ?? ''} ${lastName ?? ''}`.trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Bitte alle Felder ausfüllen' });
  }

  const mailOptions = {
    from: `"Kontaktformular" <${process.env.EMAIL_USER}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: `Anfrage von ${name} über Webseite`,
    text: `Du hast eine neue Anfrage erhalten:\n\n${message}\n\nVon: ${name} (${email})`,
    html: `<p>Du hast eine neue Anfrage erhalten:</p><p>${message}</p><hr><p>Von: <strong>${name}</strong> (${email})</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: 'Email wurde erfolgreich gesendet!' });
  } catch (error) {
    console.error('Fehler beim Senden der Email:', error);
    res.status(500).json({ error: 'Email konnte nicht gesendet werden' });
  }
});

const angularDistPath = path.join(__dirname, 'dist/jasonhollidaymagic/browser');

app.use(express.static(angularDistPath));

app.get(/(.*)/, (req, res, next) => {
  res.sendFile(path.join(angularDistPath, 'index.html'));
  console.log(req.path, req.params);
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
