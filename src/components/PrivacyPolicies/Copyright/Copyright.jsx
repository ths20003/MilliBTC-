import React from 'react';
import '../../../common/documentPages.css';

export const Copyright = () => (
  <div className="document-page">
    <h1>Copyright Notice for MilliBTC</h1>
    <p><strong>© 2025 MilliBTC. All Rights Reserved.</strong></p>

    <p>
      All content, materials, documentation, and resources provided by MilliBTC, including but not limited to text,
      graphics, logos, software, guides, and website design (collectively, the "Content"), are the intellectual property
      of MilliBTC or its licensors and are protected by copyright, trademark, and other intellectual property laws.
    </p>

    <h2>Permitted Use</h2>
    <ul>
      <li>
        Clients may use provided Content solely for the purpose of setting up, configuring, and managing their
        BTCPayServer instance, as part of our consulting Services.
      </li>
      <li>
        Content may not be reproduced, distributed, modified, or used for any other purpose without prior written
        permission from MilliBTC.
      </li>
    </ul>

    <h2>Restrictions</h2>
    <p>You may not:</p>
    <ul>
      <li>Copy, distribute, or create derivative works from our Content without authorization.</li>
      <li>Use our Content for commercial purposes outside the scope of our Services.</li>
      <li>Remove or alter any copyright, trademark, or proprietary notices from our Content.</li>
    </ul>

    <h2>Trademarks</h2>
    <p>
      "MilliBTC" and associated logos are trademarks of MilliBTC. Unauthorized use of our trademarks is prohibited.
    </p>

    <h2>Third-Party Content</h2>
    <p>
      Certain Content may be licensed from third parties (e.g., BTCPayServer open-source materials). Such Content is
      subject to the respective third-party licenses (e.g., MIT License for BTCPayServer).
    </p>

    <h2>Reporting Infringement</h2>
    <p>
      If you believe your copyright has been infringed by our Content, please contact us at
      <a href="mailto:info@millibtc.solutions" className="doc-link"> info@millibtc.solutions</a> with a detailed
      description of the alleged infringement.
    </p>

    <h2>Contact Us</h2>
    <p>
      For permission requests or questions about our Content, please contact:<br />
      <strong>Email:</strong>{' '}
      <a href="mailto:info@millibtc.solutions" className="doc-link">info@millibtc.solutions</a>
    </p>
  </div>
);
