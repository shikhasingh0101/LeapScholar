import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./ApplicationProcess.css";

const steps = [
  {
    step: 1,
    title: "Academic Transcripts",
    description:
      "Official transcripts from all previously attended institutions.",
    fieldName: "academicTranscripts",
    type: "file",
  },
  {
    step: 2,
    title: "Standardised Test Scores",
    description:
      "Most universities ask for SAT/ACT (undergraduate) or GRE/GMAT (postgraduate).",
    fieldName: "testScores",
    type: "file",
  },
  {
    step: 3,
    title: "English Proficiency Test Scores",
    description: "Non-native speakers need TOEFL or IELTS scores.",
    fieldName: "englishProficiencyScores",
    type: "file",
  },
  {
    step: 4,
    title: "Letters of Recommendation",
    description:
      "Typically, you'll need 2-3 letters of recommendation from professors or employers highlighting your skills and potential.",
    fieldName: "lettersOfRecommendation",
    type: "file",
  },
  {
    step: 5,
    title: "Statement of Purpose (SOP)",
    description:
      "A personal essay highlighting your achievements and goals and why you're a good fit for the program.",
    fieldName: "sop",
    type: "file",
  },
  {
    step: 6,
    title: "Resume/CV",
    description: "A detailed document highlighting your academic achievements, work experience, and extracurricular activities.",
    fieldName: "resume",
    type: "file",
  },
  {
    step: 7,
    title: "Financial Documents",
    description:
      "Proof of your financial resources to cover tuition, fees, and living expenses. This may include bank statements, scholarship awards, or loan approvals.",
    fieldName: "financialDocuments",
    type: "file",
  },
  {
    step: 8,
    title: "Passport and Visa",
    description: "A copy of your valid passport and F-1 student visa.",
    fieldName: "passportAndVisa",
    type: "file",
  },
];

function ApplicationProcess() {
  const [formData, setFormData] = useState({
    academicTranscripts: null,
    testScores: null,
    englishProficiencyScores: null,
    lettersOfRecommendation: null,
    sop: null,
    resume: null,
    financialDocuments: null,
    passportAndVisa: null,
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleFileChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        form.append(key, formData[key]);
      }
    });

    fetch("http://localhost:8000/submit-application", {
      method: "POST",
      body: form,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit application");
        }
        return response.json();
      })
      .then(() => {
        alert("Your application has been successfully submitted!");
        navigate("/success"); // Redirect to the success page
      })
      .catch((error) => console.error("Error:", error));
  };

  const scrollContainerRef = React.useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleGetStartedClick = () => {
    setIsFormVisible(true);
  };

  return (
    <section className="application-process">
      {!isFormVisible ? (
        <div className="get-started-container">
          <h2 className="get-started-title">Get Started with Your Application</h2>
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="application-form">
          <h2 className="application-title">Study in USA: Application Process 2025</h2>
          <div className="scroll-arrow left" onClick={scrollLeft}>
            &#8592;
          </div>
          <div className="application-scroll-container" ref={scrollContainerRef}>
            {steps.map((step) => (
              <div key={step.step} className="application-card">
                <div className="step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <input
                  type={step.type}
                  accept="application/pdf,image/*"
                  onChange={(e) => handleFileChange(e, step.fieldName)}
                  required
                />
              </div>
            ))}
          </div>
          <div className="scroll-arrow right" onClick={scrollRight}>
            &#8594;
          </div>
          <div className="hero-button-container">
            <button type="submit" className="hero-button">
              Submit Application
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

export default ApplicationProcess;
