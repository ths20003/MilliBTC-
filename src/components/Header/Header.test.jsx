import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

// Mock logo image
jest.mock('../../images/mlliBTCLogoBlack.png', () => 'mocked-logo.png');

// Mock icon
jest.mock('@iconify/react', () => ({
  Icon: (props) => <div data-testid="mock-icon" {...props} />,
}));

// Mock menuItems
jest.mock('./menuData', () => ({
  menuItems: [
    { label: 'Home', path: '/' },
    { label: 'Education', path: '/education' },
  ],
}));

// Mock MenuItem component
jest.mock('./MenuItem', () => (props) => (
  <div data-testid="mock-menu-item">{props.label}</div>
));

describe('Header', () => {
  test('renders the logo image', () => {
    render(<Header />);
    const logo = screen.getByAltText(/MilliBTC Logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'mocked-logo.png');
  });

  test('renders the lightning bolt icon', () => {
    render(<Header />);
    const icon = screen.getByTestId('mock-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('bolt-icon');
  });

  test('renders all menu items', () => {
    render(<Header />);
    const menuItems = screen.getAllByTestId('mock-menu-item');
    expect(menuItems.length).toBe(2); // Based on mocked menuItems
    expect(menuItems[0]).toHaveTextContent('Home');
    expect(menuItems[1]).toHaveTextContent('Education');
  });
});
