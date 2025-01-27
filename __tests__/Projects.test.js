// __tests__/Projects.test.js
import { render, screen } from '@testing-library/react';
import Projects from '../components/Projects';

test('renders Projects section with correct content', () => {
  render(<Projects />);
  
  // Check if the section title is rendered correctly
  const titleElement = screen.getByText(/Features/i);
  expect(titleElement).toBeInTheDocument();
  
  // Check if the project titles are rendered
  const project1Title = screen.getByText(/Smart Task Reminders/i);
  const project2Title = screen.getByText(/Collaborative Task Sharing/i);
  const project3Title = screen.getByText(/Progress Analytics/i);
  
  expect(project1Title).toBeInTheDocument();
  expect(project2Title).toBeInTheDocument();
  expect(project3Title).toBeInTheDocument();
  
  // Check if the project descriptions are rendered
  const project1Desc = screen.getByText(/et intelligent reminders based on task priority and deadlines/i);
  const project2Desc = screen.getByText(/Share tasks and to-do lists with friends, family, or colleagues/i);
  const project3Desc = screen.getByText(/Track your productivity with built-in analytics that visualize your task completion trends over time/i);
  
  expect(project1Desc).toBeInTheDocument();
  expect(project2Desc).toBeInTheDocument();
  expect(project3Desc).toBeInTheDocument();
  
  // Check if the "Learn More" links are rendered
  const learnMoreLinks = screen.getAllByText(/Learn More/i);
  expect(learnMoreLinks.length).toBe(3);  // Assuming there are three projects
});
