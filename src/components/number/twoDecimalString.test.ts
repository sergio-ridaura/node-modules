import { twoDecimalsString } from "./twoDecimalString";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * twoDecimalsString test.
 * @see https://nodejs.org/api/test.html
 */
describe("twoDecimalsString.", (): void => {
  it("1. Return a number in string with two decimal places when given a positive integer.", (): void => {
    const result: string = twoDecimalsString(5);

    assert.equal(result, "5.00");
  });

  it("2. Return a number in string with two decimal places when given a positive float.", (): void => {
    const result: string = twoDecimalsString(3.14159);

    assert.equal(result, "3.14");
  });

  it("3. Return a number in string with two decimal places when given a negative integer.", (): void => {
    const result: string = twoDecimalsString(-3.14159);

    assert.equal(result, "-3.14");
  });

  it("4. Return a number in string 0 when given 0.", (): void => {
    const result: string = twoDecimalsString(0);

    assert.equal(result, "0.00");
  });

  it("5. Returns a number in string with two decimal places when given a positive float value, where rounding alters the digits.", (): void => {
    const result: string = twoDecimalsString(1999.9999);

    assert.equal(result, "2000.00");
  });

  it("6. Returns a number in string with two decimal places when given a negative float value, where rounding alters the digits.", (): void => {
    const result: string = twoDecimalsString(-1999.9999);

    assert.equal(result, "-2000.00");
  });
});
