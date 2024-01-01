import { stringIs } from "./is";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * stringIs test.
 * @see https://nodejs.org/api/test.html
 */
describe("stringIs.", (): void => {
  it("1. Return false when input is a positive integer.", (): void => {
    const result: boolean = stringIs(5);

    assert.equal(result, false);
  });

  it("2. Return false when input is a negative integer.", (): void => {
    const result: boolean = stringIs(-5);

    assert.equal(result, false);
  });

  it("3. Return false when input is zero.", (): void => {
    const result: boolean = stringIs(0);

    assert.equal(result, false);
  });

  it("4. Return false when input is null.", (): void => {
    const result: boolean = stringIs(null);

    assert.equal(result, false);
  });

  it("5. Return false when input is undefined.", (): void => {
    const result: boolean = stringIs(undefined);

    assert.equal(result, false);
  });

  it("6. Return false when input is a decimal number.", (): void => {
    const result: boolean = stringIs(10.9);

    assert.equal(result, false);
  });

  it("7. Return false for exponential notation input.", (): void => {
    const result: boolean = stringIs(1e10);

    assert.equal(result, false);
  });

  it("8. Return false for Infinity input.", (): void => {
    const result: boolean = stringIs(Infinity);

    assert.equal(result, false);
  });

  it("9. Return false for -Infinity input.", (): void => {
    const result: boolean = stringIs(-Infinity);

    assert.equal(result, false);
  });

  it("10. Return false for NaN input.", (): void => {
    const result: boolean = stringIs(NaN);

    assert.equal(result, false);
  });

  it("11. Return false for true boolean input.", (): void => {
    const result: boolean = stringIs(true);

    assert.equal(result, false);
  });

  it("12. Return false for false boolean input.", (): void => {
    const result: boolean = stringIs(false);

    assert.equal(result, false);
  });

  it("13. Return true for string input.", (): void => {
    const result: boolean = stringIs("1234");

    assert.equal(result, true);
  });

  it("14. Return false for object input.", (): void => {
    const result: boolean = stringIs({ number: 1234 });

    assert.equal(result, false);
  });

  it("15. Return false for array input.", (): void => {
    const result: boolean = stringIs([1234]);

    assert.equal(result, false);
  });

  it("16. Return true when input has leading/trailing spaces.", (): void => {
    const result: boolean = stringIs(" 5 ");

    assert.equal(result, true);
  });

  it("17. Return true when input has leading/trailing non-numeric characters.", (): void => {
    const result: boolean = stringIs("abc123");

    assert.equal(result, true);
  });

  it("18. Return true when input has non-numeric characters in between.", (): void => {
    const result: boolean = stringIs("1a2");

    assert.equal(result, true);
  });

  it("19. Return true when input is a string with unicode characters.", (): void => {
    const result: boolean = stringIs("世界");

    assert.equal(result, true);
  });

  it("20. Return true when input is a string with emojis.", (): void => {
    const result: boolean = stringIs("😊");

    assert.equal(result, true);
  });

  it("21. Return true when input is an empty string.", (): void => {
    const result: boolean = stringIs("");

    assert.equal(result, true);
  });

  it("22. Return true when the string contains accented letters.", (): void => {
    const result: boolean = stringIs("áÁèÈïÏ");

    assert.equal(result, true);
  });

  it("23. Return true when input is a string with spaces.", (): void => {
    const result: boolean = stringIs(" ");

    assert.equal(result, true);
  });
});
