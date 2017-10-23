describe("fizzBuzz", function() {
  it("returns 'fizz' when passed a multiple of 3", function() {
    expect(fizzBuzz(3)).toBe("fizz");
  })
  it("returns 'buzz' when passed a multiple of 5", function() {
    expect(fizzBuzz(5)).toBe("buzz");
  })
  it("returns 'fizzbuzz' when passed a multiple of 3 and 5", function() {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
  })
  it("returns number if not a multiple of 3 or 5", function() {
    expect(fizzBuzz(0)).toBe(0);
  })
});
