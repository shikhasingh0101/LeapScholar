import React from "react";
import "./Events.css";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import CounsellorSection from "../pages/counsellors.jsx";
import Faq from "../pages/FAQS";
import { useState } from "react";

const features = [
  {
    title: "Hear from top experts & speakers",
    icon: "🔴",
    description: "Live",
  },
  {
    title: "Exclusive goodies for attendees",
    icon: "🎁",
    description: "Gift",
  },
  {
    title: "Access knowledge for free",
    icon: "📚",
    description: "Free",
  },
];

const stats = [
  { value: "3,00,000+", label: "Attendees" },
  { value: "500+", label: "Events Organized" },
  { value: "4.8/5", label: "Rating By Students" },
  { value: "#1", label: "Study Abroad Events" },
];

const whyAttend = [
  {
    title: "Top Speakers",
    description:
      "Hear from Indian students living abroad, university reps, counsellors & experts",
    icon: "🎙️",
  },
  {
    title: "Quality Content",
    description:
      "You get personal insights & guidance straight from the best speakers",
    icon: "📘",
  },
  {
    title: "Networking",
    description:
      "Meet fellow study abroad aspirants & seniors to build your network",
    icon: "🤝",
  },
];
const previousSpeakers = [
  {
    imgSrc: "https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/icons/LSRevamp/joshua_vasudevan.svg", 
    name: "Joshua Vasudevan",
    designation: "PhD Researcher at Loughborough University, UK",
  },
  {
    imgSrc: "https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/icons/LSRevamp/tanisha_mandre.svg",
    name: "Tanisha Mandre",
    designation: "Engineer @ Google, MSc from Imperial College, London",
  },
  {
    imgSrc: "https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/icons/LSRevamp/hardik_khetrapal.svg", 
    name: "Hardik Khetrapal",
    designation: "International Business Management from Seneca College, Canada",
  },
  {
    imgSrc: "https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/icons/LSRevamp/prateek_uniyal.svg", 
    name: "Prateek Uniyal",
    designation: "Global Business Management from Humber College, Canada",
  },
];

const faqs = [
  {
    question: "Are all these events free of cost?",
    answer:
      "We at Leap believe in democratizing study abroad education and reducing the information gap in your study abroad journey to help you make an informed decision, that's why all the events are absolutely FREE.",
  },
  {
    question: "How will I join the session?",
    answer:
      "You will receive a link to the session via email or text message after registration.",
  },
  {
    question: "How will I get access to giveaways for any event?",
    answer:
      "All giveaways will be distributed to attendees during or after the event. Details will be shared in the session.",
  },
];

function Events() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Header />
      <div className="events-container">
        {/* Top Section */}
        <div className="events-banner">
          <div className="banner-text">
            <h1>Live events for study abroad aspirants.</h1>
            <h2>Hear from expert speakers</h2>
            <div className="features">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <p className="feature-description">{feature.description}</p>
                  <p className="feature-title">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="banner-image">
            <img
              src="https://leapscholar.com/_next/image?url=https%3A%2F%2Fd14lg9nzq1d3lc.cloudfront.net%2Fscholarfrontend%2Fassets%2Ficons%2FLSRevamp%2Fwebsite_hero_event_poster.png&w=750&q=75"
              alt="Study Abroad Events"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="events-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Why Attend Section */}
        <div className="why-attend-section">
          <h2>Why should you attend our events?</h2>
          <div className="why-attend-features">
            {whyAttend.map((item, index) => (
              <div key={index} className="why-attend-card">
                <div className="why-attend-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="previous-speakers-section">
          <h2>Our Previous Speakers</h2>
          <div className="speakers-container">
            {previousSpeakers.map((speaker, index) => (
              <div key={index} className="speaker-card">
                <img
                  src={speaker.imgSrc}
                  alt={speaker.name}
                  className="speaker-img"
                />
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-designation">{speaker.designation}</p>
              </div>
            ))}
          </div>
        </div>
        
         
        <Faq/>
      <CounsellorSection/>
      <Footer />
    </div>
  );
}

export default Events;
