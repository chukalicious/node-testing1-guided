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
    expect(multiply(2, 1)).toBe(2);
  });
});

describe("average", () => {
  test("should find the average of the sum on an array", () => {
    expect(average()).toBe(2);
  });
});
