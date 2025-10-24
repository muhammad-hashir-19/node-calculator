const { add, subtract, multiply, divide, modulus } = require('./calculator');

describe('Calculator Functions', () => {
  

  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds a positive and negative number', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('adds two negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });


  test('subtracts two positive numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts resulting in negative value', () => {
    expect(subtract(3, 8)).toBe(-5);
  });

 
  test('multiplies two positive numbers', () => {
    expect(multiply(3, 5)).toBe(15);
  });

  test('multiplies with a negative number', () => {
    expect(multiply(-4, 6)).toBe(-24);
  });

  test('multiplies by zero', () => {
    expect(multiply(7, 0)).toBe(0);
  });


  test('divides two positive numbers', () => {
    expect(divide(20, 4)).toBe(5);
  });

  test('divides negative by positive', () => {
    expect(divide(-15, 3)).toBe(-5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

});