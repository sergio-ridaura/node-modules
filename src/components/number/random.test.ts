import { numberRandom } from "./random";
import { numberIs } from "./is";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * numberRandom test.
 * @see https://nodejs.org/api/test.html
 */
describe("numberRandom.", (): void => {
  it("1. Returns a random number when receiving a minimum and maximum number.", (): void => {
    const result: boolean = numberIs(numberRandom(0, 10));

    assert.equal(result, true);
  });

  it("2. Returns a random number when receiving a minimum number.", (): void => {
    const result: boolean = numberIs(numberRandom(10));

    assert.equal(result, true);
  });

  it("3. Returns a random number when no data is received.", (): void => {
    const result: boolean = numberIs(numberRandom());

    assert.equal(result, true);
  });

  it("5. Returns a error when it receives a minimum number higher than the maximum.", (): void => {
    const result: boolean = numberIs(numberRandom(10, 0));

    assert.equal(result, false);
  });

  it("6. Returns a random number upon receiving a negative minimum and maximum number.", (): void => {
    const result: boolean = numberIs(numberRandom(-10, 10));

    assert.equal(result, true);
  });

  it("7. Returns a error when it receives a negative minimum number greater than the maximum.", (): void => {
    const result: boolean = numberIs(numberRandom(-10, -20));

    assert.equal(result, false);
  });

  it("8. Returns a random number when receiving a minimum number 0.", (): void => {
    const result: boolean = numberIs(numberRandom(0));

    assert.equal(result, true);
  });
});
