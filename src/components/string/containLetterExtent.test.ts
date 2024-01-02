import { stringContainLetterExtent } from "./containLetterExtent";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * stringContainLetterExtent test.
 * @see https://nodejs.org/api/test.html
 */
describe("stringContainLetterExtent.", (): void => {
  it("1. Return true when the string contains only letters.", (): void => {
    const result: boolean = stringContainLetterExtent("Hello");

    assert.equal(result, true);
  });

  it("2. Returns true when the string contains only lowercase letters.", (): void => {
    const result: boolean = stringContainLetterExtent("Hello");

    assert.equal(result, true);
  });

  it("3. Returns true when the string contains only uppercase letters.", (): void => {
    const result: boolean = stringContainLetterExtent("Hello");

    assert.equal(result, true);
  });

  it("4. Returns true when the string contains only lowercase and uppercase letters.", (): void => {
    const result: boolean = stringContainLetterExtent("abcABC");

    assert.equal(result, true);
  });

  it("5. Return true when the string contains letters and numbers.", (): void => {
    const result: boolean = stringContainLetterExtent("abc123");

    assert.equal(result, true);
  });

  it("6. Return true when the string contains letters and symbols.", (): void => {
    const result: boolean = stringContainLetterExtent("abc$%&");

    assert.equal(result, true);
  });

  it("7. Return true when the string contains letters and non-letter characters.", (): void => {
    const result: boolean = stringContainLetterExtent("abc$%&");

    assert.equal(result, true);
  });

  it("8. Return false when the string is empty.", (): void => {
    const result: boolean = stringContainLetterExtent("");

    assert.equal(result, false);
  });

  it("9. Return false when the string contains only numbers characters.", (): void => {
    const result: boolean = stringContainLetterExtent("123");

    assert.equal(result, false);
  });

  it("10. Return false when the string contains only symbols characters.", (): void => {
    const result: boolean = stringContainLetterExtent("$%&");

    assert.equal(result, false);
  });

  it("11. Return false when the string contains only non-letter characters.", (): void => {
    const result: boolean = stringContainLetterExtent("123$%&");

    assert.equal(result, false);
  });

  it("12. Return true when the string contains whitespace and letters.", (): void => {
    const result: boolean = stringContainLetterExtent("abc ABC");

    assert.equal(result, true);
  });

  it("13. Return true when the string contains whitespace, letters and non-letter characters.", (): void => {
    const result: boolean = stringContainLetterExtent("abc 123");

    assert.equal(result, true);
  });

  it("14. Return false when the string contains whitespace and only non-letter characters.", (): void => {
    const result: boolean = stringContainLetterExtent("123 $%&");

    assert.equal(result, false);
  });

  it("15. Return true when the string contains accented letters.", (): void => {
    const result: boolean = stringContainLetterExtent("áÁèÈïÏ");

    assert.equal(result, true);
  });

  it("16. Return false when input is a string with unicode characters.", (): void => {
    const result: boolean = stringContainLetterExtent("世界");

    assert.equal(result, false);
  });

  it("17. Return false when input is a string with emojis.", (): void => {
    const result: boolean = stringContainLetterExtent("😊");

    assert.equal(result, false);
  });

  it("18. Return false when input is a string with spaces.", (): void => {
    const result: boolean = stringContainLetterExtent(" ");

    assert.equal(result, false);
  });
});
