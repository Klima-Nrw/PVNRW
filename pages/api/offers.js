import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      name,
      phone,
      offer, // This offer object now contains specific properties
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

    // Assuming `offer` is an object with properties like power, storage, etc.
    const { power, storage, originalPrice, salePrice } = offer;

    // Construct the email body for the first recipient (e.g., maazmasood001@gmail.com)
    const mailOptions = {
      from: 'alexander@pvnrw.de', // Sender's email address
      to: 'maazmasood001@gmail.com', // Replace with your email where you want to receive the data
      subject: 'Discount offer ordered', // Subject of the email
      text: `You have received a new order for a Discount offer:

      Name: ${name}
      Phone: ${phone}
      
      Power: ${power}
      Storage: ${storage}
      Original Price: ${originalPrice}
      Sale Price: ${salePrice}
    
      `,
      html: `
        <p>You have received a new discount form submission:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Power:</strong> ${power}</li>
          <li><strong>Storage:</strong> ${storage}</li>
          <li><strong>Original Price:</strong> ${originalPrice}</li>
          <li><strong>Sale Price:</strong> ${salePrice}</li>
        </ul>
      `,
    };

    // Construct the email body for the second recipient (e.g., info@pvnrw.de)
    const mailOptions2 = {
      from: 'alexander@pvnrw.de', // Sender's email address
      to: 'info@pvnrw.de', // Another recipient
      subject: 'Discount offer ordered', // Subject of the email
      text: `You have received a new order for a Discount offer:

      Name: ${name}
      Phone: ${phone}
      
      Power: ${power}
      Storage: ${storage}
      Original Price: ${originalPrice}
      Sale Price: ${salePrice}
    
      `,
      html: `
        <p>You have received a new discount form submission:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Power:</strong> ${power}</li>
          <li><strong>Storage:</strong> ${storage}</li>
          <li><strong>Original Price:</strong> ${originalPrice}</li>
          <li><strong>Sale Price:</strong> ${salePrice}</li>
        </ul>
      `,
    };

    try {
      // Send emails
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(mailOptions2);

      // Log the data (for debugging purposes)
      console.log(phone, name, offer);

      // Respond with a success message
      res.status(200).json({ message: 'Ihre Anfrage wurde erfolgreich gesendet! Unser Team wird sich in Kürze mit Ihnen in Verbindung setzen' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ message: 'Method not allowed' });
  }
}
