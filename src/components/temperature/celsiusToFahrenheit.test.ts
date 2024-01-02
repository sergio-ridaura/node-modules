import { celsiusToFahrenheit } from "./celsiusToFahrenheit";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * celsiusToFahrenheit test.
 * @see https://nodejs.org/api/test.html
 */
describe("celsiusToFahrenheit.", (): void => {
  it("1. Return fahrenheit when receiving celsius.", (): void => {
    const result: number = celsiusToFahrenheit(4);

    assert.equal(result, 39.2);
  });

  it("2. Return fahrenheit when receiving celsius in decimals.", (): void => {
    const result: number = celsiusToFahrenheit(2.49);

    assert.equal(result, 36.48);
  });

  it("3. Return fahrenheit when receiving 0 celsius.", (): void => {
    const result: number = celsiusToFahrenheit(0);

    assert.equal(result, 32);
  });

  it("4. Return fahrenheit when receiving a negative celsius.", (): void => {
    const result: number = celsiusToFahrenheit(-0.98);

    assert.equal(result, 30.24);
  });
});
