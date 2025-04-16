import React from 'react';
import './style.css';
import { ButtonPrimary } from '../../buttons/ButtonPrimary/ButtonPrimary';
import worldMap from '../../images/globalNetworkMap.png';

const Education = () => {
  return (
    <main className="education-page">
      <section className="education-section">
        <h1>Unlock Crypto’s Potential for Your Business</h1>
        <div className="education-content">
          <div className="education-block">
            <h2>Growing Adoption</h2>
            <p>
              Bitcoin’s 350M+ global users represent a massive, marketable opportunity. Our Lightning node on Bitcoinize connects you—
              BTCPay Server generates a QR code, customers scan or tap, and payments settle instantly off-chain or in minutes on-chain,
              delivering speed and convenience with effortless online store integration.
            </p>
          </div>

          <img src={worldMap} alt="World Map" className="map-image" />

          <div className="education-block">
            <h2>Real Benefits</h2>
            <p>
              Lightning cuts fees by 80%, offering low costs that boost your bottom line, while BTCPay Server ensures security by sending
              funds directly to your wallet. Bitcoinize makes it convenient—accept payments via QR or tap, integrating effortlessly with your
              online store to reach customers worldwide.
            </p>
          </div>
        </div>

        <div className="see-map-button">
          <ButtonPrimary 
            text="See the Map"
            onClick={() => document.getElementById('btc-map-section').scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </section>

      {/* BTC Map Section */}
      <section id="btc-map-section" className="btc-map-section">
        <h2>Join a Global Crypto Network</h2>
        <div className="btc-map-container">
          <iframe
            title="BTC Map"
            src="https://btcmap.org/map"
            width="100%"
            height="450"
            style={{ 
              border: 'none', 
              borderRadius: '12px', 
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'block'
            }}
            allowFullScreen
            loading="lazy"
          ></iframe>
          <p className="btc-map-caption">Explore Bitcoin-friendly merchants live on the BTC Map.</p>
          <p className="btc-map-powered">
            Powered by <a href="https://btcmap.org" target="_blank" rel="noopener noreferrer">BTCMap.org</a>
          </p>
        </div>

        <div className="btc-map-description">
          <p>
            Hundreds of merchants worldwide accept Bitcoin, and our Lightning node on Bitcoinize links you with speed and low fees.
          </p>
          <p>
            BTCPay Server powers invoicing—accept payments via QR or tap, integrating effortlessly with your online store for a marketable
            advantage. Stablecoins will soon broaden this network even further.
          </p>
        </div>
      </section>

    </main>
  );
};

export default Education;
