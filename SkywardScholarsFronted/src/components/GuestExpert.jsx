// import React, { useRef } from "react";
// import "./GuestExpert.css"; // Import your styles


// const GuestExpert = () => {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   const experts = [
//     {
//       image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fonsnhxjshmp%2FLeapScholar%2FInfluencers%2Finfluencers_web_2_1w8Ajv7tdW.jpg%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1660822698271&w=640&q=75", // Replace with actual image URL
//     },
//     {
//       image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fonsnhxjshmp%2FLeapScholar%2FInfluencers%2Finfluencers_web_6_V7NZ5X0F4i.jpg%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1660822698233&w=640&q=75", 
//     },
//     {
//       image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fonsnhxjshmp%2FLeapScholar%2FInfluencers%2Finfluencers_web_3_Gpl93Diyk.jpg%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1660822698243&w=640&q=75", 
//     },
//     {
//       image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fonsnhxjshmp%2FLeapScholar%2FInfluencers%2Finfluencers_web_5_yIS_yfgj67.jpg%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1660822698290&w=640&q=75", // Replace with actual image URL
//     },
//     {
//         image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fonsnhxjshmp%2FLeapScholar%2FInfluencers%2Finfluencers_web_2_1w8Ajv7tdW.jpg%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1660822698271&w=640&q=75", // Replace with actual image URL
//       },
//       {
//         image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fonsnhxjshmp%2FLeapScholar%2FInfluencers%2Finfluencers_web_6_V7NZ5X0F4i.jpg%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1660822698233&w=640&q=75", 
//       },
//       {
//         image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fonsnhxjshmp%2FLeapScholar%2FInfluencers%2Finfluencers_web_3_Gpl93Diyk.jpg%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1660822698243&w=640&q=75", 
//       },
//       {
//         image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fonsnhxjshmp%2FLeapScholar%2FInfluencers%2Finfluencers_web_5_yIS_yfgj67.jpg%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1660822698290&w=640&q=75", // Replace with actual image URL
//       },
//   ];

//   return (
//     <div className="containerguest">
//       <h2>Guest experts to make your application stand out</h2>
//       <div className="scroll-container">
//         <button className="scroll-button left" onClick={scrollLeft}>
//           &#9664;
//         </button>
//         <button className="scroll-button right" onClick={scrollRight}>
//           &#9654;
//         </button>
//         <div className="cards-container" ref={scrollRef}>
//           {experts.map((expert, index) => (
//             <div className="card" key={index}>
//               <img src={expert.image} alt={expert.name} />
//               <h3>{expert.name}</h3>
            
//             </div>
//           ))}
//         </div>
    
//       </div>
//       <button className="watch-button">
//   <a 
//     href="https://www.youtube.com/playlist?list=PLJ8_iKTjNyEMiTn4uFqe7wCJz3jYNa87B" 
//     target="_blank" 
//     rel="noopener noreferrer"
//     className="watch-link"
//   >
//     Watch here ➔
//   </a>
// </button>

//     </div>
//   );
// };

// export default GuestExpert;
import React, { useRef } from "react";
import "./GuestExpert.css"; // Import your styles

const GuestExpert = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const experts = [
    {
      image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fonsnhxjshmp%2FLeapScholar%2FInfluencers%2Finfluencers_web_2_1w8Ajv7tdW.jpg%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1660822698271&w=640&q=75",
    },
    {
      image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fonsnhxjshmp%2FLeapScholar%2FInfluencers%2Finfluencers_web_6_V7NZ5X0F4i.jpg%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1660822698233&w=640&q=75",
    },
    {
      image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fonsnhxjshmp%2FLeapScholar%2FInfluencers%2Finfluencers_web_3_Gpl93Diyk.jpg%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1660822698243&w=640&q=75",
    },
    {
      image: "https://leapscholar.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fonsnhxjshmp%2FLeapScholar%2FInfluencers%2Finfluencers_web_5_yIS_yfgj67.jpg%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1660822698290&w=640&q=75",
    },
  ];

  return (
    <div className="guest-container">
      <h2>Guest experts to make your application stand out</h2>
      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          &#9664;
        </button>
        <div className="cards-container" ref={scrollRef}>
          {experts.map((expert, index) => (
            <div className="card" key={index}>
              <img src={expert.image} alt={`Expert ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &#9654;
        </button>
      </div>
      <button className="watch-button">
        <a
          href="https://www.youtube.com/playlist?list=PLJ8_iKTjNyEMiTn4uFqe7wCJz3jYNa87B"
          target="_blank"
          rel="noopener noreferrer"
          className="watch-link"
        >
          Watch here ➔
        </a>
      </button>
    </div>
  );
};

export default GuestExpert;
