import { stringContainSymbol } from "./containSymbol";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * stringContainLetter test.
 * @see https://nodejs.org/api/test.html
 */
describe("stringContainLetter.", (): void => {
  it("1. Return false when the string contains only letters.", (): void => {
    const result: boolean = stringContainSymbol("Hello");

    assert.equal(result, false);
  });

  it("2. Returns false when the string contains only lowercase letters.", (): void => {
    const result: boolean = stringContainSymbol("abc");

    assert.equal(result, false);
  });

  it("3. Returns false when the string contains only uppercase letters.", (): void => {
    const result: boolean = stringContainSymbol("ABC");

    assert.equal(result, false);
  });

  it("4. Returns false when the string contains only lowercase and uppercase letters.", (): void => {
    const result: boolean = stringContainSymbol("abcABC");

    assert.equal(result, false);
  });

  it("5. Return false when the string contains letters and numbers.", (): void => {
    const result: boolean = stringContainSymbol("abc123");

    assert.equal(result, false);
  });

  it("6. Return true when the string contains letters and symbols.", (): void => {
    const result: boolean = stringContainSymbol("abc$%&");

    assert.equal(result, true);
  });

  it("7. Return true when the string contains letters and non-letter characters.", (): void => {
    const result: boolean = stringContainSymbol("abc$%&");

    assert.equal(result, true);
  });

  it("8. Return false when the string is empty.", (): void => {
    const result: boolean = stringContainSymbol("");

    assert.equal(result, false);
  });

  it("9. Return false when the string contains only numbers characters.", (): void => {
    const result: boolean = stringContainSymbol("123");

    assert.equal(result, false);
  });

  it("10. Return true when the string contains only symbols characters.", (): void => {
    const result: boolean = stringContainSymbol("$%&");

    assert.equal(result, true);
  });

  it("11. Return true when the string contains only non-letter characters.", (): void => {
    const result: boolean = stringContainSymbol("123$%&");

    assert.equal(result, true);
  });

  it("12. Return false when the string contains whitespace and letters.", (): void => {
    const result: boolean = stringContainSymbol("abc ABC");

    assert.equal(result, false);
  });

  it("13. Return false when the string contains whitespace, letters and non-letter characters.", (): void => {
    const result: boolean = stringContainSymbol("abc 123");

    assert.equal(result, false);
  });

  it("14. Return true when the string contains whitespace and only non-letter characters.", (): void => {
    const result: boolean = stringContainSymbol("123 $%&");

    assert.equal(result, true);
  });

  it("15. Return false when the string contains accented letters.", (): void => {
    const result: boolean = stringContainSymbol("áÁèÈïÏ");

    assert.equal(result, false);
  });

  it("16. Return false when input is a string with unicode characters.", (): void => {
    const result: boolean = stringContainSymbol("世界");

    assert.equal(result, false);
  });

  it("17. Return false when input is a string with emojis.", (): void => {
    const result: boolean = stringContainSymbol("😊");

    assert.equal(result, false);
  });

  it("18. Return false when input is a string with spaces.", (): void => {
    const result: boolean = stringContainSymbol(" ");

    assert.equal(result, false);
  });
});
