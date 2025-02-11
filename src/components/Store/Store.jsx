import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Store = ({
  vendor,
  className,
  logoClassName,
  logo = "https://c.animaapp.com/z70d6PNe/img/logo-4@2x.png",
  textoClassName,
  googlePlayClassName,
  googlePlay = "https://c.animaapp.com/z70d6PNe/img/google-play-2.svg",
  getItOnClassName,
}) => {
  return (
    <div className={`store ${vendor} ${className}`}>
      <img
        className={`logo ${["amazon-light", "amazon", "google"].includes(vendor) ? logoClassName : undefined}`}
        alt="Logo"
        src={
          vendor === "apple"
            ? "https://c.animaapp.com/z70d6PNe/img/logo-5@2x.png"
            : vendor === "amazon"
              ? "https://c.animaapp.com/z70d6PNe/img/logo-6@2x.png"
              : vendor === "amazon-light"
                ? "https://c.animaapp.com/z70d6PNe/img/logo-7@2x.png"
                : logo
        }
      />

      <div
        className={`texto ${["amazon-light", "amazon", "google"].includes(vendor) ? textoClassName : undefined}`}
      >
        {vendor === "google" && (
          <>
            <img
              className={`google-play ${googlePlayClassName}`}
              alt="Google play"
              src={googlePlay}
            />

            <div className={`get-it-on ${getItOnClassName}`}>GET IT ON</div>
          </>
        )}

        {vendor === "apple" && (
          <>
            <div className="text-wrapper-7">Download on the</div>

            <img
              className="app-store"
              alt="App store"
              src="https://c.animaapp.com/z70d6PNe/img/app-store-2.svg"
            />
          </>
        )}

        {["amazon-light", "amazon"].includes(vendor) && <>Avaiable at</>}
      </div>
    </div>
  );
};

Store.propTypes = {
  vendor: PropTypes.oneOf(["amazon-light", "google", "apple", "amazon"]),
  logo: PropTypes.string,
  googlePlay: PropTypes.string,
};
