import { expect } from "chai"
import { describe, test } from "bun:test";

describe("Hero", () => {
  test("createHero", () => {
    const hero = {
      profilePicture: "",
      email: "",
      name: {
        first: "",
        second: "",
        last: "",
      },
      location: {
        city: "",
        country: "",
      },
    };
    expect(hero).to.be.null;
  });
});
