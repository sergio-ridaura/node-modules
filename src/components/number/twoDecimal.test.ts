import { twoDecimal } from "./twoDecimal";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * numberTwoDecimal test.
 * @see https://nodejs.org/api/test.html
 */
describe("numberTwoDecimal.", (): void => {
  it("1. Return a number with two decimal places when given a positive integer.", (): void => {
    const result: number = twoDecimal(5);

    assert.equal(result, 5.0);
  });

  it("2. Return a number with two decimal places when given a positive float.", (): void => {
    const result: number = twoDecimal(3.14159);

    assert.equal(result, 3.14);
  });

  it("3. Return a number with two decimal places when given a negative integer.", (): void => {
    const result: number = twoDecimal(-3.14159);

    assert.equal(result, -3.14);
  });

  it("4. Return a 0 when given 0.", (): void => {
    const result: number = twoDecimal(0);

    assert.equal(result, 0);
  });

  it("5. Returns a number with two decimal places when given a positive float value, where rounding alters the digits.", (): void => {
    const result: number = twoDecimal(1999.9999);

    assert.equal(result, 2000.0);
  });

  it("6. Returns a number with two decimal places when given a negative float value, where rounding alters the digits.", (): void => {
    const result: number = twoDecimal(-1999.9999);

    assert.equal(result, -2000.0);
  });
});
