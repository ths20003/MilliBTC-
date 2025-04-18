import React from "react";
import { Link } from "react-router-dom";
import { fonts } from "../../common/fonts";
import { ButtonPrimary } from "../../buttons/ButtonPrimary/ButtonPrimary";
import PaymentIllustration from "../../images/Bitcoin-lightning-wallet.jpg.webp";
import "./style.css";

const HeroSection = () => {
  return (
    <section className="hero-section"
      style={{ fontFamily: fonts.base }}
    >
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-headline">
            MilliBTC: Crypto Payments for Merchants
          </h1>
          <p className="hero-subheadline">
            Lightning-fast, secure payments with unbeatable fees—join the future now.
          </p>
          <Link to="/team#contact-us" className="no-decoration">
            <ButtonPrimary text="Get Started" className="hero-button" />
          </Link>
          <p className="hero-expanded-text">
            MilliBTC simplifies crypto payments for merchants with our Lightning Network node running on Bitcoinize, 
            delivering instant Bitcoin transactions. Using BTCPay Server, we enable effortless invoicing—create a QR code or tap a crypto card, 
            and payments arrive in seconds, integrating effortlessly with your online store or in-store setup. Proven with Bitcoinize POS, 
            our system attracts crypto-savvy customers globally, 
            boosting your marketability. Stablecoins on Lightning will soon expand this edge even further.
          </p>
        </div>
        <div className="hero-image">
          <img
            src={PaymentIllustration}
            alt="POS payment illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
