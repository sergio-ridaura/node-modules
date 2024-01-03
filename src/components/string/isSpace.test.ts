import { stringIsSpace } from "./isSpace";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * stringIsSpace test.
 * @see https://nodejs.org/api/test.html
 */
describe("stringIsSpace.", (): void => {
  it("1. Return false when the string contains only letters.", (): void => {
    const result: boolean = stringIsSpace("Hello");

    assert.equal(result, false);
  });

  it("2. Returns false when the string contains only lowercase letters.", (): void => {
    const result: boolean = stringIsSpace("abc");

    assert.equal(result, false);
  });

  it("3. Returns false when the string contains only uppercase letters.", (): void => {
    const result: boolean = stringIsSpace("ABC");

    assert.equal(result, false);
  });

  it("4. Returns false when the string contains only lowercase and uppercase letters.", (): void => {
    const result: boolean = stringIsSpace("abcABC");

    assert.equal(result, false);
  });

  it("5. Return false when the string contains letters and numbers.", (): void => {
    const result: boolean = stringIsSpace("abc123");

    assert.equal(result, false);
  });

  it("6. Return false when the string contains letters and symbols.", (): void => {
    const result: boolean = stringIsSpace("abc$%&");

    assert.equal(result, false);
  });

  it("7. Return false when the string contains letters and non-letter characters.", (): void => {
    const result: boolean = stringIsSpace("abc$%&");

    assert.equal(result, false);
  });

  it("8. Return false when the string is empty.", (): void => {
    const result: boolean = stringIsSpace("");

    assert.equal(result, false);
  });

  it("9. Return false when the string contains only numbers characters.", (): void => {
    const result: boolean = stringIsSpace("123");

    assert.equal(result, false);
  });

  it("10. Return false when the string contains only symbols characters.", (): void => {
    const result: boolean = stringIsSpace("$%&");

    assert.equal(result, false);
  });

  it("11. Return false when the string contains only non-letter characters.", (): void => {
    const result: boolean = stringIsSpace("123$%&");

    assert.equal(result, false);
  });

  it("12. Return false when the string contains whitespace and letters.", (): void => {
    const result: boolean = stringIsSpace("abc ABC");

    assert.equal(result, false);
  });

  it("13. Return false when the string contains whitespace, letters and non-letter characters.", (): void => {
    const result: boolean = stringIsSpace("abc 123");

    assert.equal(result, false);
  });

  it("14. Return false when the string contains whitespace and only non-letter characters.", (): void => {
    const result: boolean = stringIsSpace("123 $%&");

    assert.equal(result, false);
  });

  it("15. Return false when the string contains accented letters.", (): void => {
    const result: boolean = stringIsSpace("áÁèÈïÏ");

    assert.equal(result, false);
  });

  it("16. Return false when input is a string with unicode characters.", (): void => {
    const result: boolean = stringIsSpace("世界");

    assert.equal(result, false);
  });

  it("17. Return false when input is a string with emojis.", (): void => {
    const result: boolean = stringIsSpace("😊");

    assert.equal(result, false);
  });

  it("18. Return true when input is a string with spaces.", (): void => {
    const result: boolean = stringIsSpace(" ");

    assert.equal(result, true);
  });
});
