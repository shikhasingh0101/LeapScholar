import React, { useState } from "react";
import './UserForm.css';
import { Link } from "react-router-dom";

const countriesList = [
  { name: "Canada", flag: "🇨🇦" },
  { name: "UK", flag: "🇬🇧" },
  { name: "USA", flag: "🇺🇸" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Other", flag: "❓" },
];

const intakesList = [
  { label: "Feb 2025", recommended: true },
  { label: "July 2025", recommended: false },
  { label: "Sep 2025", recommended: false },
  { label: "Feb 2026", recommended: false },
];

const educationLevels = [
  "10th Standard",
  "12th Standard",
  "Bachelor's Degree",
  "Master's Degree",
  "MBBS / MD",
];

const programsList = [
  "PG Diploma",
  "Master's",
  "Bachelor's",
  "MBA",
  "PhD",
  "Not decided",
];

const passportStatuses = ["Yes", "Applied", "No"];

const UserForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    country: "",
    intake: "",
    program: "",
    education: "",
    ieltsStatus: "Not decided",
    universityAdmit: "",
    currentCity: "",
    name: "",
    email: "",
    phone: "",
    percentage: "",
    graduationYear: "",
    passportStatus: "",
  });

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if all the required fields are filled
    if (!formData.name || !formData.email || !formData.phone || !formData.country || !formData.intake || !formData.program || !formData.education) {
      console.error("All fields are required. Please complete the form before submitting.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8000/api/save-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          intake: formData.intake,
          program: formData.program,
          education: formData.education,
          ieltsStatus: formData.ieltsStatus,
          universityAdmit: formData.universityAdmit,
          currentCity: formData.currentCity,
          percentage: formData.percentage,
          graduationYear: formData.graduationYear,
          passportStatus: formData.passportStatus,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Form submitted successfully:", data);
  
        // Optionally clear the form after successful submission
        setFormData({
          country: "",
          intake: "",
          program: "",
          education: "",
          ieltsStatus: "Not decided",
          universityAdmit: "",
          currentCity: "",
          name: "",
          email: "",
          phone: "",
          percentage: "",
          graduationYear: "",
          passportStatus: "",
        });
  
      } else {
        console.error("Error submitting form:", data.error || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  
  

  return (

    <div class="form1-container">
    <div class="form-container">
      {currentStep === 1 && (
        <div class="step step-1">
          <h2>Choose your dream country</h2>
          <div class="countries">
            {countriesList.map((country) => (
              <button
                key={country.name}
                class={`country-card ${
                  formData.country === country.name ? "selected" : ""
                }`}
                onClick={() => handleSelect("country", country.name)}
              >
                <span class="flag">{country.flag}</span>
                <span>{country.name}</span>
              </button>
            ))}
          </div>
          <button
            class="btn"
            onClick={handleNext}
            disabled={!formData.country}
          >
            NEXT →
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <div class="step step-2">
          <h3>What is your preferred intake?</h3>
          <div className="intakes">
            {intakesList.map((intake) => (
              <button
                key={intake.label}
                className={`intake-card ${
                  formData.intake === intake.label ? "selected" : ""
                }`}
                onClick={() => handleSelect("intake", intake.label)}
              >
                {intake.recommended && (
                  <span className="recommended">Recommended</span>
                )}
                <span>{intake.label}</span>
              </button>
            ))}
          </div>
          <button className="btn" onClick={handlePrev}>
            BACK
          </button>
          <button className="btn" onClick={handleNext} disabled={!formData.intake}>
            NEXT →
          </button>
        </div>
      )}

      {currentStep === 3 && (
        <div className="step step-3">
          <h3>What do you wish to pursue?</h3>
          <div className="programs">
            {programsList.map((program) => (
              <button
                key={program}
                className={`program-card ${
                  formData.program === program ? "selected" : ""
                }`}
                onClick={() => handleSelect("program", program)}
              >
                {program}
              </button>
            ))}
          </div>
          <button className="btn" onClick={handlePrev}>
            BACK
          </button>
          <button className="btn" onClick={handleNext} disabled={!formData.program}>
            NEXT →
          </button>
        </div>
      )}

      {currentStep === 4 && (
        <div className="step step-4">
          <h3>What's your highest level of education?</h3>
          <div className="education-levels">
            {educationLevels.map((level) => (
              <button
                key={level}
                className={`education-card ${
                  formData.education === level ? "selected" : ""
                }`}
                onClick={() => handleSelect("education", level)}
              >
                {level}
              </button>
            ))}
          </div>
          <button className="btn" onClick={handlePrev}>
            BACK
          </button>
          <button className="btn" onClick={handleNext} disabled={!formData.education}>
            NEXT →
          </button>
        </div>
      )}

      {currentStep === 5 && (
        <div className="step step-5">
          <h3>IELTS/TOEFL/PTE/Duolingo status</h3>
          <select
            name="ieltsStatus"
            value={formData.ieltsStatus}
            onChange={handleChange}
          >
            <option value="Not decided">Not decided</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <h3>Do you already have a university admit?</h3>
          <div className="university-admit">
            <button
              className={`admit-btn ${
                formData.universityAdmit === "Yes" ? "selected" : ""
              }`}
              onClick={() => handleSelect("universityAdmit", "Yes")}
            >
              Yes
            </button>
            <button
              className={`admit-btn ${
                formData.universityAdmit === "No" ? "selected" : ""
              }`}
              onClick={() => handleSelect("universityAdmit", "No")}
            >
              No
            </button>
          </div>
          <h3>What is your current city?</h3>
          <input
            type="text"
            name="currentCity"
            placeholder="Enter your city"
            value={formData.currentCity}
            onChange={handleChange}
          />
          <button className="btn" onClick={handlePrev}>
            BACK
          </button>
          <button className="btn" onClick={handleNext} disabled={!formData.currentCity}>
            NEXT →
          </button>
        </div>
      )}

      {currentStep === 6 && (
        <div className="step step-6">
          <h3>Just one last step! Provide your details to start your study abroad journey</h3>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.email || ""}
              onChange={handleChange}
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email || ""}
              onChange={handleChange}
            />

            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone || ""}
              onChange={handleChange}
            />

            <label>Expected or Gained Percentage:</label>
            <input
              type="text"
              name="percentage"
              placeholder="Percentage"
              value={formData.percentage}
              onChange={handleChange}
            />

            <label>Year of graduation?</label>
            <input
              type="text"
              name="graduationYear"
              placeholder="Year"
              value={formData.graduationYear}
              onChange={handleChange}
            />

            <h3>Do you have a valid Passport?</h3>
            <div className="passport-status">
              {passportStatuses.map((status) => (
                <button
                  key={status}
                  className={`passport-btn ${
                    formData.passportStatus === status ? "selected" : ""
                  }`}
                  onClick={() => handleSelect("passportStatus", status)}
                >
                  {status}
                </button>
              ))}
            </div>

            <Link to="/dashboard">
            <button type="submit" className="btn">
              Submit
            </button>
          </Link>

          </form>
        </div>
      )}
    </div>
    </div>
  );
};

export default UserForm;
