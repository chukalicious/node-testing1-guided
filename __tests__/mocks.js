describe("fun with mocks ", () => {
  test("simple test", () => {
    const mock = jest.fn();
    mock();

    expect(mock).toHaveBeenCalled();
  });
});
