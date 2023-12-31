import { emailCheck } from "./check";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * emailCheck test.
 * @see https://nodejs.org/api/test.html
 */
describe("dateCheck", (): void => {
  it("1. Return true when it receives a valid email.", (): void => {
    const result: boolean = emailCheck("test@example.com");

    assert.equal(result, true);
  });

  it("2. Return false when it receives an invalid email.", (): void => {
    const result: boolean = emailCheck("abcdefg");

    assert.equal(result, false);
  });

  it("3. Return false when it receives an empty string as an email.", (): void => {
    const result: boolean = emailCheck("");

    assert.equal(result, false);
  });

  it("4. Return false when it receives an email with no @ symbol.", (): void => {
    const result: boolean = emailCheck("testexample.com");

    assert.equal(result, false);
  });

  it("5. Return false when it receives an email with no domain.", (): void => {
    const result: boolean = emailCheck("test@example");

    assert.equal(result, false);
  });

  it("6. Return false when it receives an email with no username.", (): void => {
    const result: boolean = emailCheck("@example");

    assert.equal(result, false);
  });
});
