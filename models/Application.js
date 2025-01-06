import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  eligibilityCriteriaMet: { type: Boolean, required: true },
  universityId: { type: mongoose.Schema.Types.ObjectId, ref: 'University', required: true },
  appliedAt: { type: Date, default: Date.now },
  documents: {
    academicTranscripts: String,
    testScores: String,
    englishProficiencyScores: String,
    lettersOfRecommendation: String,
    sop: String,
    resume: String,
    financialDocuments: String,
    passportAndVisa: String,
  },
});

const Application = mongoose.model('Application', applicationSchema);

export default Application;
