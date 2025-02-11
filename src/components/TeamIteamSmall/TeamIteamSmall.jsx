/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const TeamIteamSmall = ({
  className,
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <div className={`team-iteam-small ${className}`}>
      <div className="thumbnail" />

      <div className="name-position">
        <div className={`text-wrapper ${divClassName}`}>NIKOLA BOZIC</div>

        <div className={`div ${divClassNameOverride}`}>Founder</div>
      </div>

      <div className="social-media">
        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper-2">linkedin-in</div>
          </div>
        </div>

        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper-3">twitter</div>
          </div>
        </div>

        <div className="group">
          <div className="overlap-group">
            <div className="text-wrapper-3">telegram</div>
          </div>
        </div>

        <div className="overlap-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper-3">github</div>
          </div>
        </div>
      </div>
    </div>
  );
};
