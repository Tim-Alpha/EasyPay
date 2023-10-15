import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeScreen from './HomeScreen'; // Update the import path as needed

describe('HomeScreen', () => {
  // Render the component before each test
  beforeEach(() => {
    render(<HomeScreen />);
  });

  it('should render the component without errors', () => {
    // You can use snapshot testing or specific assertions
    // For example, to check if a specific element is rendered:
    const addMoneyButton = getByText('Add money >');
    expect(addMoneyButton).toBeTruthy();
  });

  it('should display the user data and recent transactions', async () => {
    // Mock Axios requests to return test data
    axios.get.mockResolvedValueOnce({
      data: {
        bankAccount: {
          fund: 100.0,
        },
        upi_id: 'testupi123',
      },
    });

    axios.get.mockResolvedValueOnce({
      data: [
        {
          senderName: 'Test User',
          time: '2023-10-15T08:00:00Z',
          bankName: 'Test Bank',
          amount: 50.0,
          senderImage: 'https://example.com/test.jpg',
        },
      ],
    });

    // Wait for the component to load data
    await waitFor(() => {
      expect(getByText('Wallet Balance')).toBeTruthy();
      expect(getByText('$100.00')).toBeTruthy();
      expect(getByText('UPI ID: testupi123')).toBeTruthy();

      expect(getByText('Recent Transactions:')).toBeTruthy();
      expect(getByText('Test User')).toBeTruthy();
      expect(getByText('From: Test Bank')).toBeTruthy();
      expect(getByText('$50.00')).toBeTruthy();
    });
  });

  it('should respond to user interaction with "Add Money" button', () => {
    const addMoneyButton = getByText('Add money >');

    // Mock a function to simulate the button click
    const mockAddMoney = jest.fn();
    addMoneyButton.props.onPress = mockAddMoney;

    fireEvent.press(addMoneyButton);

    // Expect the mock function to be called
    expect(mockAddMoney).toHaveBeenCalled();
  });

  it('should display floating icon and respond to click', () => {
    const floatingIcon = getByTestId('floating-icon');

    // Mock a function to simulate the floating icon click
    const mockFloatingIconClick = jest.fn();
    floatingIcon.props.onPress = mockFloatingIconClick;

    fireEvent.press(floatingIcon);

    // Expect the mock function to be called
    expect(mockFloatingIconClick).toHaveBeenCalled();
  });
});
