// src/components/WhatWeDo/WhatWeDo.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import WhatWeDo from './WhatWeDo';

// Mock images to avoid breaking Jest
jest.mock('../../images/bitcoin-lightning-network-for-payments.jpg', () => 'mock-lightning.jpg');
jest.mock('../../images/coins-safe-shopping.png', () => 'mock-safe-shopping.png');
jest.mock('../../images/globe-Coins1.png', () => 'mock-globe.png');

describe('WhatWeDo section', () => {
  test('renders main title', () => {
    render(<WhatWeDo />);
    expect(screen.getByRole('heading', { name: /why choose millibtc/i })).toBeInTheDocument();
  });

  test('renders all 3 section headings', () => {
    render(<WhatWeDo />);
    expect(screen.getByText(/Lightning Network Node/i)).toBeInTheDocument();
    expect(screen.getByText(/BTCPay Server & Bitcoinize/i)).toBeInTheDocument();
    expect(screen.getByText(/Stablecoin Future/i)).toBeInTheDocument();
  });

  test('renders all 3 images with alt text', () => {
    render(<WhatWeDo />);
    expect(screen.getByAltText(/Lightning Network Node/i)).toBeInTheDocument();
    expect(screen.getByAltText(/BTCPay Server & Bitcoinize/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Stablecoin Future/i)).toBeInTheDocument();
  });
});
