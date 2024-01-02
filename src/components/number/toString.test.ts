import { numberToString } from "./toString";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * numberToString test.
 * @see https://nodejs.org/api/test.html
 */
describe("numberToString.", (): void => {
  it("1. Return string when input is a non-zero number.", (): void => {
    const result: string = numberToString(5);

    assert.equal(result, "5");
  });

  it("2. Return string when input is a positive number.", (): void => {
    const result: string = numberToString(10);

    assert.equal(result, "10");
  });

  it("3. Return string when input is a negative number.", (): void => {
    const result: string = numberToString(-25);

    assert.equal(result, "-25");
  });

  it("4. Return string when input is 0.", (): void => {
    const result: string = numberToString(0);

    assert.equal(result, "0");
  });

  it("5. Return string when input is a decimal less than zero.", (): void => {
    const result: string = numberToString(-0.5);

    assert.equal(result, "-0.5");
  });

  it("6. Returns string when given a string with very large number.", (): void => {
    const result: string = numberToString(1.23e50);

    assert.equal(result, "1.23e+50");
  });
});
