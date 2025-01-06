import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js'; 
import { SECRET_KEY } from '../config/constant.js';
import  sendPushNotification from '../services/firebaseService.js';


export async function signupUser(req, res) {
  const { name, email, password, username, fcmToken } = req.body;

  try {

    if (!name || !email || !password || !username) {
      return res.status(400).json({ message: 'All fields (name, email, password, username) are required' });
    }

    
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const newUser = new User({
      name, 
      email: email.toLowerCase(),
      password: hashedPassword,
      username,
      fcmToken, 
    });

    await newUser.save();

   
    if (fcmToken) {
      sendPushNotification(fcmToken, {
        title: 'Welcome to the App!',
        body: 'You have successfully signed up.',
      });
    }

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    console.error('Error during signup:', err);
    res.status(500).json({ message: 'Error occurred while registering user', details: err.message });
  }
}


export async function signinUser(req, res) {
  const { email, password, fcmToken } = req.body;

  try {

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

 
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

   
    if (fcmToken && fcmToken !== user.fcmToken) {
      user.fcmToken = fcmToken; 
      await user.save();
    }

   
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });

   
    if (fcmToken) {
      sendPushNotification(fcmToken, {
        title: 'You are signed in!',
        body: 'Welcome back!',
      });
    }

    res.status(200).json({
      message: 'Login successful!',
      token,
    });
  } catch (err) {
    console.error('Error during signin:', err);
    res.status(500).json({ message: 'Error occurred while logging in' });
  }
}
