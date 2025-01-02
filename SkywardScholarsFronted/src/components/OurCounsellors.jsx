import React from "react";
import "./OurCounsellors.css";
import { Link } from "react-router-dom";
import CounsellorSection from "../pages/counsellors";
import Footer from "../pages/Footer";

const OurCounsellors = () => {
  return (
    <div>
      {/* Top Section */}
      <section className="top-counsellor-section">
        <div className="top-counsellor-header">
          <h1 className="top-counsellor-title">Connect with India’s Top Counsellors</h1>
          <h3 className="top-counsellor-subtitle">
            Hear from our Top Students and their success stories to a global career!
          </h3>
        </div>
        <div className="top-counsellor-content">
          <img
            src="https://ik.imagekit.io/onsnhxjshmp/counsellors_group_photo_uwc2cvjts.png"
            alt="Group of Counsellors"
            className="top-counsellor-image"
          />
          <div className="top-counsellor-stats-container">
            <div className="top-counsellor-stat">
              <h5>&lt; 2 minutes</h5>
              <p>to meet your counsellor</p>
            </div>
            <div className="top-divider"></div>
            <div className="top-counsellor-stat">
              <h5>1500+</h5>
              <p>Experts to help you</p>
            </div>
          </div>
          <Link to="/form">
            <button className="top-cta-button">Start your Journey</button>
          </Link>
        </div>
      </section>

      {/* Counsellor Cards Section */}
      <section className="cards-counsellors-section">
        <h2 className="cards-section-title">Our Counsellors</h2>
        <div className="cards-counsellors-grid">
          {/* Counsellor 1 */}
          <div className="cards-counsellor-card">
            <div className="cards-counsellor-photo">
              <a
                href="https://www.linkedin.com/in/laxmi-gaba-b8887618/"
                target="_blank"
                rel="noopener noreferrer"
                className="cards-linkedin-link"
              >
                <img
                  src="https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/icons/LSRevamp/linkedin.svg"
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div className="cards-counsellor-info">
              <p className="cards-counsellor-name">Laxmi Gaba</p>
              <p className="cards-counsellor-experience">
                <span className="cards-highlight">500+</span> students counselled. Ensures
                the right college fit for her students.
              </p>
            </div>
          </div>

          {/* Counsellor 2 */}
          <div className="cards-counsellor-card">
            <div className="cards-counsellor-photo"></div>
            <div className="cards-counsellor-info">
              <p className="cards-counsellor-name">Lucinda Laishram</p>
              <p className="cards-counsellor-experience">
                <span className="cards-highlight">400+</span> students counselled. Ensures
                the right college fit for her students.
              </p>
            </div>
          </div>
        </div>
        <div className="cards-action-button">
        <Link to="/talktocounsellors">
        <button className="cards-cta-button">Talk to a Counsellor</button>
       </Link>

        </div>
      </section>

      {/* Counsellor Connect Section */}
      <div className="connect-counsellor-section">
        <div className="connect-counsellor-info">
          <h2 className="connect-counsellor-title">
            Connect with the counsellor at every step of your application with ease
          </h2>
          <h3 className="connect-counsellor-subtitle">
            Our Counsellors are available through chat and video call support at each step of your application process
          </h3>
          <div className="connect-cta-button-container">
          <Link to="/talktocounsellors">
         <button className="cards-cta-button">Talk to a Counsellor</button>
         </Link>

          </div>
        </div>
        <div className="connect-counsellor-image-container">
          <img
            alt="Counsellor Group"
            className="connect-counsellor-image"
            src="https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/images/LSRevamp/group-pic.png"
          />
        </div>
      </div>

      {/* Study Counsellor Section */}
      <section className="study-counsellor-section">
        <h2 className="study-section-title">
          Our Study Abroad Counsellors are your biggest cheerleaders
        </h2>
        <div className="study-counsellor-features">
          <div className="study-feature-card">
            <div className="study-icon-container">
              <img
                src="https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/images/LSRevamp/knowledge.svg"
                alt="Comprehensive Knowledge Base"
                className="study-feature-icon"
              />
            </div>
            <h3 className="study-feature-title">Comprehensive Knowledge Base</h3>
            <p className="study-feature-description">
              Leap training modules ensure counsellors are up to date with the latest developments.
            </p>
          </div>

          <div className="study-feature-card">
            <div className="study-icon-container">
              <img
                src="https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/images/LSRevamp/profile.svg"
                alt="Profile-based allocation"
                className="study-feature-icon"
              />
            </div>
            <h3 className="study-feature-title">Profile-based Allocation</h3>
            <p className="study-feature-description">
              Counsellors are allocated based on your profile to serve you better.
            </p>
          </div>

          <div className="study-feature-card">
            <div className="study-icon-container">
              <img
                src="https://d14lg9nzq1d3lc.cloudfront.net/scholarfrontend/assets/images/LSRevamp/feedback.svg"
                alt="Live Feedback"
                className="study-feature-icon"
              />
            </div>
            <h3 className="study-feature-title">Live Feedback</h3>
            <p className="study-feature-description">
              Regular feedback sessions to ensure your satisfaction at every stage.
            </p>
          </div>
        </div>
        <div className="study-success-stats">
          <h4>
            <span className="study-highlight-text">5000+</span> students admitted with
            <span className="study-highlight-text">97%</span> success rate till now.
          </h4>
          <p>Take a leap towards your study abroad journey.</p>
        </div>
      </section>

      <CounsellorSection />
      <Footer />
    </div>
  );
};

export default OurCounsellors;
