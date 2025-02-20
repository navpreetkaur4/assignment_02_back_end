import { validateData } from '../src/api/v1/validators/validation'; // Adjust the path as needed

// A simple test to ensure Jest is running correctly
test('Sample test', () => {
  expect(true).toBe(true);
});

describe('Validation Tests', () => {
  // Test for invalid input
  test('should return false for invalid input', () => {
    const invalidData = {}; // Provide invalid data based on your validation logic
    expect(validateData(invalidData)).toBe(false);
  });

  // Test for valid input
  test('should return true for valid input', () => {
    const validData = { name: 'John Doe', age: 30 }; // Provide valid data
    expect(validateData(validData)).toBe(true);
  });
});
