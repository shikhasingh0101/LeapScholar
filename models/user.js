import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  country: String,
  intake: String,
  highestEducation: String,
  graduationYear: String,
  hasPassport: Boolean,
  ieltsStatus: String,
  hasUniversityAdmit: Boolean,
  currentCity: String,
  name: String,
  email: String,
  phone: String,
  preferredIntake: String,
});


const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
