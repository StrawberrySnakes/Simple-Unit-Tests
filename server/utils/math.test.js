const mathUtils = require('./math.js');

const testVars = {
    max: 20,
    min: 0,
};

describe('add()', () => {
    test('finds the sum of two numbers', () => {
        expect(mathUtils.add(2, 3)).toBe(5);
    });

    test('should clamp number to maximum', () => {
        expect(mathUtils.add(testVars.max, 1)).toBe(testVars.max);
    });

    test('should clamp number to minimum', () => {
        expect(mathUtils.add(testVars.min -2, 1)).toBe(testVars.min);
    });
});

describe('sub', () => {
    test('finds the difference of two numbers', () => {
        expect(mathUtils.sub(10, 5)).toBe(5);
    });

    test('should clamp number to maximum', () => {
        expect(mathUtils.sub(testVars.max+2, 1)).toBe(testVars.max);
    });

    test('should clamp number to minimum', () => {
        expect(mathUtils.sub(testVars.min, 1)).toBe(testVars.min);
    });
});

describe('mul()', () => {
    test('finds the product of two numbers', () => {
        expect(mathUtils.mul(5, 10)).toBe(50);
    });

    test('clamps inputs to the maximum', () => {
        expect(mathUtils.mul(testVars.max + 1, 10)).toBe(testVars.max * 10);
        expect(mathUtils.mul(10, testVars.max + 1)).toBe(testVars.max * 10);
    });

    test('clamps inputs to the minimum', () => {
        expect(mathUtils.mul(testVars.min - 1, 10)).toBe(testVars.min * 10);
        expect(mathUtils.mul(10, testVars.min - 1)).toBe(testVars.min * 10);
    });

});



