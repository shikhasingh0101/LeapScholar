// UsaPage.jsx
import React, { useEffect } from "react";
import "./UsaPage.css";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import UniversityDetail from "./UniversityDetail";
import Univercity from "./UnivercityPage";
import ApplicationProcess from "./ApplicationProcess";
import DiscountSection from "./DiscountSection";

const AustraliaPage = () => {
  useEffect(() => {
    // Recruiters Carousel Logic
    const leftArrow = document.getElementById("top_recruiters_left_arrow");
    const rightArrow = document.getElementById("top_recruiters_right_arrow");
    const carousel = document.getElementById("top_recruiters_carousel");
    const scrollDistance = 240;

    leftArrow?.addEventListener("click", () => {
      if (carousel) carousel.scrollLeft -= scrollDistance;
    });

    rightArrow?.addEventListener("click", () => {
      if (carousel) carousel.scrollLeft += scrollDistance;
    });
  }, []);

  return (
    <div className="usa-page">
      <main>
        <Header />

        <section className="hero-section">
      <div className="hero-content">
        {/* Text Section */}
        <div className="text-section">
          <h1 className="hero-title">
            Study in Australia for Indian Students
          </h1>
          <p className="hero-description">
            Studying in the Australia might be closer than you think. Many international students, including those from India, choose the US each year for its opportunities.
          </p>
          <div className="hero-button-container">
            <a href="http://localhost:5173/form" className="hero-button">
              Find Your Preferred University
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <g id="Icons">
                  <path
                    id="Vector"
                    d="M4.66699 10H16.3337"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M10.5 4.16602L16.3333 9.99935L10.5 15.8327"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img
            src="https://ik.imagekit.io/onsnhxjshmp/Australia_Hero_Desktop_e595c5a256.png"
            alt="university"
            className="hero-image"
          />
        </div>
      </div>
    </section>

        {/* Highlights Section */}
        <section className="highlights-section">
  <h2 className="highlights-title">
    <img
      alt="star icon"
      src="https://d14lg9nzq1d3lc.cloudfront.net/web/assets/icons/gold-star.svg"
      loading="lazy"
    />
    Highlights
  </h2>
  <p className="highlights-description">
    Here are the key details related to studying in Australia
  </p>
  <div className="highlights-grid">
    {[
      { title: "Indian Students in Australia", value: "2.5L+" },
      { title: "Acceptance Rate", value: "68%" },
      { title: "Visa Approval Rate", value: "65%" },
      { title: "Total Institutions", value: "3900+" },
      { title: "Most Preferred Intake", value: "Fall Intake" },
      { title: "Minimum IELTS Score", value: "6.5" },
      { title: "Minimum TOEFL (iBT) Score", value: "80" },
      { title: "Approximate Average Salary", value: "INR 20L" },
      { title: "Average Tuition Fee", value: "INR 2L" },
    ].map((item, index) => (
      <div key={index} className="highlights-item">
        <div className="highlights-title-text">{item.title}</div>
        <div className="highlights-value">{item.value}</div>
      </div>
    ))}
  </div>
</section>


        {/* Why Study in USA Section */}
        <section className="why-study-container">
  <h2 className="why-study-title">Why Study in Australia?</h2>

  <div className="why-study-scroll" id="whyChoose">
    {[
      {
        img: "https://ik.imagekit.io/onsnhxjshmp/Prestigious_Degrees_Global_Recognition_9272bbcc12.png",
        title: "Top Universities",
        text: "The Australia is home to some of the world’s best universities, offering you cutting-edge programmes and a chance to learn from renowned professors."
      },
      {
        img: "https://ik.imagekit.io/onsnhxjshmp/A_Mix_of_Cultures_e92e5070da.png",
        title: "Campus Culture and Safety",
        text: "Enjoy a vibrant campus life with a focus on student safety and an inclusive atmosphere."
      },
      {
        img: "https://ik.imagekit.io/onsnhxjshmp/Affordability_and_Accessibility_07fa6d0480.png",
        title: "Standard of Living",
        text: "Experience a high standard of living with access to modern amenities, healthcare facilities, and exciting cultural experiences."
      },
      {
        img: "https://ik.imagekit.io/onsnhxjshmp/Thriving_Innovation_Hub_7f57133822.png",
        title: "Thriving Innovation Hub",
        text: "The US is a global leader in research and development. Studying here puts you at the forefront of innovation."
      },
      {
        img: "https://ik.imagekit.io/onsnhxjshmp/Post_Graduation_Pathways_c3dd0b6936.png",
        title: "High ROI",
        text: "A degree from the Australia opens doors to global career opportunities, making it a worthwhile investment in your future."
      }
    ].map((item, index) => (
      <div key={index} className="why-study-card">
        <img src={item.img} alt="Card Image" loading="lazy" />
        <div className="why-study-card-content">
          <p className="why-study-title-text">{item.title}</p>
          <p className="why-study-description">{item.text}</p>
        </div>
      </div>
    ))}
  </div>
  <div className="image-section">
          <img
            src="https://ik.imagekit.io/onsnhxjshmp/Australia_ed6ef99139.png"
            alt="university"
            className="expert-image"
          />
  </div>
 
</section>
         <DiscountSection/>

         <Univercity/>
         <ApplicationProcess/>
        <Footer />
      </main>
    </div>
  );
};

export default AustraliaPage;
