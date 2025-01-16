// /pages/api/discount.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { phone } = req.body;

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
      to: 'maazmasood001@gmail.com', // Replace with your email where you want to receive the data
      subject: 'New Discount Submission',
      text: `You have a new discount submission.\n\nPhone: ${phone}`,
      html: `<p>You have a new discount submission.</p><p><strong>Phone:</strong> ${phone}</p>`,
    };

    const mailOptions2 = {
      from: 'alexander@pvnrw.de', // Sender's email address
      to: 'info@pvnrw.de', // Another recipient
      subject: 'New Discount Submission',
      text: `You have a new discount submission.\n\nPhone: ${phone}`,
      html: `<p>You have a new discount submission.</p><p><strong>Phone:</strong> ${phone}</p>`,
    };

    try {
      // Send emails
      await transporter.sendMail(mailOptions);
     // await transporter.sendMail(mailOptions2);
      res.status(200).json({ message: 'Telefonnummer erfolgreich übermittelt!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Telefonnummer konnte nicht übermittelt werden. Bitte versuchen Sie es später noch einmal.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
