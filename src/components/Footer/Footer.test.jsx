
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

// Mock image import
jest.mock('../../images/mlliBTCLogoBlack.png', () => 'mocked-logo.png');

// Mock icon component
jest.mock('@iconify/react', () => ({
  Icon: (props) => <div data-testid="mock-icon" {...props} />,
}));

describe('Footer', () => {
  test('renders the footer logo', () => {
    render(<Footer />);
    const logo = screen.getByAltText(/MilliBTC Logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'mocked-logo.png');
  });

  test('renders the lightning bolt icon', () => {
    render(<Footer />);
    const icon = screen.getByTestId('mock-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('bolt-icon-footer');
  });

  test('renders the email link', () => {
    render(<Footer />);
    const emailLink = screen.getByRole('link', { name: /hello@millibtc.com/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@millibtc.com');
  });
});
