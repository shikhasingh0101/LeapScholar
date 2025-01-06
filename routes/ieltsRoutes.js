import express from 'express';
import axios from 'axios';

const router = express.Router();


const API_KEY = 'qy87w3a1Dxh2dUIMRzDAzNZxLsWU1MGsLV9BIeRkBtyF IvUM'; 

const COURSES_API = 'https://api.coursera.org/api/v1/courses.json'; 


router.get('/api/ielts/courses', async (req, res) => {
  const { search } = req.query; 

  try {
    let url = COURSES_API;
    if (search) {
      url = `${COURSES_API}?q=${search}`; 
    }

    
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });

 
    console.log('Coursera API Response:', response.data);


    if (response.data && response.data.elements) {
      res.json(response.data.elements); 
    } else {
      res.status(404).json({ message: 'No courses found' });
    }
  } catch (error) {
    console.error('Error fetching IELTS courses:', error);
    res.status(500).json({ message: 'Error fetching courses' });
  }
});

export default router; 
