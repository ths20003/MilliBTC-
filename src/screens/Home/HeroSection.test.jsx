
import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import HeroSection from './HeroSection';

// Mock image import
jest.mock('../../images/Bitcoin-lightning-wallet.jpg.webp', () => 'mocked-payment-illustration.jpg');

// Mock ButtonPrimary
jest.mock('../../buttons/ButtonPrimary/ButtonPrimary', () => ({
  ButtonPrimary: ({ text, className }) => <button className={className}>{text}</button>,
}));

const renderWithRouter = () => {
  const routes = [
    {
      path: '*',
      element: <HeroSection />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    future: { v7_startTransition: true }, // ✅ Prevents the warning
  });

  return render(<RouterProvider router={router} />);
};

describe('HeroSection', () => {
  test('renders headline and subheadline', () => {
    renderWithRouter();
    expect(
      screen.getByRole('heading', { name: /MilliBTC: Crypto Payments for Merchants/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Lightning-fast, secure payments/i)
    ).toBeInTheDocument();
  });

  test('renders call-to-action button', () => {
    renderWithRouter();
    const button = screen.getByRole('button', { name: /get started/i });
    expect(button).toBeInTheDocument();
  });

  test('renders expanded marketing text', () => {
    renderWithRouter();
    expect(
      screen.getByText(/MilliBTC simplifies crypto payments for merchants/i)
    ).toBeInTheDocument();
  });

  test('renders payment illustration image', () => {
    renderWithRouter();
    const image = screen.getByAltText(/POS payment illustration/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'mocked-payment-illustration.jpg');
  });
});
