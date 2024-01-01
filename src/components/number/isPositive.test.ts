import { numberIsPositive } from "./isPositive";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * numberIsPositive test.
 * @see https://nodejs.org/api/test.html
 */
describe("numberIsPositive.", (): void => {
  it("1. Return true when input is a positive number.", (): void => {
    const result: boolean | null = numberIsPositive(5);

    assert.equal(result, true);
  });

  it("2. Return null when input is zero.", (): void => {
    const result: boolean | null = numberIsPositive(0);

    assert.equal(result, null);
  });

  it("3. Return true when input is a decimal greater than zero.", (): void => {
    const result: boolean | null = numberIsPositive(0.25);

    assert.equal(result, true);
  });

  it("4. Return false when input is a negative number.", (): void => {
    const result: boolean | null = numberIsPositive(-5);

    assert.equal(result, false);
  });

  it("5. Return false when input is a decimal less than zero.", (): void => {
    const result: boolean | null = numberIsPositive(-0.5);

    assert.equal(result, false);
  });

  it("6. Returns true when given a string with very large number.", (): void => {
    const result: boolean | null = numberIsPositive(1.23e50);

    assert.equal(result, true);
  });
});
