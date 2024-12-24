import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, service, note } = req.body;

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
      subject: 'Quote form submitted on pvnrw.de',
      text: `You have a new quote form submission`,
      html: `
      <h1>Neue Anfrage</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Bemerkung:</strong> ${note}</p>
    `,};

    const mailOptions2 = {
      from: 'alexander@pvnrw.de', // Sender's email address
      to: 'info@pvnrw.de', // Replace with your email where you want to receive the form data
      subject: 'Quote form submitted on pvnrw.de',
      text: `You have a new quote form submission`,
      html: `
          <h1>Neue Anfrage</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Bemerkung:</strong> ${note}</p>
        `, };

    try {
      await transporter.sendMail(mailOptions);
   //   await transporter.sendMail(mailOptions2);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
