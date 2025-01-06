import express from 'express';
import sendPushNotification  from '../services/firebaseService.js';

const router = express.Router();

// Define the /send-notification route
router.post('/send-notification', (req, res) => {
    console.log("Request body:", req.body); // Debugging log
    
    const { fcmToken, title, body } = req.body;
    if (!fcmToken || !title || !body) {
      console.log("Missing fields:", { fcmToken, title, body });
      return res.status(400).json({ error: "Missing required fields" });
    }
  
    // Send notification
    res.status(200).json({ message: "Notification sent successfully!" });
  });
  
  
  

export default router;

