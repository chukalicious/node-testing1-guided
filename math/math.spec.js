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
  test("add a collection of values ", () => {});
  test("return 0 when called with no values ", () => {
    expect(add()).toBe(0);
  });
  test.skip("value is a number ", () => {
    expect(add(2, 1).not.toBe(NaN));
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
