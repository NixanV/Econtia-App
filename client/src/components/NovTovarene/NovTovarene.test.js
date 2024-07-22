import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // For simulating user interactions
import { useNavigate } from 'react-router-dom'; // Mock navigate function
import { NovTovarene } from './NovTovarene'; // Import your component

// Mock the useNavigate hook (replace with your actual implementation if needed)
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

test('renders form and submits data', async () => {
  // Render the component
  render(< NovTovarene />);

  // Find input elements
  const numberOfLineInput = screen.getByLabelText(/Номер на линията:/i);
  const nameOfLineInput = screen.getByLabelText(/Име на линията:/i);
  const driverInput = screen.getByLabelText(/Шофьор:/i);
  const submitButton = screen.getByRole('button', { name: /Submit/i });

  // Simulate user input
  await userEvent.type(numberOfLineInput, '123');
  await userEvent.type(nameOfLineInput, 'Test Line');
  await userEvent.type(driverInput, 'John Doe');

  // Fire submit event
  fireEvent.click(submitButton);

  // Assert that form data is updated correctly (replace with your assertions based on actual behavior)
  expect(data.numberOfLine).toBe('123');
  expect(data.nameOfLine).toBe('Test Line');
  expect(data.driver).toBe('John Doe');

  // Verify navigate function is called with expected arguments (replace with your logic)
  expect(useNavigate).toHaveBeenCalledWith('/tovarene/some_id', { replace: true }); // Replace "some_id" with actual logic
});
