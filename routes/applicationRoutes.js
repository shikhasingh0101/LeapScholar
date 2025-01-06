import express from 'express';
import multer from 'multer';
import Application from '../models/Application.js';
import University from '../models/UniversityModel.js';

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

const router = express.Router();

// POST route to submit an application
router.post('/', upload.fields([
  { name: 'academicTranscripts', maxCount: 1 },
  { name: 'testScores', maxCount: 1 },
  { name: 'englishProficiencyScores', maxCount: 1 },
  { name: 'lettersOfRecommendation', maxCount: 1 },
  { name: 'sop', maxCount: 1 },
  { name: 'resume', maxCount: 1 },
  { name: 'financialDocuments', maxCount: 1 },
  { name: 'passportAndVisa', maxCount: 1 },
]), async (req, res) => {
  try {
    const {
      studentName,
      email,
      phone,
      eligibilityCriteriaMet,
      universityId,
    } = req.body;

    // Check if the university exists
    const university = await University.findById(universityId);
    if (!university) {
      return res.status(404).json({ message: 'University not found' });
    }

    // Save application data
    const newApplication = new Application({
      studentName,
      email,
      phone,
      eligibilityCriteriaMet: JSON.parse(eligibilityCriteriaMet),
      universityId,
      documents: {
        academicTranscripts: req.files.academicTranscripts?.[0]?.path || '',
        testScores: req.files.testScores?.[0]?.path || '',
        englishProficiencyScores: req.files.englishProficiencyScores?.[0]?.path || '',
        lettersOfRecommendation: req.files.lettersOfRecommendation?.[0]?.path || '',
        sop: req.files.sop?.[0]?.path || '',
        resume: req.files.resume?.[0]?.path || '',
        financialDocuments: req.files.financialDocuments?.[0]?.path || '',
        passportAndVisa: req.files.passportAndVisa?.[0]?.path || '',
      },
    });

    await newApplication.save();

    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

// GET route to fetch all applications
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find().populate('universityId', 'name country ranking');
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

export default router;
