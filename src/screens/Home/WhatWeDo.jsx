import React from "react";
import LightningNetworkNode from "../../images/bitcoin-lightning-network-for-payments.jpg";
import CoinsSafeShopping from "../../images/coins-safe-shopping.png";
import CoinsGlobe from "../../images/globe-Coins1.png";
import "./style.css";

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <h2 className="what-we-do-title">Why Choose MilliBTC?</h2>
      <div className="what-we-do-columns">
        {/* Column 1: Lightning Network Node */}
        <div className="what-we-do-column">
          <img
            src={LightningNetworkNode}
            alt="Lightning Network Node"
            className="what-we-do-icon"
          />
          <h3>Lightning Network Node</h3>
          <p>
            Our Lightning node on Bitcoinize ensures speed with instant payments. BTCPay Server creates Lightning invoices—customers scan a QR code or tap a card, and funds settle securely in seconds, integrating effortlessly with your online store or in-store setup, with low fees that maximize your profits.
          </p>
        </div>

        {/* Column 2: BTCPay Server & Bitcoinize */}
        <div className="what-we-do-column">
          <img
            src={CoinsSafeShopping}
            alt="BTCPay Server & Bitcoinize"
            className="what-we-do-icon"
          />
          <h3>BTCPay Server &amp; Bitcoinize</h3>
          <p>
            BTCPay Server sends Bitcoin payments straight to your wallet for unmatched security, no middlemen. Bitcoinize POS adds convenience—generate a QR code, accept payments in minutes on-chain or instantly off-chain, all integrating effortlessly with your online store to market your business.
          </p>
        </div>

        {/* Column 3: Stablecoin Future */}
        <div className="what-we-do-column">
          <img
            src={CoinsGlobe}
            alt="Stablecoin Future"
            className="what-we-do-icon"
          />
          <h3>Stablecoin Future</h3>
          <p>
            Stablecoins on Lightning will enhance marketability with stable-value payments. Invoice via BTCPay Server’s QR or tap system, enjoy low fees, and reach global customers—your business, elevated with seamless online integration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
