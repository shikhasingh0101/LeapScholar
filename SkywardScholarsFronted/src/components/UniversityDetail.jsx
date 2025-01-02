import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UniversityDetail.css';


  const UniversityDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [university, setUniversity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
      city: '',
      degree: '',
      course: '',
      fees: '',
      intake: '',
      duration: '',
      ranking: '',
    });
  
    const clearAllFilters = () => {
      setFilters({
        city: '',
        degree: '',
        course: '',
        fees: '',
        intake: '',
        duration: '',
        ranking: '',
      });
    };
  
    useEffect(() => {
      if (!id) {
        setError('Invalid university ID');
        setLoading(false);
        return;
      }
      
      const fetchUniversity = async () => {
        try {
          const filteredParams = Object.entries(filters)
          const queryParams = filteredParams ? `?${filteredParams}` : ''; // Add '?' only if there are filters
          const response = await axios.get(`http://localhost:8000/api/universities/${id}`);
      
          console.log("API Response Data:", response.data);  // Log the response
      
          if (Array.isArray(response.data) && response.data.length > 0) {
            setUniversity(response.data[0]); // Assuming response.data is an array
          } else if (response.data) {
            setUniversity(response.data); // Assuming it's a single object
          } else {
            setError('No university data found');
          }
      
          setLoading(false);
        } catch (err) {
          console.error("Error fetching data:", err); // Log the error
          setError('Failed to load university details');
          setLoading(false);
        }
      };
  
      fetchUniversity();
    }, [id, filters]); // Trigger the effect when either `id` or `filters` change
  
    const handleFilterChange = (e) => {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    };
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
  
    if (!university) {
      return <div>No university data available</div>;
    }

  return (
    <div className="university-detail">
      <div className="filters-container">
        <h3>Filters</h3>
        <button onClick={clearAllFilters} className="clear-btn">Clear All</button>

        {/* City Filter */}
        <div className="filter-group">
          <h4>City</h4>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={filters.city}
            onChange={handleFilterChange}
          />
        </div>

        {/* Degree Filter */}
        <div className="filter-group">
          <h4>Degree</h4>
          <select name="degree" value={filters.degree} onChange={handleFilterChange}>
            <option value="">Select Degree</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="Ph.D.">Ph.D.</option>
          </select>
        </div>

        {/* Course Filter */}
        <div className="filter-group">
          <h4>Course</h4>
          <select name="course" value={filters.course} onChange={handleFilterChange}>
            <option value="">Select Course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Business Administration">Business Administration</option>
          </select>
        </div>

        {/* Fees Filter */}
        <div className="filter-group">
          <h4>Fees</h4>
          <select name="fees" value={filters.fees} onChange={handleFilterChange}>
            <option value="">Select Fee Range</option>
            <option value="Max ₹10 Lacs">Max ₹10 Lacs</option>
            <option value="Max ₹20 Lacs">Max ₹20 Lacs</option>
            <option value="Max ₹30 Lacs">Max ₹30 Lacs</option>
            <option value="₹40 Lacs +">₹40 Lacs +</option>
          </select>
        </div>

        {/* Intake Filter */}
        <div className="filter-group">
          <h4>Intake</h4>
          <input
            type="text"
            name="intake"
            placeholder="Intake"
            value={filters.intake}
            onChange={handleFilterChange}
          />
        </div>

        {/* Duration Filter */}
        <div className="filter-group">
          <h4>Duration</h4>
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={filters.duration}
            onChange={handleFilterChange}
          />
        </div>

        {/* Ranking Filter */}
        <div className="filter-group">
          <h4>Ranking</h4>
          <input
            type="text"
            name="ranking"
            placeholder="Ranking"
            value={filters.ranking}
            onChange={handleFilterChange}
          />
        </div>
      </div>

      <div className="university-info">
        <h1>{university.name}</h1>
        <div className="university-details">
          {Object.entries(university).map(([key, value]) => (
            <div key={key} className="detail-item">
              <p>
                <strong>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong>
                {Array.isArray(value) ? value.join(', ') : value}
              </p>
            </div>
          ))}
        </div>
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
};

export default UniversityDetail;
