import { fahrenheitToCelsius } from "./fahrenheitToCelsius";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * fahrenheitToCelsius test.
 * @see https://nodejs.org/api/test.html
 */
describe("fahrenheitToCelsius.", (): void => {
  it("1. Return celsius when receiving fahrenheit.", (): void => {
    const result: number = fahrenheitToCelsius(3.99);

    assert.equal(result, -15.56);
  });

  it("2. Return celsius when receiving fahrenheit in decimals.", (): void => {
    const result: number = fahrenheitToCelsius(2.5);

    assert.equal(result, -16.39);
  });

  it("3. Return celsius when receiving 0 fahrenheit.", (): void => {
    const result: number = fahrenheitToCelsius(0);

    assert.equal(result, -17.78);
  });

  it("4. Return celsius when receiving a negative fahrenheit.", (): void => {
    const result: number = fahrenheitToCelsius(-0.98);

    assert.equal(result, -18.32);
  });
});
