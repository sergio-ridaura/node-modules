import { stringContainSpace } from "./containSpace";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * stringContainSpace test.
 * @see https://nodejs.org/api/test.html
 */
describe("stringContainSpace.", (): void => {
  it("1. Return false when the string contains only letters.", (): void => {
    const result: boolean = stringContainSpace("Hello");

    assert.equal(result, false);
  });

  it("2. Returns false when the string contains only lowercase letters.", (): void => {
    const result: boolean = stringContainSpace("abc");

    assert.equal(result, false);
  });

  it("3. Returns false when the string contains only uppercase letters.", (): void => {
    const result: boolean = stringContainSpace("ABC");

    assert.equal(result, false);
  });

  it("4. Returns false when the string contains only lowercase and uppercase letters.", (): void => {
    const result: boolean = stringContainSpace("abcABC");

    assert.equal(result, false);
  });

  it("5. Return false when the string contains letters and numbers.", (): void => {
    const result: boolean = stringContainSpace("abc123");

    assert.equal(result, false);
  });

  it("6. Return false when the string contains letters and symbols.", (): void => {
    const result: boolean = stringContainSpace("abc$%&");

    assert.equal(result, false);
  });

  it("7. Return false when the string contains letters and non-letter characters.", (): void => {
    const result: boolean = stringContainSpace("abc$%&");

    assert.equal(result, false);
  });

  it("8. Return false when the string is empty.", (): void => {
    const result: boolean = stringContainSpace("");

    assert.equal(result, false);
  });

  it("9. Return false when the string contains only numbers characters.", (): void => {
    const result: boolean = stringContainSpace("123");

    assert.equal(result, false);
  });

  it("10. Return false when the string contains only symbols characters.", (): void => {
    const result: boolean = stringContainSpace("$%&");

    assert.equal(result, false);
  });

  it("11. Return false when the string contains only non-letter characters.", (): void => {
    const result: boolean = stringContainSpace("123$%&");

    assert.equal(result, false);
  });

  it("12. Return true when the string contains whitespace and letters.", (): void => {
    const result: boolean = stringContainSpace("abc ABC");

    assert.equal(result, true);
  });

  it("13. Return true when the string contains whitespace, letters and non-letter characters.", (): void => {
    const result: boolean = stringContainSpace("abc 123");

    assert.equal(result, true);
  });

  it("14. Return true when the string contains whitespace and only non-letter characters.", (): void => {
    const result: boolean = stringContainSpace("123 $%&");

    assert.equal(result, true);
  });

  it("15. Return false when the string contains accented letters.", (): void => {
    const result: boolean = stringContainSpace("áÁèÈïÏ");

    assert.equal(result, false);
  });

  it("16. Return false when input is a string with unicode characters.", (): void => {
    const result: boolean = stringContainSpace("世界");

    assert.equal(result, false);
  });

  it("17. Return false when input is a string with emojis.", (): void => {
    const result: boolean = stringContainSpace("😊");

    assert.equal(result, false);
  });

  it("18. Return true when input is a string with spaces.", (): void => {
    const result: boolean = stringContainSpace(" ");

    assert.equal(result, true);
  });
});
