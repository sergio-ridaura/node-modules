import { kphToMph } from "./kphToMph";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * kphToMph test.
 * @see https://nodejs.org/api/test.html
 */
describe("kphToMph.", (): void => {
  it("1. Return mph when receiving kph.", (): void => {
    const result: number = kphToMph(4.01);

    assert.equal(result, 2.49);
  });

  it("2. Return mph when receiving kph in decimals.", (): void => {
    const result: number = kphToMph(2.49);

    assert.equal(result, 1.55);
  });

  it("3. Return mph when receiving 0 kph.", (): void => {
    const result: number = kphToMph(0);

    assert.equal(result, 0);
  });

  it("4. Return mph when receiving a negative kph.", (): void => {
    const result: number = kphToMph(-0.98);

    assert.equal(result, -0.61);
  });
});
