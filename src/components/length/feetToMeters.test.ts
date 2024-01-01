import { feetToMeters } from "./feetToMeters";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * feetToMeters test.
 * @see https://nodejs.org/api/test.html
 */
describe("feetToMeters.", (): void => {
  it("1. Return meters when receiving feet.", (): void => {
    const result: number = feetToMeters(4);

    assert.equal(result, 1.22);
  });

  it("2. Return meters when receiving feet in decimals.", (): void => {
    const result: number = feetToMeters(2.49);

    assert.equal(result, 0.76);
  });

  it("3. Return meters when receiving 0 feet.", (): void => {
    const result: number = feetToMeters(0);

    assert.equal(result, 0);
  });

  it("4. Return meters when receiving a negative feet.", (): void => {
    const result: number = feetToMeters(-0.98);

    assert.equal(result, -0.3);
  });
});
