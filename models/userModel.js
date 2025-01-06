import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // Ensures no duplicate email addresses
      lowercase: true, // Stores email in lowercase
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true, // Ensure name is provided during signup
      trim: true, // Removes unnecessary white spaces
    },
    username: { 
      type: String, 
      unique: true, 
      required: true 
    },
    role: {
      type: String,
      enum: ['user', 'admin'], // Restricts role to either 'user' or 'admin'
      default: 'user', // Default role is 'user'
    },
    fcmToken: {
      type: String,
      default: null, // Stores Firebase Cloud Messaging token
    },
    
    
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const User = mongoose.model('User', userSchema);

export default User;
