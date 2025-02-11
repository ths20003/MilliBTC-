import React from "react";
import { Store } from "../Store";
import "./style.css";

export const Footer = ({ className, overlapClassName }) => {
  return (
    <div className={`footer ${className}`}>
      <div className={`overlap ${overlapClassName}`}>
        <div className="div-3">
          <div className="footer-bottom">
            <p className="copyright">
              Copyright © 2024 MilliBTC. All Rights Reserved.
            </p>

            <div className="social-media-2">
              <div className="text-wrapper-8">telegram</div>

              <div className="text-wrapper-9">twitter</div>

              <div className="text-wrapper-9">facebook</div>

              <div className="text-wrapper-9">youtube</div>

              <div className="text-wrapper-9">discord</div>
            </div>
          </div>

          <div className="col">
            <div className="text-wrapper-10">RESOURCES</div>

            <div className="frame-2">
              <div className="text-wrapper-11">GitHub</div>

              <div className="text-wrapper-12">Roadmap</div>

              <div className="text-wrapper-12">Documentation</div>
            </div>
          </div>

          <div className="col-2">
            <div className="text-wrapper-10">COMMUNITY</div>

            <div className="frame-2">
              <div className="text-wrapper-11">Roles</div>

              <div className="text-wrapper-12">Ecosystem</div>

              <div className="text-wrapper-12">Blogs</div>

              <div className="text-wrapper-12">FAQs</div>
            </div>
          </div>

          <div className="col-3">
            <div className="group-2">
              <Store
                className="store-instance"
                getItOnClassName="store-4"
                googlePlay="https://c.animaapp.com/z70d6PNe/img/google-play-3.svg"
                googlePlayClassName="store-3"
                logo="https://c.animaapp.com/z70d6PNe/img/logo-8@2x.png"
                logoClassName="design-component-instance-node"
                textoClassName="store-2"
                vendor="google"
              />
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <img
                    className="logo-2"
                    alt="Logo"
                    src="https://c.animaapp.com/z70d6PNe/img/logo-9@2x.png"
                  />

                  <div className="text">
                    <div className="text-wrapper-13">Download on the</div>

                    <img
                      className="app-store-2"
                      alt="App store"
                      src="https://c.animaapp.com/z70d6PNe/img/app-store-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="we-re-headquartered">
              We&#39;re headquartered in New York with offices in New York and
              Connecticut
            </p>
          </div>

          <div className="col-4">
            <div className="overlap-2">
              <div className="group-3">
                <div className="text-wrapper-10">COMPANY</div>

                <div className="frame-2">
                  <div className="text-wrapper-14">About us</div>

                  <div className="text-wrapper-12">Careers</div>

                  <div className="text-wrapper-12">Teams</div>

                  <div className="text-wrapper-12">Features</div>
                </div>
              </div>

              <div className="frame-3">
                <div className="text-wrapper-15">We’re hiring</div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="thumbnail-millibtc-2"
          alt="Thumbnail millibtc"
          src="https://c.animaapp.com/z70d6PNe/img/thumbnail-millibtc-logo-white--transparent--3-1@2x.png"
        />
      </div>
    </div>
  );
};
