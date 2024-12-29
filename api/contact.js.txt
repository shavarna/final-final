import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Send email using nodemailer
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'YOUR_EMAIL@gmail.com',
          pass: 'YOUR_EMAIL_PASSWORD',
        },
      });

      await transporter.sendMail({
        from: 'YOUR_EMAIL@gmail.com',
        to: 'RECEIVING_EMAIL@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      res.status(200).json({ success: true, message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
