// /pages/api/discount.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      postcode,
      householdSize,
      annualConsumption,
      peakUsageTime,
      roofInclination,
      roofArea,
      name,
      phone,
    } = req.body;

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
      subject: 'New Discount Form Submission', // Subject of the email
      text: `You have received a new discount form submission:

      Name: ${name}
      Phone: ${phone}
      Postcode: ${postcode}
      Household Size: ${householdSize}
      Annual Consumption: ${annualConsumption}
      Peak Usage Time: ${peakUsageTime}
      Roof Inclination: ${roofInclination}
      Roof Area: ${roofArea}
      `,
      html: `
        <p>You have received a new discount form submission:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Postcode:</strong> ${postcode}</li>
          <li><strong>Household Size:</strong> ${householdSize}</li>
          <li><strong>Annual Consumption:</strong> ${annualConsumption}</li>
          <li><strong>Peak Usage Time:</strong> ${peakUsageTime}</li>
          <li><strong>Roof Inclination:</strong> ${roofInclination}</li>
          <li><strong>Roof Area:</strong> ${roofArea}</li>
        </ul>
      `,
    };

    const mailOptions2 = {
      from: 'alexander@pvnrw.de', // Sender's email address
      to: 'info@pvnrw.de', // Another recipient
      subject: 'New Discount Form Submission',
      text: `You have received a new discount form submission:

      Name: ${name}
      Phone: ${phone}
      Postcode: ${postcode}
      Household Size: ${householdSize}
      Annual Consumption: ${annualConsumption}
      Peak Usage Time: ${peakUsageTime}
      Roof Inclination: ${roofInclination}
      Roof Area: ${roofArea}
      `,
      html: `
        <p>You have received a new discount form submission:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Postcode:</strong> ${postcode}</li>
          <li><strong>Household Size:</strong> ${householdSize}</li>
          <li><strong>Annual Consumption:</strong> ${annualConsumption}</li>
          <li><strong>Peak Usage Time:</strong> ${peakUsageTime}</li>
          <li><strong>Roof Inclination:</strong> ${roofInclination}</li>
          <li><strong>Roof Area:</strong> ${roofArea}</li>
        </ul>
      `,
    };

    try {
      // Send emails
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(mailOptions2);
      res.status(200).json({ message: 'Ihre Anfrage wurde erfolgreich gesendet! Unser Team wird sich in Kürze mit Ihnen in Verbindung setzen' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
