import { numberIsPair } from "./isPair";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * numberIsPair test.
 * @see https://nodejs.org/api/test.html
 */
describe("numberIsPair.", (): void => {
  it("1. Return true when input is an even number.", (): void => {
    const result: boolean = numberIsPair(4);

    assert.equal(result, true);
  });

  it("2. Return true when input is zero.", (): void => {
    const result: boolean = numberIsPair(0);

    assert.equal(result, true);
  });

  it("3. Return true when input is a negative even number.", (): void => {
    const result: boolean = numberIsPair(-6);

    assert.equal(result, true);
  });

  it("4. Return false when input is a negative odd number.", (): void => {
    const result: boolean = numberIsPair(-3);

    assert.equal(result, false);
  });

  it("5. Return false when input is a positive odd number.", (): void => {
    const result: boolean = numberIsPair(7);

    assert.equal(result, false);
  });

  it("6. Return true when input is a positive even number.", (): void => {
    const result: boolean = numberIsPair(10);

    assert.equal(result, true);
  });

  it("6. Returns true when given a string with very large number.", (): void => {
    const result: boolean = numberIsPair(1.23e50);

    assert.equal(result, true);
  });
});
