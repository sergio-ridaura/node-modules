import { stringContainLetter } from "./containLetter";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * stringContainLetter test.
 * @see https://nodejs.org/api/test.html
 */
describe("stringContainLetter.", (): void => {
  it("1. Return true when the string contains only letters.", (): void => {
    const result: boolean = stringContainLetter("Hello");

    assert.equal(result, true);
  });

  it("2. Returns true when the string contains only lowercase letters.", (): void => {
    const result: boolean = stringContainLetter("abc");

    assert.equal(result, true);
  });

  it("3. Returns true when the string contains only uppercase letters.", (): void => {
    const result: boolean = stringContainLetter("ABC");

    assert.equal(result, true);
  });

  it("4. Returns true when the string contains only lowercase and uppercase letters.", (): void => {
    const result: boolean = stringContainLetter("abcABC");

    assert.equal(result, true);
  });

  it("5. Return true when the string contains letters and numbers.", (): void => {
    const result: boolean = stringContainLetter("abc123");

    assert.equal(result, true);
  });

  it("6. Return true when the string contains letters and symbols.", (): void => {
    const result: boolean = stringContainLetter("abc$%&");

    assert.equal(result, true);
  });

  it("7. Return true when the string contains letters and non-letter characters.", (): void => {
    const result: boolean = stringContainLetter("abc$%&");

    assert.equal(result, true);
  });

  it("8. Return false when the string is empty.", (): void => {
    const result: boolean = stringContainLetter("");

    assert.equal(result, false);
  });

  it("9. Return false when the string contains only numbers characters.", (): void => {
    const result: boolean = stringContainLetter("123");

    assert.equal(result, false);
  });

  it("10. Return false when the string contains only symbols characters.", (): void => {
    const result: boolean = stringContainLetter("$%&");

    assert.equal(result, false);
  });

  it("11. Return false when the string contains only non-letter characters.", (): void => {
    const result: boolean = stringContainLetter("123$%&");

    assert.equal(result, false);
  });

  it("12. Return true when the string contains whitespace and letters.", (): void => {
    const result: boolean = stringContainLetter("abc ABC");

    assert.equal(result, true);
  });

  it("13. Return true when the string contains whitespace, letters and non-letter characters.", (): void => {
    const result: boolean = stringContainLetter("abc 123");

    assert.equal(result, true);
  });

  it("14. Return false when the string contains whitespace and only non-letter characters.", (): void => {
    const result: boolean = stringContainLetter("123 $%&");

    assert.equal(result, false);
  });

  it("15. Return false when the string contains accented letters.", (): void => {
    const result: boolean = stringContainLetter("áÁèÈïÏ");

    assert.equal(result, false);
  });

  it("16. Return false when input is a string with unicode characters.", (): void => {
    const result: boolean = stringContainLetter("世界");

    assert.equal(result, false);
  });

  it("17. Return false when input is a string with emojis.", (): void => {
    const result: boolean = stringContainLetter("😊");

    assert.equal(result, false);
  });

  it("18. Return false when input is a string with spaces.", (): void => {
    const result: boolean = stringContainLetter(" ");

    assert.equal(result, false);
  });
});
