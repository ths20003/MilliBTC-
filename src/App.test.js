import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock route components
jest.mock('./screens/Home/Home', () => ({
  Home: () => <div>Home Screen</div>,
}));
jest.mock('./screens/Education', () => ({
  Education: () => <div>Education Screen</div>,
}));
jest.mock('./screens/Team', () => ({
  Team: () => <div>Team Screen</div>,
}));

// Mock layout components
jest.mock('./components/Header/Header', () => ({
  Header: () => <div>Header</div>,
}));
jest.mock('./components/Footer/Footer', () => ({
  Footer: () => <div>Footer</div>,
}));

// 🔧 Utility to mock location
const mockLocation = (path) => {
  window.history.pushState({}, 'Test Page', path);
};

describe('App Component', () => {
  test('renders Header and Footer', () => {
    mockLocation('/');
    render(<App />);
    expect(screen.getByText(/Header/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer/i)).toBeInTheDocument();
  });

  test('renders Home by default', () => {
    mockLocation('/');
    render(<App />);
    expect(screen.getByText(/Home Screen/i)).toBeInTheDocument();
  });

  test('renders Education on /education', () => {
    mockLocation('/education');
    render(<App />);
    expect(screen.getByText(/Education Screen/i)).toBeInTheDocument();
  });

  test('renders Team on /team', () => {
    mockLocation('/team');
    render(<App />);
    expect(screen.getByText(/Team Screen/i)).toBeInTheDocument();
  });
});
