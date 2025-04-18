import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from './Education';

// Mock image and button component
jest.mock('../../images/GlobalNetwork.png', () => 'mocked-map.png');
jest.mock('../../buttons/ButtonPrimary/ButtonPrimary', () => ({
  ButtonPrimary: ({ text, onClick }) => (
    <button onClick={onClick}>{text}</button>
  ),
}));

describe('Education Screen', () => {
  test('renders main heading', () => {
    render(<Education />);
    const heading = screen.getByRole('heading', { name: /unlock crypto’s potential/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders both education blocks', () => {
    render(<Education />);
    expect(screen.getByText(/growing adoption/i)).toBeInTheDocument();
    expect(screen.getByText(/real benefits/i)).toBeInTheDocument();
  });

  test('renders the map image', () => {
    render(<Education />);
    const mapImage = screen.getByAltText(/world map/i);
    expect(mapImage).toBeInTheDocument();
    expect(mapImage).toHaveAttribute('src', 'mocked-map.png');
  });

  test('renders the "See the Map" button', () => {
    render(<Education />);
    const button = screen.getByRole('button', { name: /see the map/i });
    expect(button).toBeInTheDocument();
  });

  test('renders the BTC Map iframe and captions', () => {
    render(<Education />);
    const iframe = screen.getByTitle(/btc map/i);
    expect(iframe).toBeInTheDocument();

    const caption = screen.getByText(/explore bitcoin-friendly merchants/i);
    const link = screen.getByRole('link', { name: /btcmap.org/i });
    expect(caption).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://btcmap.org');
  });
});
