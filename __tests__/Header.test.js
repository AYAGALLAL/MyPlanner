// __tests__/Header.test.js
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders Header with correct navigation links', () => {
  render(<Header />);
  
  // Check if the header contains the correct text
  const headingElement = screen.getByText(/My Planner/i);
  expect(headingElement).toBeInTheDocument();
  
  // Check if the navigation links exist
  const aboutLink = screen.getByText(/About/i);
  const featuresLink = screen.getByText(/Features/i);
  const contactLink = screen.getByText(/Contact/i);
  
  expect(aboutLink).toBeInTheDocument();
  expect(featuresLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  
  // Check if links have correct href attributes
  expect(aboutLink).toHaveAttribute('href', '#about');
  expect(featuresLink).toHaveAttribute('href', '#projects');
  expect(contactLink).toHaveAttribute('href', '#contact');
});
