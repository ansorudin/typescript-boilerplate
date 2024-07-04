import { sayHello } from "../src/say-hello";

describe("Say Hello", () => {
  it("should return hello with parameters", () => {
    expect(sayHello("ansor")).toBe("Hello my name is ansor");
  });
});
