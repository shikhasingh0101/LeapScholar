import mongoose from 'mongoose';

const universitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  tuitionFee: { type: Number, required: true },
  studyFields: { type: [String], required: true },
  salaryRange: { type: String },
  duration: { type: String },
  location: { type: String, required: true },
  description: { type: String },
});

const University = mongoose.model('University', universitySchema);

export default University;
