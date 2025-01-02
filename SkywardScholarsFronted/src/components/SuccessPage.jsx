import React from "react";
import "./SuccessPage.css"; // Optional CSS file for styling

function SuccessPage() {
  return (
    <div className="success-container">
      <h1>Application Submitted!</h1>
      <p>Your application has been successfully submitted.</p>
      <p>We will review your documents and contact you soon.</p>
      <a href="/" className="back-home-button">Go Back to Home</a>
    </div>
  );
}

export default SuccessPage;
