import { dateToLinux } from "./toLinux";
import { dateCheck } from "./check.js";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * dateToLinux test.
 * @see https://nodejs.org/api/test.html
 */
describe("dateToLinux", (): void => {
  const error: string = "error: invalid date";

  it("1. Return date when it receives a valid date.", (): void => {
    const result: string | number | Date = dateToLinux("2023-09-18 21:21:06");

    assert.equal(result, 1695072066);
    assert.equal(dateCheck(result), true);
  });

  it("2. Returns date when receiving a valid date in linux format.", (): void => {
    const result: string | number | Date = dateToLinux(1695074971);

    assert.equal(result, 1695074);
    assert.equal(dateCheck(result), true);
  });

  it("3. Returns error when receiving a valid date in text and linux format.", (): void => {
    const result: string | number | Date = dateToLinux("1695074971");

    assert.equal(result, error);
    assert.equal(dateCheck(result), false);
  });

  it("4. Return error when it receives a invalid date.", (): void => {
    const result: string | number | Date = dateToLinux("2023-99-18 21:21:06");

    assert.equal(result, error);
    assert.equal(dateCheck(result), false);
  });

  it("5. Returns error when receiving a invalid date in text and linux format.", (): void => {
    const result: string | number | Date = dateToLinux("169507497%");

    assert.equal(result, error);
    assert.equal(dateCheck(result), false);
  });

  it("6. Return date when it receives a valid number.", (): void => {
    const result: string | number | Date = dateToLinux("2023%");

    assert.equal(result, 1672531200);
    assert.equal(dateCheck(result), true);
  });

  it("7. Return date when it receives a zero number.", (): void => {
    const result: string | number | Date = dateToLinux("0");

    assert.equal(result, 946684800);
    assert.equal(dateCheck(result), true);
  });

  it("8. Returns the current date when no data is received.", (): void => {
    const result: string | number | Date = dateToLinux();

    assert.equal(dateCheck(result), true);
  });
});
