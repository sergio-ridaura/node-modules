import { numberToBoolean } from "./toBoolean";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * numberToBoolean test.
 * @see https://nodejs.org/api/test.html
 */
describe("numberToBoolean.", (): void => {
  it("1. Return true when input is a non-zero number.", (): void => {
    const result: boolean = numberToBoolean(5);

    assert.equal(result, true);
  });

  it("2. Return true when input is a positive number.", (): void => {
    const result: boolean = numberToBoolean(10);

    assert.equal(result, true);
  });

  it("3. Return true when input is a negative number.", (): void => {
    const result: boolean = numberToBoolean(-25);

    assert.equal(result, true);
  });

  it("4. Return false when input is 0.", (): void => {
    const result: boolean = numberToBoolean(0);

    assert.equal(result, false);
  });

  it("5. Return false when input is a decimal less than zero.", (): void => {
    const result: boolean = numberToBoolean(-0.5);

    assert.equal(result, true);
  });

  it("6. Returns true when given a string with very large number.", (): void => {
    const result: boolean = numberToBoolean(1.23e50);

    assert.equal(result, true);
  });
});
