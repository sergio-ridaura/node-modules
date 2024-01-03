import { stringIsSymbol } from "./isSymbol";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * stringIsSymbol test.
 * @see https://nodejs.org/api/test.html
 */
describe("stringIsSymbol.", (): void => {
  it("1. Return false when the string contains only letters.", (): void => {
    const result: boolean = stringIsSymbol("Hello");

    assert.equal(result, false);
  });

  it("2. Returns false when the string contains only lowercase letters.", (): void => {
    const result: boolean = stringIsSymbol("abc");

    assert.equal(result, false);
  });

  it("3. Returns false when the string contains only uppercase letters.", (): void => {
    const result: boolean = stringIsSymbol("ABC");

    assert.equal(result, false);
  });

  it("4. Returns false when the string contains only lowercase and uppercase letters.", (): void => {
    const result: boolean = stringIsSymbol("abcABC");

    assert.equal(result, false);
  });

  it("5. Return false when the string contains letters and numbers.", (): void => {
    const result: boolean = stringIsSymbol("abc123");

    assert.equal(result, false);
  });

  it("6. Return false when the string contains letters and symbols.", (): void => {
    const result: boolean = stringIsSymbol("abc$%&");

    assert.equal(result, false);
  });

  it("7. Return false when the string contains letters and non-letter characters.", (): void => {
    const result: boolean = stringIsSymbol("abc$%&");

    assert.equal(result, false);
  });

  it("8. Return false when the string is empty.", (): void => {
    const result: boolean = stringIsSymbol("");

    assert.equal(result, false);
  });

  it("9. Return false when the string contains only numbers characters.", (): void => {
    const result: boolean = stringIsSymbol("123");

    assert.equal(result, false);
  });

  it("10. Return true when the string contains only symbols characters.", (): void => {
    const result: boolean = stringIsSymbol("$%&");

    assert.equal(result, true);
  });

  it("11. Return false when the string contains only non-letter characters.", (): void => {
    const result: boolean = stringIsSymbol("123$%&");

    assert.equal(result, false);
  });

  it("12. Return false when the string contains whitespace and letters.", (): void => {
    const result: boolean = stringIsSymbol("abc ABC");

    assert.equal(result, false);
  });

  it("13. Return false when the string contains whitespace, letters and non-letter characters.", (): void => {
    const result: boolean = stringIsSymbol("abc 123");

    assert.equal(result, false);
  });

  it("14. Return false when the string contains whitespace and only non-letter characters.", (): void => {
    const result: boolean = stringIsSymbol("123 $%&");

    assert.equal(result, false);
  });

  it("15. Return false when the string contains accented letters.", (): void => {
    const result: boolean = stringIsSymbol("áÁèÈïÏ");

    assert.equal(result, false);
  });

  it("16. Return false when input is a string with unicode characters.", (): void => {
    const result: boolean = stringIsSymbol("世界");

    assert.equal(result, false);
  });

  it("17. Return false when input is a string with emojis.", (): void => {
    const result: boolean = stringIsSymbol("😊");

    assert.equal(result, false);
  });

  it("18. Return false when input is a string with spaces.", (): void => {
    const result: boolean = stringIsSymbol(" ");

    assert.equal(result, false);
  });
});
