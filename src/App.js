import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutUs } from "./screens/About_Us";
import Services from "./screens/Services/Services";
import ContactUs from "./screens/Contact_Us/ContactUs";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header /> {/* Navbar with links */}
        <div className="content">
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer /> {/* Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
