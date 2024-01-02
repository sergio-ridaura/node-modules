import { poundsToKilograms } from "./poundsToKilograms";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * poundsToKilograms test.
 * @see https://nodejs.org/api/test.html
 */
describe("poundsToKilograms.", (): void => {
  it("1. Return kilograms when receiving pounds.", (): void => {
    const result: number = poundsToKilograms(5);

    assert.equal(result, 2.27);
  });

  it("2. Return kilograms when receiving pounds in decimals.", (): void => {
    const result: number = poundsToKilograms(2.49);

    assert.equal(result, 1.13);
  });

  it("3. Return kilograms when receiving 0 pounds.", (): void => {
    const result: number = poundsToKilograms(0);

    assert.equal(result, 0);
  });

  it("4. Return kilograms when receiving a negative pounds.", (): void => {
    const result: number = poundsToKilograms(-0.99);

    assert.equal(result, -0.45);
  });
});
