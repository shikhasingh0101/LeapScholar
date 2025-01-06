// server/services/notificationService.js
const admin = require('firebase-admin');
const serviceAccount = require('../config/firebaseConfig.json');  // Add your Firebase admin SDK key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const sendNotification = (token, message) => {
  const payload = {
    notification: {
      title: 'Study Abroad Journey',
      body: message,
    },
  };

  admin.messaging().sendToDevice(token, payload)
    .then(response => {
      console.log('Notification sent successfully:', response);
    })
    .catch(error => {
      console.error('Error sending notification:', error);
    });
};

module.exports = { sendNotification };
