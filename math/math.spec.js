// Test away!

const { add, multiply, average } = require("./math");

describe("add", () => {
  test("should add two numbers", () => {
    //set-up - Arrange
    const expectedValue = 3;
    //execute code under test - Act
    const actual = add(2, 1);
    //assert results
    expect(actual).toBe(expectedValue);
  });
});

describe("multiply", () => {
  test("should multiply two numbers", () => {
    //set-up - Arrange
    const expectedValue = 2;
    //execute code under test - Act
    const actual = multiply(2, 1);
    //assert results
    expect(actual).toBe(expectedValue);
  });
});

describe("average", () => {
  test("should find the average of the sum on an array", () => {
    const expected = 2;
    const actual = average();
    expect(actual).toBe(expected);
  });
});
