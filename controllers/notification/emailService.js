import nodemailer from 'nodemailer'; 

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmailNotification = async (recipientEmail, name, country, intake) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmail,
    subject: 'Application Confirmation',
    text: `Dear ${name},\n\nYour application for the ${intake} intake in ${country} has been successfully submitted.\n\nBest regards,\nTeam LeapScholar.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw error;
  }
};

export default sendEmailNotification;