import { colorHexCheck } from "./hexCheck";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * colorHexCheck test.
 * @see https://nodejs.org/api/test.html
 */
describe("colorHexCheck.", (): void => {
  it("1. Return true when it receives a valid hash hexadecimal color.", (): void => {
    const result: boolean = colorHexCheck("#FF0000");

    assert.equal(result, true);
  });

  it("2. Return false when it receives an invalid hexadecimal color without a hash.", (): void => {
    const result: boolean = colorHexCheck("FF0000");

    assert.equal(result, false);
  });

  it("3. Return false when it receives an invalid 2-digit hexadecimal color.", (): void => {
    const result: boolean = colorHexCheck("#FF");

    assert.equal(result, false);
  });

  it("4. Return true when it receives a valid 3-digit hexadecimal color.", (): void => {
    const result: boolean = colorHexCheck("#FF0");

    assert.equal(result, true);
  });

  it("5. Return false when it receives an invalid 5-digit hexadecimal color.", (): void => {
    const result: boolean = colorHexCheck("#FF000");

    assert.equal(result, false);
  });

  it("6. Return true when it receives a valid 6-digit hexadecimal color.", (): void => {
    const result: boolean = colorHexCheck("#FF0000");

    assert.equal(result, true);
  });

  it("7. Return false when it receives an invalid 7-digit hexadecimal color.", (): void => {
    const result: boolean = colorHexCheck("#FF00000");

    assert.equal(result, false);
  });

  it("8. Return true when it receives a valid lowercase hexadecimal color code.", (): void => {
    const result: boolean = colorHexCheck("#ff0000");

    assert.equal(result, true);
  });

  it("9. Return true when it receives a valid uppercase hexadecimal color code.", (): void => {
    const result: boolean = colorHexCheck("#FF0000");

    assert.equal(result, true);
  });

  it("10. Return true when it receives a valid mixed-case hexadecimal color code.", (): void => {
    const result: boolean = colorHexCheck("#fF0");

    assert.equal(result, true);
  });

  it("11. Return false when it receives an invalid hexadecimal color.", (): void => {
    const result: boolean = colorHexCheck("#12345");

    assert.equal(result, false);
  });

  it("12. Return false when it receives an empty string.", (): void => {
    const result: boolean = colorHexCheck("");

    assert.equal(result, false);
  });
});
