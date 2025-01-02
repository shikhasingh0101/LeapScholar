import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Footer from "./pages/Footer.jsx";
import CounsellorSection from "./pages/counsellors.jsx";
import Events from "./components/Events.jsx";
import Faq from "./pages/FAQS.jsx";
import UsaPage from "./components/UsaPage.jsx";
import UKPage from "./components/UKPage.jsx";
import CanadaPage from "./components/CanadaPage.jsx";
import AustraliaPage from "./components/AustraliaPage.jsx";
import Header from "./pages/Header.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Profile from "./pages/Profile.jsx";
import HomePage from "./components/HomePage.jsx";
import UniversityDetail from "./components/UniversityDetail.jsx";
import UnivercityPage from "./components/UnivercityPage.jsx";
import ApplicationProcess from "./components/ApplicationProcess.jsx";
import SuccessPage from "./components/SuccessPage.jsx";
import CourseList from "./components/CourseList.jsx";
import BookingDetails from "./components/BookingDetails.jsx";
import ModuleDetails from "./components/ModuleDetails.jsx";
import PracticeTest from "./components/PracticeTest.jsx";
import ExamOverview from "./components/ExamOverview.jsx";
import Articles from "./components/Articles.jsx";
import IrelandPage from "./components/IrelandPage.jsx";
import GermanyPage from "./components/GermanyPage.jsx";
import About from "./pages/About.jsx";
import OurCounsellors from "./components/OurCounsellors.jsx";
import TalkToCounselor from "./components/TalkToCounselor.jsx";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); 
    toast.success("Login successful!"); 
  };

  const handleLogout = () => {
    setUser(null); 
    localStorage.removeItem("user");
    toast.info("Logged out successfully!");
  };

  useEffect(() => {
    const requestNotificationPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          console.log("Notification permission granted.");
        } else {
          console.log("Notification permission denied.");
        }
      } catch (error) {
        console.error("Error requesting notification permission", error);
      }
    };
    requestNotificationPermission();
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Header user={user} logout={handleLogout} />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn handleLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/events" element={<Events />} />
          <Route path="/counsellors" element={<CounsellorSection />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/usa" element={<UsaPage />} />
          <Route path="/uk" element={<UKPage />} />
          <Route path="/canada" element={<CanadaPage />} />
          <Route path="/australia" element={<AustraliaPage />} />
          <Route path="/ireland" element={<IrelandPage />} />
          <Route path="/germany" element={<GermanyPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/univercitypage" element={<UnivercityPage />} />
          <Route path="/applicationprocess" element={<ApplicationProcess />} />
          <Route path="/university/:id" element={<UniversityDetail />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/booking" element={<BookingDetails />} />
          <Route path="/modules" element={<ModuleDetails />} />
          <Route path="/practice" element={<PracticeTest />} />
          <Route path="/exam-overview" element={<ExamOverview />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/courseList" element={<CourseList />} />
          <Route path="/ourcounsellors" element={<OurCounsellors />}/>
          <Route path="talktocounsellors" element={<TalkToCounselor />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;
