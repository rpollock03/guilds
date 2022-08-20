import { describe, test } from "bun:test";
import { expect } from "chai";

describe("Storage", () => {
  test("Firestore Emulator", async () => {
    const res = await fetch("localhost:8080");
    expect(
      res.ok,
      `cannot connect to the Firestore Emulator, res: ${res.status}`
    ).to.be.true;
  });

  /*
  test("Storage Emulator", async () => {
    const res = await fetch("localhost:9199");
    expect(res.ok, `cannot connect to the Storage Emulator, res: ${res.status}`)
      .to.be.true;
  });
  */
});
