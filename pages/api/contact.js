// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Configure the transporter using your SMTP server details
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: 'alexander@pvnrw.de', // Sender's email address
      to: 'maazmasood001@gmail.com', // Replace with your email where you want to receive the form data
      subject: subject,
      text: `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `<p>You have a new contact form submission.</p><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong> ${message}</p>`,
    };

    const mailOptions2 = {
      from: 'alexander@pvnrw.de', // Sender's email address
      to: 'info@pvnrw.de', // Replace with your email where you want to receive the form data
      subject: subject,
      text: `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `<p>You have a new contact form submission.</p><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong> ${message}</p>`,
    };

    try {
     // await transporter.sendMail(mailOptions);
     // await transporter.sendMail(mailOptions2);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send message. Please try again later.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
