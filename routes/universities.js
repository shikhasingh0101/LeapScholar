import express from 'express';
import University from '../models/UniversityModel.js';
import mongoose from 'mongoose';

const router = express.Router();

// Search universities with filters
router.post('/search', async (req, res) => {
  const { tuitionFee, studyFields, salaryRange, duration, city, degree, course, ranking } = req.body;

  try {
    const filters = {};

    // Apply filters based on provided fields
    if (tuitionFee) filters.tuitionFee = { $lte: tuitionFee };
    if (studyFields) filters.studyFields = { $in: studyFields };
    if (salaryRange) filters.salaryRange = { $gte: salaryRange }; // Assuming salaryRange is a minimum value
    if (duration) filters.duration = duration;
    if (city) filters.city = { $regex: city, $options: 'i' }; // Case-insensitive matching for city
    if (degree) filters.degree = { $regex: degree, $options: 'i' }; // Case-insensitive matching for degree
    if (course) filters.course = { $regex: course, $options: 'i' }; // Case-insensitive matching for course
    if (ranking) filters.ranking = ranking;

    // Fetch universities based on the constructed filters
    const universities = await University.find(filters);
    if (universities.length > 0) {
      res.json(universities);
    } else {
      res.status(404).json({ message: 'No universities found matching the filters' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Check eligibility for a university
router.post('/:id/check-eligibility', async (req, res) => {
  const { qualifications } = req.body;
  const { id } = req.params;

  try {
    const university = await University.findById(id);
    if (!university) return res.status(404).json({ message: 'University not found' });

    // Check if all qualifications match the university's study fields
    const isEligible = qualifications.every((q) => university.studyFields.includes(q));

    res.json({ eligible: isEligible, university });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get a university by ID with dynamic filters (e.g., city, degree, course, etc.)
router.get('/api/universities/:id', async (req, res) => {
  const { id } = req.params;
  const filters = req.query; // Get query parameters

  try {
    const filterCriteria = { _id: id };

    // Applying dynamic filters from the query parameters
    if (filters.city) filterCriteria.city = { $regex: filters.city, $options: 'i' };
    if (filters.degree) filterCriteria.degree = { $regex: filters.degree, $options: 'i' };
    if (filters.course) filterCriteria.course = { $regex: filters.course, $options: 'i' };
    if (filters.ranking) filterCriteria.ranking = filters.ranking;

    // Fetch university based on the dynamic filter criteria
    const university = await University.findOne(filterCriteria);

    if (!university) {
      return res.status(404).json({ message: 'University not found' });
    }

    res.json(university);
  } catch (err) {
    console.error("Error fetching university:", err); // Log detailed error on the server
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const university = await University.findById(req.params.id);
    if (!university) {
      return res.status(404).json({ message: 'University not found' });
    }
    res.status(200).json(university);
  } catch (error) {
    console.error('Error fetching university:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



export default router;



