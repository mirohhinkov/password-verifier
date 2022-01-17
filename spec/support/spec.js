const passVerifier = require("../../passVerifier");

//Test for null
let test1 = passVerifier(null);
describe("password verifyer", () => {
  it("should be an error message: ", () => {
    expect(test1).toBe("Password can not be null");
  });
});

//Test for less then 8
let test2 = passVerifier("FR90BG");
describe("password verifyer", () => {
  it("should be an error message: ", () => {
    expect(test2).toBe("Password should contain at least 8 characters");
  });
});

//Test for less then 8, but has small, capital and number
let test3 = passVerifier("as1Bf");
describe("password verifyer", () => {
  it("should be true: ", () => {
    expect(test3).toBe(true);
  });
});

//Test for more then 8 no number
let test4 = passVerifier("aabbbCCDD");
describe("password verifyer", () => {
  it("should be true: ", () => {
    expect(test4).toBe(true);
  });
});

//Test for more then 8 no number, no capital
let test5 = passVerifier("aahfalkjhfj");
describe("password verifyer", () => {
  it("should be an error message: ", () => {
    expect(test5).toBe("Password should contain at least 1 capital letter");
  });
});
