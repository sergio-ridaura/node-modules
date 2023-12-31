import { dateGetYear } from "./getYear";
import { dateCheck } from "./check.js";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * dateYearGet test.
 * @see https://nodejs.org/api/test.html
 */
describe("dateYearGet.", (): void => {
  const error: string = "error: invalid date";

  it("1. Return date when it receives a valid date.", (): void => {
    const result: string | number | Date = dateGetYear("2023-09-18 21:21:06");

    assert.equal(result, "2023");
    assert.equal(dateCheck(result), true);
  });

  it("2. Returns date when receiving a valid date in linux format.", (): void => {
    const result: string | number | Date = dateGetYear(1695074971);

    assert.equal(result, "2023");
    assert.equal(dateCheck(result), true);
  });

  it("3. Returns date when receiving a valid date in text and linux format.", (): void => {
    const result: string | undefined = dateGetYear("1695074971");

    assert.equal(result, "2023");
    assert.equal(dateCheck(result), true);
  });

  it("4. Return error when it receives a invalid date.", (): void => {
    const result: string | undefined = dateGetYear("2023-99-18 21:21:06");

    assert.equal(result, error);
    assert.equal(dateCheck(result), false);
  });

  it("5. Returns error when receiving a invalid date in text and linux format.", (): void => {
    const result: string | undefined = dateGetYear("169507497%");

    assert.equal(result, error);
    assert.equal(dateCheck(result), false);
  });

  it("6. Return date when it receives a valid number.", (): void => {
    const result: string | undefined = dateGetYear("2023");

    assert.equal(result, "1970");
    assert.equal(dateCheck(result), true);
  });

  it("7. Return date when it receives a zero number.", (): void => {
    const result: string | undefined = dateGetYear("0");

    assert.equal(result, "1970");
    assert.equal(dateCheck(result), true);
  });

  it("8. Returns the current date when no data is received.", (): void => {
    const result: string | undefined = dateGetYear();

    assert.equal(dateCheck(result), true);
  });
});
