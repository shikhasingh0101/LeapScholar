import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: String,
  intake: String,
  program: String,
  education: String,
  ieltsStatus: String,
  universityAdmit: String,
  currentCity: String,
  percentage: String,
  graduationYear: String,
  passportStatus: String,
});

const Form = mongoose.model('Form', formSchema);
export default Form