import { stringIsCapital } from "./isCapital";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * stringIsCapital test.
 * @see https://nodejs.org/api/test.html
 */
describe("stringIsCapital.", (): void => {
  it("1. Return tru when the string contains only letters.", (): void => {
    const result: boolean = stringIsCapital("Hello");

    assert.equal(result, true);
  });

  it("2. Returns false when the string contains only lowercase letters.", (): void => {
    const result: boolean = stringIsCapital("abc");

    assert.equal(result, false);
  });

  it("3. Returns true when the string contains only uppercase letters.", (): void => {
    const result: boolean = stringIsCapital("ABC");

    assert.equal(result, true);
  });

  it("4. Returns false when the string contains only lowercase and uppercase letters.", (): void => {
    const result: boolean = stringIsCapital("abcABC");

    assert.equal(result, false);
  });

  it("5. Return false when the string contains letters and numbers.", (): void => {
    const result: boolean = stringIsCapital("abc123");

    assert.equal(result, false);
  });

  it("6. Return false when the string contains letters and symbols.", (): void => {
    const result: boolean = stringIsCapital("abc$%&");

    assert.equal(result, false);
  });

  it("7. Return false when the string contains letters and non-letter characters.", (): void => {
    const result: boolean = stringIsCapital("abc$%&");

    assert.equal(result, false);
  });

  it("8. Return false when the string is empty.", (): void => {
    const result: boolean = stringIsCapital("");

    assert.equal(result, false);
  });

  it("9. Return false when the string contains only numbers characters.", (): void => {
    const result: boolean = stringIsCapital("123");

    assert.equal(result, false);
  });

  it("10. Return false when the string contains only symbols characters.", (): void => {
    const result: boolean = stringIsCapital("$%&");

    assert.equal(result, false);
  });

  it("11. Return false when the string contains only non-letter characters.", (): void => {
    const result: boolean = stringIsCapital("123$%&");

    assert.equal(result, false);
  });

  it("12. Return false when the string contains whitespace and letters.", (): void => {
    const result: boolean = stringIsCapital("abc ABC");

    assert.equal(result, false);
  });

  it("13. Return false when the string contains whitespace, letters and non-letter characters.", (): void => {
    const result: boolean = stringIsCapital("abc 123");

    assert.equal(result, false);
  });

  it("14. Return false when the string contains whitespace and only non-letter characters.", (): void => {
    const result: boolean = stringIsCapital("123 $%&");

    assert.equal(result, false);
  });

  it("15. Return false when the string contains accented letters.", (): void => {
    const result: boolean = stringIsCapital("áÁèÈïÏ");

    assert.equal(result, false);
  });

  it("16. Return false when input is a string with unicode characters.", (): void => {
    const result: boolean = stringIsCapital("世界");

    assert.equal(result, false);
  });

  it("17. Return false when input is a string with emojis.", (): void => {
    const result: boolean = stringIsCapital("😊");

    assert.equal(result, false);
  });

  it("18. Return false when input is a string with spaces.", (): void => {
    const result: boolean = stringIsCapital(" ");

    assert.equal(result, false);
  });
});
