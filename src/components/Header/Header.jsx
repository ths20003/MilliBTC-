

import React from "react";
import "./style.css";

export const Header = ({ className, overlapGroupClassName }) => {
  return (
    <div className={`header ${className}`}>
      <div className={`overlap-group-2 ${overlapGroupClassName}`}>
        <div className="div-2">
          <div className="menu">
            <div className="text-wrapper-4">Home</div>

            <div className="frame">
              <div className="text-wrapper-5">About Us</div>

              <img
                className="img"
                alt="Icon line"
                src="https://c.animaapp.com/z70d6PNe/img/icon---24-24---line---arrow---arrow-down-2-8.svg"
              />
            </div>

            <div className="frame">
              <div className="text-wrapper-4">Services</div>

              <img
                className="img"
                alt="Icon line"
                src="https://c.animaapp.com/z70d6PNe/img/icon---24-24---line---arrow---arrow-down-2-9.svg"
              />
            </div>

            <div className="frame">
              <div className="text-wrapper-4">Resources</div>

              <img
                className="img"
                alt="Icon line"
                src="https://c.animaapp.com/z70d6PNe/img/icon---24-24---line---arrow---arrow-down-2-10.svg"
              />
            </div>

            <div className="frame">
              <div className="text-wrapper-4">Pricing</div>

              <img
                className="img"
                alt="Icon line"
                src="https://c.animaapp.com/z70d6PNe/img/icon---24-24---line---arrow---arrow-down-2-11.svg"
              />
            </div>

            <div className="text-wrapper-4">Contact Us</div>
          </div>

          <div className="div-wrapper">
            <div className="text-wrapper-6">Join Us</div>
          </div>

          <img
            className="icon-frame"
            alt="Icon frame"
            src="https://c.animaapp.com/z70d6PNe/img/icon-frame-2.svg"
          />
        </div>

        <img
          className="thumbnail-millibtc"
          alt="Thumbnail millibtc"
          src="https://c.animaapp.com/z70d6PNe/img/thumbnail-millibtc-logo-white--transparent--3-1@2x.png"
        />
      </div>
    </div>
  );
};
