import nodemailer from 'nodemailer';

const sendEmail = async (to, mailOptions) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
      user: process.env.EMAIL_USER, // Make sure to use environment variables for sensitive data
      pass: process.env.EMAIL_PASS, // Make sure to use environment variables for sensitive data
    },
  });

  const mail = {
    from: process.env.EMAIL_USER, // Use your email address
    to: to, // Recipient's email
    subject: mailOptions.subject,
    text: mailOptions.text,
  };

  try {
    await transporter.sendMail(mail);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;