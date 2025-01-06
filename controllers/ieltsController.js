import axios from 'axios';

const API_KEY = 'Bearer qy87w3a1Dxh2dUIMRzDAzNZxLsWU1MGsLV9BIeRkBtyFIvUM';  // Replace with your actual API key
const COURSES_API = 'https://api.coursera.org/enterprise/v1/courses';  // Example API endpoint for courses

// Get IELTS Courses from Coursera API
export const getIeltsCourses = async (req, res) => {
  try {
    const response = await axios.get(COURSES_API, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching IELTS courses:', error);
    res.status(500).json({ message: 'Error fetching courses' });
  }
};

// Get IELTS Booking Details (mocked data for demo)
export const getBookingDetails = (req, res) => {
  const bookingDetails = {
    dates: ['2024-02-01', '2024-03-05', '2024-04-20'],
    availableLocations: ['London', 'New York', 'Sydney'],
    instructions: 'Please ensure your ID matches the one used during registration.',
  };

  res.json(bookingDetails);
};

// Get IELTS Module Details (mocked data for demo)
export const getModuleDetails = (req, res) => {
  const moduleDetails = {
    listening: {
      description: 'Improve listening comprehension skills.',
      duration: '30 minutes',
      practiceTests: 3,
    },
    speaking: {
      description: 'Prepare for the speaking section with practical exercises.',
      duration: '15 minutes',
      practiceTests: 2,
    },
    reading: {
      description: 'Enhance reading speed and accuracy.',
      duration: '40 minutes',
      practiceTests: 4,
    },
    writing: {
      description: 'Refine your writing skills for the exam.',
      duration: '40 minutes',
      practiceTests: 4,
    },
  };

  res.json(moduleDetails);
};

// Get IELTS Practice Test (mocked data for demo)
export const getPracticeTest = (req, res) => {
  const practiceTest = {
    testName: 'IELTS Full Practice Test',
    duration: '2 hours 45 minutes',
    totalQuestions: 100,
    availableOnline: true,
    link: 'https://example.com/ielts-practice-test',
  };

  res.json(practiceTest);
};

// Get IELTS Exam Overview (mocked data for demo)
export const getExamOverview = (req, res) => {
  const examOverview = {
    sections: ['Listening', 'Reading', 'Writing', 'Speaking'],
    totalDuration: '2 hours 45 minutes',
    scoreRange: '0 - 9',
    examFee: '$250 USD',
    registrationLink: 'https://ielts.org/register',
  };

  res.json(examOverview);
};
