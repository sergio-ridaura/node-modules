import { mphToKph } from "./mphToKph";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * mphToKph test.
 * @see https://nodejs.org/api/test.html
 */
describe("mphToKph.", (): void => {
  it("1. Return kph when receiving mph.", (): void => {
    const result: number = mphToKph(4);

    assert.equal(result, 6.44);
  });

  it("2. Return kph when receiving mph in decimals.", (): void => {
    const result: number = mphToKph(2.49);

    assert.equal(result, 4.01);
  });

  it("3. Return kph when receiving 0 mph.", (): void => {
    const result: number = mphToKph(0);

    assert.equal(result, 0);
  });

  it("4. Return kph when receiving a negative mph.", (): void => {
    const result: number = mphToKph(-0.98);

    assert.equal(result, -1.58);
  });
});
