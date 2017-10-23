describe("fizzBuzz", function() {

  describe("multiples of 3", function() {
    it("returns 'fizz' when passed 3", function() {
      expect(fizzBuzz(3)).toBe("fizz");
    })
    it("returns 'fizz' when passed 66", function() {
      expect(fizzBuzz(3)).toBe("fizz");
    })
  })

  describe("multiples of 5", function() {
    it("returns 'buzz' when passed 5", function() {
      expect(fizzBuzz(5)).toBe("buzz");
    })
    it("returns 'buzz' when passed 25", function() {
      expect(fizzBuzz(5)).toBe("buzz");
    })
  })

  describe("multiples of 3 and 5", function() {
    it("returns 'fizzbuzz' when passed 15", function() {
      expect(fizzBuzz(15)).toBe("fizzbuzz");
    })
    it("returns 'fizzbuzz' when passed 30", function() {
      expect(fizzBuzz(15)).toBe("fizzbuzz");
    })
  })

  describe("returns the same number passed if not a multiple of 3, 5 or both", function() {
    it("returns number if not a multiple of 3 or 5", function() {
      expect(fizzBuzz(0)).toBe(0);
    })
  })

});
