 import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders app header correctly', () => {
  render(<App />);
  const headerTitle = screen.getByText(/Creative Agency Portfolio/i);
  expect(headerTitle).toBeInTheDocument();
});

test('allows users to add a project', () => {
  render(<App />);
  
  const nameInput = screen.getByPlaceholderText(/Project Name \*/i);
  const aboutInput = screen.getByPlaceholderText(/About \/ Description \*/i);
  const submitButton = screen.getByRole('button', { name: /Add Project/i });

  fireEvent.change(nameInput, { target: { value: 'Test Portfolio App' } });
  fireEvent.change(aboutInput, { target: { value: 'A test project description' } });
  fireEvent.click(submitButton);

  expect(screen.getByText('Test Portfolio App')).toBeInTheDocument();
});

test('filters project list based on search term', () => {
  render(<App />);
  
  const searchInput = screen.getByPlaceholderText(/Search projects by title/i);
  fireEvent.change(searchInput, { target: { value: 'Branding' } });

  expect(screen.getByText(/Branding Campaign/i)).toBeInTheDocument();
  expect(screen.queryByText(/E-Commerce Mobile App/i)).not.toBeInTheDocument();
});