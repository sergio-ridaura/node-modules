import { numberIs } from "./is";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * numberIs test.
 * @see https://nodejs.org/api/test.html
 */
describe("numberIs.", (): void => {
  it("1. Return true when input is a positive integer.", (): void => {
    const result: boolean = numberIs(5);

    assert.equal(result, true);
  });

  it("2. Return true when input is a negative integer.", (): void => {
    const result: boolean = numberIs(-5);

    assert.equal(result, true);
  });

  it("3. Return true when input is zero.", (): void => {
    const result: boolean = numberIs(0);

    assert.equal(result, true);
  });

  it("4. Return false when input is null.", (): void => {
    const result: boolean = numberIs(null);

    assert.equal(result, false);
  });

  it("5. Return false when input is undefined.", (): void => {
    const result: boolean = numberIs(undefined);

    assert.equal(result, false);
  });

  it("6. Return true when input is a decimal number.", (): void => {
    const result: boolean = numberIs(10.9);

    assert.equal(result, true);
  });

  it("7. Return true for exponential notation input.", (): void => {
    const result: boolean = numberIs(1e10);

    assert.equal(result, true);
  });

  it("8. Return true for Infinity input.", (): void => {
    const result: boolean = numberIs(Infinity);

    assert.equal(result, true);
  });

  it("9. Return true for -Infinity input.", (): void => {
    const result: boolean = numberIs(-Infinity);

    assert.equal(result, true);
  });

  it("10. Return false for NaN input.", (): void => {
    const result: boolean = numberIs(NaN);

    assert.equal(result, false);
  });

  it("11. Return false for true boolean input.", (): void => {
    const result: boolean = numberIs(true);

    assert.equal(result, false);
  });

  it("12. Return false for false boolean input.", (): void => {
    const result: boolean = numberIs(false);

    assert.equal(result, false);
  });

  it("13. Return false for string input.", (): void => {
    const result: boolean = numberIs("1234");

    assert.equal(result, false);
  });

  it("14. Return false for object input.", (): void => {
    const result: boolean = numberIs(1234);

    assert.equal(result, true);
  });

  it("15. Return false for array input.", (): void => {
    const result: boolean = numberIs([1234]);

    assert.equal(result, false);
  });

  it("16. Return false when input has leading/trailing spaces.", (): void => {
    const result: boolean = numberIs(" 5 ");

    assert.equal(result, false);
  });

  it("17. Return false when input has leading/trailing non-numeric characters.", (): void => {
    const result: boolean = numberIs("abc123");

    assert.equal(result, false);
  });

  it("18. Return false when input has non-numeric characters in between.", (): void => {
    const result: boolean = numberIs("1a2");

    assert.equal(result, false);
  });

  it("19. Return false when input is a string with unicode characters.", (): void => {
    const result: boolean = numberIs("世界");

    assert.equal(result, false);
  });

  it("20. Return false when input is a string with emojis.", (): void => {
    const result: boolean = numberIs("😊");

    assert.equal(result, false);
  });

  it("21. Return false when input is an empty string.", (): void => {
    const result: boolean = numberIs("");

    assert.equal(result, false);
  });

  it("22. Return false when the string contains accented letters.", (): void => {
    const result: boolean = numberIs("áÁèÈïÏ");

    assert.equal(result, false);
  });

  it("23. Return false when input is a string with spaces.", (): void => {
    const result: boolean = numberIs(" ");

    assert.equal(result, false);
  });
});
