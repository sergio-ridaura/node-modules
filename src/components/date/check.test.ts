import { dateCheck } from "./check";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * dateCheck test.
 * @see https://nodejs.org/api/test.html
 */
describe("dateCheck", (): void => {
  it("1. Return true when it receives a valid date.", (): void => {
    const result: boolean = dateCheck("2023-09-18 21:21:06");

    assert.equal(result, true);
  });

  it("2. Return idName when idDefault are undefined.", (): void => {
    const result: boolean = dateCheck(1695074971);

    assert.equal(result, true);
  });

  it("3. Return idDefault when idName is `default`.", (): void => {
    const result: boolean = dateCheck("1695074971");

    assert.equal(result, false);
  });

  it("4. Return undefined when idName is undefined.", (): void => {
    const result: boolean = dateCheck("2023-99-18 21:21:06");

    assert.equal(result, false);
  });

  it("5. Return addClass when idName is undefined.", (): void => {
    const result: boolean = dateCheck("2023");

    assert.equal(result, true);
  });
});
