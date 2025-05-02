import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { TermsOfUse } from "./components/PrivacyPolicies/TermOfUse/TermOfUse";
import { PrivacyPolicy } from "./components/PrivacyPolicies/PrivacyPolicy";
import { Copyright } from "./components/PrivacyPolicies/Copyright";
import "./App.css";
import { Home } from "./screens/Home/Home";
import { Education } from './screens/Education';
import { Team } from "./screens/Team";

function App() {
  return (
    <Router>
      <div className="app">
        <Header /> {/* Navbar with links */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/team" element={<Team />} />
            <Route path="/termsOfUse" element={<TermsOfUse />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/copyright" element={<Copyright />} />
          </Routes>
        </div>
        <Footer /> {/* Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
