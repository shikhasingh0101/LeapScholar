import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null); // For storing errors

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get('http://localhost:8000/api/ielts/courses');
        setCourses(response.data); // Assuming the API sends back an array of courses
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Failed to fetch courses');
      }
    }
    fetchCourses();
  }, []); // Only run once when the component mounts

  return (
    <div>
      <h2>IELTS Courses</h2>
      {error && <p>{error}</p>} {/* Display error message */}
      <ul>
        {courses.length > 0 ? (
          courses.map((course) => (
            <li key={course.id}>{course.name}</li> // Assuming courses have 'id' and 'name' properties
          ))
        ) : (
          <p>No courses available</p>
        )}
      </ul>
    </div>
  );
};

export default CourseList;
