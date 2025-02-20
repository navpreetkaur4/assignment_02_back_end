// test/validate.test.ts
import { validateData } from '../src/api/v1/validators/validation';

test('should return false for invalid input', () => {
   const invalidData = {}; // Provide invalid data based on your validation logic
   expect(validateData(invalidData)).toBe(false);
});

test('should return true for valid input', () => {
   const validData = { name: 'John Doe', age: 30 }; // Provide valid data
   expect(validateData(validData)).toBe(true);
});
