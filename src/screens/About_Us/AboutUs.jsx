import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ButtonSecondary } from "../../components/ButtonSecondary";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Icon2424LineGeneralLightning2Wrapper } from "../../components/Icon2424LineGeneralLightning2Wrapper";
import { IconLine } from "../../components/IconLine";
import { IconLineWrapper } from "../../components/IconeLineWrapper";
import { TeamIteamSmall } from "../../components/TeamIteamSmall";
import { Icon2424LineArrowArrowRight12 } from "../../icons/Icon2424LineArrowArrowRight12";
import "./style.css";

export const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="div-4">
        <img
          className="CTA"
          alt="Cta"
          src="https://c.animaapp.com/z70d6PNe/img/cta.png"
        />

        <div className="our-partners">
          <div className="group-4">
            <div className="our-partners-2">OUR PARTNERS</div>

            <p className="p">
              Manage of your crypto, NFTs, and more by stay in complete control,
              privately and securely on your own device.
            </p>
          </div>

          <div className="frame-4">
            <div className="unsplash-wrapper">
              <div className="unsplash" />
            </div>

            <div className="frame-5">
              <div className="text-wrapper-16">Cereal Club</div>

              <div className="text-wrapper-17">Art and Media</div>
            </div>
          </div>

          <div className="group-5">
            <div className="overlap-3">
              <div className="group-6">
                <div className="overlap-group-4">
                  <div className="rectangle" />

                  <div className="rectangle-2" />

                  <div className="rectangle-3" />
                </div>
              </div>

              <img
                className="group-7"
                alt="Group"
                src="https://c.animaapp.com/z70d6PNe/img/group-66.png"
              />
            </div>
          </div>
        </div>

        <div className="meet-the-team">
          <div className="heading">
            <div className="meet-the-team-2">MEET THE TEAM</div>

            <p className="text-wrapper-18">
              Crypteck BIT in itself is a part of a wider, interconnected
              ecosystem aiming to deliver the best possible experience for
              everyone
            </p>
          </div>

          <div className="group-8">
            <TeamIteamSmall
              className="team-iteam-small-instance"
              divClassName="team-iteam-small-2"
              divClassNameOverride="team-iteam-small-3"
            />
            <div className="team-iteam-small-4">
              <div className="hover-overlay-wrapper">
                <div className="hover-overlay" />
              </div>

              <div className="name-position-2">
                <div className="NIKOLA-BOZIC">SELENA JOYE</div>

                <div className="founder">Web Developer</div>
              </div>

              <div className="social-media-3">
                <div className="group-9">
                  <div className="overlap-group-5">
                    <div className="text-wrapper-19">linkedin-in</div>
                  </div>
                </div>

                <div className="group-9">
                  <div className="overlap-4">
                    <div className="text-wrapper-20">twitter</div>
                  </div>
                </div>

                <div className="group-9">
                  <div className="overlap-4">
                    <div className="text-wrapper-20">telegram</div>
                  </div>
                </div>

                <div className="group-10">
                  <div className="overlap-4">
                    <div className="text-wrapper-20">github</div>
                  </div>
                </div>
              </div>
            </div>

            <TeamIteamSmall
              className="team-iteam-small-5"
              divClassName="team-iteam-small-2"
              divClassNameOverride="team-iteam-small-3"
            />
            <TeamIteamSmall
              className="team-iteam-small-6"
              divClassName="team-iteam-small-2"
              divClassNameOverride="team-iteam-small-3"
            />
          </div>
        </div>

        <div className="CTA-2">
          <div className="overlap-5">
            <div className="rectangle-wrapper">
              <img
                className="rectangle-4"
                alt="Rectangle"
                src="https://c.animaapp.com/z70d6PNe/img/rectangle-4881.png"
              />
            </div>

            <div className="get-started-for-free">GET STARTED FOR FREE</div>

            <p className="text-wrapper-21">
              Crypteck combines the best of Ethereum and sovereign blockchains
              into a full-fledged multi-chain system.
            </p>

            <ButtonSecondary
              className="button-secondary-instance"
              divClassName="design-component-instance-node-2"
              text="Learn more"
            />
            <ButtonSecondary
              className="button-secondary-2"
              divClassName="button-secondary-3"
              text="Get started"
            />
          </div>
        </div>

        <div className="our-mission">
          <div className="group-11">
            <div className="our-concept-mission">OUR CONCEPT &amp; MISSION</div>

            <p className="text-wrapper-22">
              Our mission is to empower businesses with secure, adaptable
              Bitcoin payment solutions, aiming to become a leader in
              cryptocurrency payments and make Bitcoin accessible and valuable
              for companies of any size.
            </p>
          </div>

          <div className="our-mission-2">OUR MISSION</div>

          <div className="overlap-6">
            <p className="element">
              <span className="span">1500</span>

              <span className="text-wrapper-23">+</span>
            </p>

            <p className="element-2">
              <span className="span">50</span>

              <span className="text-wrapper-23">+</span>
            </p>

            <div className="frame-6">
              <div className="text-wrapper-24">Nodes</div>

              <div className="group-12">
                <div className="overlap-group-6">
                  <div className="ellipse" />

                  <Icon2424LineArrowArrowRight12 className="icon-line-arrow" />
                </div>
              </div>
            </div>

            <div className="frame-7">
              <div className="text-wrapper-25">Business enrollments</div>

              <div className="group-12">
                <div className="overlap-group-6">
                  <div className="ellipse" />

                  <Icon2424LineArrowArrowRight12 className="icon-line-arrow" />
                </div>
              </div>
            </div>

            <div className="dividers">
              <div className="rectangle-5" />

              <div className="rectangle-6" />

              <div className="rectangle-7" />
            </div>
          </div>

          <p className="text-wrapper-26">
            To empower businesses by providing secure, efficient, and
            customizable Bitcoin payment solutions through BTCPay Server.
          </p>

          <p className="text-wrapper-27">
            To become a leader in the cryptocurrency payment industry by making
            Bitcoin accessible and beneficial for businesses of all sizes.
          </p>

          <div className="flexcontainer">
            <p className="span-wrapper">
              <span className="text-wrapper-28">
                Innovation <br />
              </span>
            </p>

            <p className="span-wrapper">
              <span className="text-wrapper-28">
                Security
                <br />
              </span>
            </p>

            <p className="span-wrapper">
              <span className="text-wrapper-28">
                Customer-Centricity
                <br />
              </span>
            </p>

            <p className="span-wrapper">
              <span className="text-wrapper-28">Integrity</span>
            </p>
          </div>

          <div className="our-mission-3">OUR MISSION</div>

          <div className="our-vision">OUR VISION</div>

          <div className="core-value">CORE VALUE</div>

          <div className="group-wrapper">
            <div className="group-13">
              <div className="overlap-7">
                <div className="ellipse-2" />

                <div className="ellipse-3" />

                <div className="text-wrapper-29">play</div>
              </div>
            </div>
          </div>
        </div>

        <div className="overlap-8">
          <div className="hero-imgs">
            <div className="overlap-9">
              <div className="who-are-we">WHO ARE WE?</div>

              <p className="millibtc-empowers">
                MilliBTC empowers businesses to adopt Bitcoin with secure,
                self-hosted solutions for full control over their transactions.
              </p>

              <ButtonPrimary
                className="button-primary-instance"
                divClassName="design-component-instance-node-2"
                text="Get Started"
              />
              <div className="imgs">
                <div className="overlap-10">
                  <div className="overlap-group-7">
                    <img
                      className="rectangle-8"
                      alt="Rectangle"
                      src="https://c.animaapp.com/z70d6PNe/img/rectangle-5005.png"
                    />

                    <div className="group-14">
                      <img
                        className="vector"
                        alt="Vector"
                        src="https://c.animaapp.com/z70d6PNe/img/vector-153.svg"
                      />

                      <div className="group-15">
                        <div className="ellipse-4" />

                        <IconLine />
                      </div>
                    </div>

                    <div className="group-16">
                      <div className="group-17">
                        <div className="ellipse-4" />

                        <IconLineWrapper />
                      </div>

                      <img
                        className="vector-2"
                        alt="Vector"
                        src="https://c.animaapp.com/z70d6PNe/img/vector-154.svg"
                      />
                    </div>
                  </div>

                  <div className="group-18">
                    <img
                      className="vector-3"
                      alt="Vector"
                      src="https://c.animaapp.com/z70d6PNe/img/vector-152.svg"
                    />

                    <div className="group-19">
                      <div className="ellipse-4" />

                      <Icon2424LineGeneralLightning2Wrapper />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Header
            className="header-instance"
            overlapGroupClassName="header-2"
          />
          <div className="annoucement-bar" />
        </div>

        <Footer className="footer-instance" overlapClassName="footer-2" />
      </div>
    </div>
  );
};
