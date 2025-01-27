// __tests__/AboutMe.test.js
import { render, screen } from '@testing-library/react';
import AboutMe from '../components/AboutMe';

test('renders AboutMe section with correct content', () => {
  render(<AboutMe />);
  
  
  const titleElement = screen.getByText(/About Us/i);
  expect(titleElement).toBeInTheDocument();
 
  const descriptionElement = screen.getByText(/My Planner, is a sleek and user-friendly task management app/i);
  expect(descriptionElement).toBeInTheDocument();
});
