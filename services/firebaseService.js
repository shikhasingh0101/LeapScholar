import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';


import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const serviceAccountPath = path.resolve(__dirname, '/Users/shikhasingh/Desktop/skywardScholars/skywardScholarsBackend/services/config/skyward-scholars-firebase-adminsdk-aykqn-269331b02f.json');


const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath));


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const sendPushNotification = async (fcmToken, message) => {
  try {
    const response = await fetch("https://fcm.googleapis.com/fcm/send", {
      method: "POST",
      headers: {
        Authorization: `key=${process.env.FCM_SERVER_KEY}`, 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: fcmToken,
        notification: {
          title: message.title,
          body: message.body,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send push notification");
    }

    console.log("Push notification sent successfully!");
  } catch (error) {
    console.error("Error sending push notification:", error);
  }
};

export default sendPushNotification;


