import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './TalkToCounselor.css'; // Import the CSS file
import Footer from '../pages/Footer';
import { Link } from 'react-router-dom';
import StudentCards from '../pages/StudentCards';

const TalkToCounselor = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
  };

  return (
    <div className="talk-to-counselor-container">
      <h1 className="header">Talk to a Counselor</h1>
      
      {/* Counselor details */}
      <div className="contact-details">
        <h2>Contact: Shikha Singh</h2>
        <p><strong>Phone:</strong> +91 7021957194</p>
        <p><strong>Email:</strong> shikhasingh70219@gmail.com</p>
        <p><strong>Status:</strong> We aren't able to book a slot at the moment. In the meantime, you can try:</p>
        
        <ul className="info-list">
          <li>Attend an Event</li>
          <li>Learn A-Z of study abroad process</li>
          <li>Join student community</li>
          <li>Network with 3500+ students and experts</li>
          <li>Watch videos by experts</li>
          <li>Get free guidance on all aspects</li>
          <li>Take IELTS coaching</li>
          <li>Get the best IELTS coaching in the country</li>
        </ul>

        {/* Features section */}
        <section className="features-section">
          <div className="feature-item">
            <div className="feature-icon">
              <img src="https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/images/profile/disq_1.svg" alt="Attend an Event"/>
            </div>
            <div className="feature-content">
              <a href='http://localhost:5173/events'><p className="feature-title">Attend an Event</p></a>
              <p className="feature-description">Learn A-Z of study abroad process</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <img src="https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/images/profile/disq_2.svg" alt="Join student community"/>
            </div>
            <div className="feature-content">
              <a href='https://t.me/leap_abroad/?utm_source=telegram&utm_campaign=telegramcommunityc&utm_term=profilepage'><p className="feature-title">Join student community</p></a>
              <p className="feature-description">Network with 3500+ students and experts</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <img src="https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/images/profile/disq_3.svg" alt="Watch videos by experts"/>
            </div>
            <div className="feature-content">
              <a href='https://www.youtube.com/@IELTSbyLeap'><p className="feature-title">Watch videos by experts</p></a>
              <p className="feature-description">Get free guidance on all aspects</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <img src="https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/images/profile/disq_5.svg" alt="Take IELTS coaching"/>
            </div>
            <div className="feature-content">
              <p className="feature-title">Take IELTS coaching</p>
              <p className="feature-description">Get the best IELTS coaching in the country</p>
            </div>
          </div>
        </section>

        {/* LS Plus+ section */}
        <div className="ls-plus">
          <h3>LS Plus+</h3>
          <p>Get Lifetime access to LS Plus+</p>
          <p>Avail all these benefits from LS Plus+</p>
          <ul className="info-list">
            <li>1-on-1 counselling</li>
            <li>Visa, SOP, LOR help</li>
            <li>College Shortlisting</li>
            <li>Application Updates</li>
          </ul>
        </div>

        {/* People Info */}
        <div className="people-info">
          <h3>2.4K+ students trained to go abroad</h3>
          <p>India’s Top experts are here to guide:</p>
        </div>

        {/* Counselor images */}
        <Slider {...settings}>
          <div>
            <div className="counselor">
              <img 
                src="https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/icons/app_download_nudges/first.png" 
                alt="Salma"
                className="counselor-image"
              />
              <p>Salma - 10+ years exp | 2500+ students trained</p>
            </div>
          </div>
          <div>
            <div className="counselor">
              <img 
                src="https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/icons/app_download_nudges/second.png" 
                alt="Samiran Roy"
                className="counselor-image"
              />
              <p>Samiran Roy - 10+ years exp | 2500+ students trained</p>
            </div>
          </div>
          <div>
            <div className="counselor">
              <img 
                src="https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/icons/app_download_nudges/third-desk.png" 
                alt="Aakriti Jain"
                className="counselor-image"
              />
              <p>Aakriti Jain - 10+ years exp | 4000+ students trained</p>
            </div>
          </div>
          <div>
            <div className="counselor">
              <img 
                src="https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/icons/app_download_nudges/fourth-desk.png" 
                alt="Soumita Sen"
                className="counselor-image"
              />
              <p>Soumita Sen - 10+ years exp | 2500+ students trained</p>
            </div>
          </div>
        </Slider>

        {/* LeapScholar Shorts */}
        <div className="leap-scholar-shorts">
          <h3>LeapScholar Shorts</h3>
          <p>Watch our bite-size videos and plan your study abroad journey better.</p>
          <Link to="/events"><button className="button">Explore awesome events</button></Link>
        </div>

        {/* IELTS Exam Details */}
        <div className="ielts-info">
          <h3>Learn more about IELTS exam pattern, syllabus, dates, and more..</h3>
          <button className="button">Read here</button>
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <h3>Leap Wall of Love - Video Reviews</h3>

          <div className="testimonial">
            <p><strong>Prasanjeet</strong> - Band Score: 8.5</p>
            <p>Leap’s IELTS Plus was a complete study package with live interactions, materials, mock tests, and evaluations. It built a strong foundation that helped me score 8.5 bands. Your faculty are all so approachable and helpful. I am so glad I discovered LeapScholar.</p>
          </div>

          <div className="testimonial">
            <p><strong>Sonia</strong> - Band Score: 8</p>
            <p>Joining Leap was the best decision I have made in months! It is a must if you want to ace IELTS. The tips helped change my point of view of the exam, helped with my nerves, and seemed totally achievable as I focused on the strategies taught.</p>
          </div>

          <div className="testimonial">
            <p><strong>Udita</strong> - Band Score: 8</p>
            <p>LeapScholar helped me in overcoming my fear of IELTS! The mock tests, doubt solving, speaking, and grammar sessions played an important role in getting my score. The best part is Leapscholar also provided me with counseling for shortlisting my colleges. I will be suggesting LeapScholar to everyone.</p>
          </div>

          <div className="testimonial">
            <p><strong>Anonymous</strong> - Band Score: 7.5</p>
            <p>Leap helped me understand IELTS from scratch to get my desired bands in just 1 month! The study materials, essay evaluations, speaking sessions, telegram groups, and masterclasses all together were a great experience and helped boost my score.</p>
          </div>
        </div>
      </div>

      <StudentCards />
      <Footer />
    </div>
  );
};

export default TalkToCounselor;
