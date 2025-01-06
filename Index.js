import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { ApolloServer } from 'apollo-server-express'; 
import typeDefs from './controllers/graphql/schema.js';
import resolvers from './controllers/graphql/resolvers.js';
import Form from './models/formModel.js'; 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './models/userModel.js';  
import universitiesRoutes from './routes/universities.js'; 
import applicationRoutes from './routes/applicationRoutes.js';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import notificationRoutes from './routes/notificationRoutes.js';
import sendEmail from './services/emailService.js';
import {getIeltsCourses} from './controllers/ieltsController.js';
import nodemailer from 'nodemailer'; 



dotenv.config(); 

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST'], 
  credentials: true 
}));
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(bodyParser.json());

app.get('/api/ielts/courses', getIeltsCourses )


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); 
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
  next();
});

app.use(express.urlencoded({ extended: true })); 
app.use('/api', notificationRoutes);
app.use(express.json());
app.use(bodyParser.json());



app.post('/submit-application', (req, res) => {
  console.log('Application received:', req.body);
  res.status(200).json({ message: 'Application submitted successfully!' });
});
app.use(helmet()); 


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);
app.get('/', (req, res) => {
  res.send('Application API is running');
});

const startMongoDB = async () => {
  try {
    await connectDB();
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};


app.use('/auth', authRoutes);
app.use('/api', userRoutes);
app.use('/api/universities', universitiesRoutes);


const FcmTokenSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const FcmToken = mongoose.model('FcmToken', FcmTokenSchema);

app.post('/api/save-fcm-token', async (req, res) => {
  const { token, userId } = req.body;

  if (!token || !userId) {
    return res.status(400).json({ error: 'FCM token and userId are required.' });
  }

  try {
    const existingToken = await FcmToken.findOne({ userId, token });
    if (existingToken) {
      return res.status(200).json({ message: 'Token already saved.' });
    }

    const newToken = new FcmToken({ userId, token });
    await newToken.save();

    res.status(200).json({ message: 'FCM Token saved successfully.' });
  } catch (error) {
    console.error('❌ Error saving FCM token:', error.message);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Register
app.post('/auth/register', async (req, res) => {
  const { name, email, password, username } = req.body;

  if (!name || !email || !password || !username) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newUser = new User({ name, email, password, username });
    await newUser.save();
    return res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "Error occurred while registering user", details: error.message });
  }
});

// Login

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }


    const token = jwt.sign(
      { userId: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );


    res.status(200).json({ token });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});


app.post('/api/send-email', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Test Email',
      text: 'This is a test email sent from your backend!',
    };

    // Send email
    await transporter.sendMail(mailOptions);

   
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error during sending email:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});


app.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }


    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }


    const token = jwt.sign(
      { userId: user._id, name: user.name, email: user.email },
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );


    await sendEmail(email, {
      subject: 'Welcome Back!',
      text: 'You have successfully logged into the application. Happy to see you again!',
    });


    res.status(200).json({ token, message: 'Login successful. Welcome email sent.' });

  } catch (error) {
    console.error('Error during enhanced login:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

app.post('/api/save-form', async (req, res) => {
  const {
    name,
    email,
    phone,
    country,
    intake,
    program,
    education,
    ieltsStatus,
    universityAdmit,
    currentCity,
    percentage,
    graduationYear,
    passportStatus,
  } = req.body;

  if (!name || !email || !phone || !country || !intake || !program || !education) {
    return res.status(400).json({ error: 'All required fields must be filled.' });
  }

  try {
    const newForm = new Form({ name, email, phone, country, intake, program, education, ieltsStatus, universityAdmit, currentCity, percentage, graduationYear, passportStatus });
    await newForm.save();
    res.status(200).json({ message: 'Form data received and saved successfully!', formData: newForm });
  } catch (error) {
    console.error('❌ Error saving form data:', error.message);
    res.status(500).json({ error: 'Internal server error.', details: error.message });
  }
});


async function startGraphQLServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  console.log(`🚀 GraphQL server ready at http://localhost:${PORT}/graphql`);
}



const PORT = process.env.PORT || 8000;

const startServer = async () => {
  await startMongoDB(); 
  await startGraphQLServer(); 

  app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
  });
};

startServer();
