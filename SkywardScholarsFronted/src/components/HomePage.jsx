import React, { useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [filters, setFilters] = useState({ tuitionFee: '', studyFields: '', duration: '' });
  const [universities, setUniversities] = useState([]);

  const searchUniversities = async () => {
    const { data } = await axios.post('/api/universities/search', filters);
    setUniversities(data);
  };

  return (
    <div>
      <h1>Search Universities</h1>
      <input
        type="text"
        placeholder="Tuition Fee"
        onChange={(e) => setFilters({ ...filters, tuitionFee: e.target.value })}
      />
      <input
        type="text"
        placeholder="Fields of Study"
        onChange={(e) => setFilters({ ...filters, studyFields: e.target.value.split(',') })}
      />
      <button onClick={searchUniversities}>Search</button>
      <ul>
        {universities.map((u) => (
          <li key={u._id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
