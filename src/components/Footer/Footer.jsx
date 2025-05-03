import React from "react";
import "./style.css";
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import milliBTCLogoBlack from "../../images/mlliBTCLogoBlack.png";
import lightningBolt from "@iconify/icons-mdi/flash";

const legalLinks = [
  { label: 'Terms of Use', path: '/termsOfUse' },
  { label: 'Privacy Policy', path: '/privacyPolicy' },
  { label: 'Copyright', path: '/copyright' },
];

export const Footer = ({ className }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-overlay" />
      <div className="footer-inner" />
      <div className="footer-content">
        <img src={milliBTCLogoBlack} alt="MilliBTC Logo" className="footer-logo" />
        <Icon icon={lightningBolt} className="bolt-icon-footer" />
        <p className="footer-text">
          © 2025 MilliBTC &nbsp;|&nbsp; <a href="mailto:info@millibtc.solutions">info@millibtc.solutions</a>
        </p>
      </div>

      <span className="footer-links">
          {legalLinks.map(({ label, path }) => (
            <Link key={label} to={path}>{label}</Link>
          ))}
      </span>
    </footer>
  );
};
