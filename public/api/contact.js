// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Configure the transporter using your SMTP server details
    const transporter = nodemailer.createTransport({
      host: 'smtps.udag.de',
      port: 465,
      secure: true, // Use SSL/TLS
      auth: {
        user: 'alexander@pvnrw.de', // Replace with your email
        pass: 'Klimanrw1996!',   // Replace with your email password
      },
    });

    const mailOptions = {
      from: email, // Sender's email address
      to: 'maazmasood001@gmail.com', // Replace with your email where you want to receive the form data
      subject: subject,
      text: `You have a new contact form submission.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p>You have a new contact form submission.</p><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    };

    try {
    //  await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send message. Please try again later.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
