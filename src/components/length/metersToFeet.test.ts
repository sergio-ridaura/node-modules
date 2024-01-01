import { metersToFeet } from "./metersToFeet";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * metersToFeet test.
 * @see https://nodejs.org/api/test.html
 */
describe("metersToFeet.", (): void => {
  it("1. Returns feet when receiving meters.", (): void => {
    const result: number = metersToFeet(4);

    assert.equal(result, 13.12);
  });

  it("2. Returns feet when receiving meters in decimals.", (): void => {
    const result: number = metersToFeet(2.49);

    assert.equal(result, 8.17);
  });

  it("3. Returns feet when receiving 0 meters.", (): void => {
    const result: number = metersToFeet(0);

    assert.equal(result, 0);
  });

  it("4. Returns feet when receiving a negative meters.", (): void => {
    const result: number = metersToFeet(-0.98);

    assert.equal(result, -3.22);
  });
});
