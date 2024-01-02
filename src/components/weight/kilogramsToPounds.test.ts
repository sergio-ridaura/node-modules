import { kilogramsToPounds } from "./kilogramsToPounds";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * kilogramsToPounds test.
 * @see https://nodejs.org/api/test.html
 */
describe("kilogramsToPounds.", (): void => {
  it("1. Return pounds when receiving kilograms.", (): void => {
    const result: number = kilogramsToPounds(4);

    assert.equal(result, 8.82);
  });

  it("2. Return pounds when receiving kilograms in decimals.", (): void => {
    const result: number = kilogramsToPounds(2.49);

    assert.equal(result, 5.49);
  });

  it("3. Return pounds when receiving 0 kilograms.", (): void => {
    const result: number = kilogramsToPounds(0);

    assert.equal(result, 0);
  });

  it("4. Return pounds when receiving a negative kilograms.", (): void => {
    const result: number = kilogramsToPounds(-0.98);

    assert.equal(result, -2.16);
  });
});
