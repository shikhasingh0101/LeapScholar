import React from "react";
import { useNavigate } from "react-router-dom";
import "./UnivercityPage.css";

// University data
const universities = [
  {
    rank: "#16",
    city: "Cambridge, MA",
    id: "67612b45d962b16cbbc78be9",
    universities: "2 Universities",
    image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    rank: "#18",
    city: "Stanford, CA",
    id: "67612b45d962b16cbbc78bea",
    universities: "1 University",
    image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    rank: "#29",
    city: "Pasadena, CA",
    id: "67612b45d962b16cbbc78beb",
    universities: "1 University",
    image: "https://images.pexels.com/photos/207729/pexels-photo-207729.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    rank: "#37",
    city: "Oxford, England",
    id: "67612b45d962b16cbbc78bec",
    universities: "1 University",
    image: "https://images.pexels.com/photos/556195/pexels-photo-556195.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    rank: "#44",
    city: "Cambridge, England",
    id: "67612b45d962b16cbbc78bed",
    universities: "1 University",
    image: "https://images.pexels.com/photos/29737879/pexels-photo-29737879/free-photo-of-historic-university-quadrangle-on-a-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  { 
    rank: "#65",
     city: "Seoul, South Korea", 
     id: "67612b45d962b16cbbc78bf7", 
     universities: "1 University", 
     image: "https://images.pexels.com/photos/7317589/pexels-photo-7317589.jpeg?auto=compress&cs=tinysrgb&w=800" },
  {
     rank: "#69", 
     city: "Melbourne, Australia", 
     id: "67612b45d962b16cbbc78bf8", 
     universities: "1 University", 
     image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800"
   },
  { 
    rank: "#80",
    city: "Ann Arbor, MI", 
    id: "67612b45d962b16cbbc78bf9", 
    universities: "1 University", 
    image: "https://images.pexels.com/photos/11210303/pexels-photo-11210303.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    rank: "#16",
    city: "Stockholm, Sweden", 
    id: "67612b45d962b16cbbc78bfa", 
    universities: "1 University", 
    image: "https://images.pexels.com/photos/29737876/pexels-photo-29737876/free-photo-of-historic-university-architecture-with-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    rank: "#18", 
    city: "Edinburgh, Scotland", 
    id: "67612b45d962b16cbbc78bfb", 
    universities: "1 University", 
    image: "https://images.pexels.com/photos/26829041/pexels-photo-26829041/free-photo-of-facade-of-the-university-of-belgrade-serbia.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    rank: "#29", 
    city: "Pittsburgh, PA", 
    id: "67612b45d962b16cbbc78bfc", 
    universities: "1 University", 
    image: "https://images.pexels.com/photos/25565759/pexels-photo-25565759/free-photo-of-greenery-in-front-of-university-of-cuenca-in-ecuador.png?auto=compress&cs=tinysrgb&w=800" 
  }
];


function Univercity() {
  const navigate = useNavigate();
  const scrollContainerRef = React.useRef(null);

  // Scroll Functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Redirect Function
  const redirectToUniversityDetail = (universityId) => {
    navigate(`/university/${universityId}`);
  };

  return (
    <div className="container-usa">
      <h2>Popular Places to Study</h2>

      {/* Scrollable Container */}
      <div className="scroll-container" ref={scrollContainerRef}>
        {universities.map((item) => (
          <div
            key={item.id} // Ensures unique key for each element
            className="city-card"
            onClick={() => redirectToUniversityDetail(item.id)}
          >
            <img src={item.image} alt={item.city} className="city-image" />
            <div className="city-rank">{item.rank}</div>
            <div className="city-info">
              <h3>{item.city}</h3>
              <p>{item.universities} &#8594;</p>
              
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Buttons */}
      <div className="scroll-button left" onClick={scrollLeft}>
        &#8592;
      </div>
      <div className="scroll-button right" onClick={scrollRight}>
        &#8594;
      </div>
    </div>
  );
}

export default Univercity;
