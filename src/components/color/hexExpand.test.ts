import { colorHexExpand } from "./hexExpand";
import { colorHexCheck } from "./hexCheck";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * colorHexExpand test.
 * @see https://nodejs.org/api/test.html
 */
describe("colorHexExpand.", (): void => {
  const error: string = "error: invalid color";

  it("1. Return a valid 6-digit hexadecimal color when it receives a valid hexadecimal color code.", (): void => {
    const result: string | undefined = colorHexExpand("#FF0");

    assert.equal(result, "#FFFF00");
    assert.equal(colorHexCheck(result), true);
  });

  it("2. Return error when it receives an invalid hexadecimal color without a hash.", (): void => {
    const result: string | undefined = colorHexExpand("FF0000");

    assert.equal(result, error);
    assert.equal(colorHexCheck(result), false);
  });

  it("3. Return error when it receives an invalid 2-digit hexadecimal color.", (): void => {
    const result: string | undefined = colorHexExpand("#FF");

    assert.equal(result, error);
    assert.equal(colorHexCheck(result), false);
  });

  it("4. Return a valid 6-digit hexadecimal color when it receives a valid 3-digit hexadecimal color.", (): void => {
    const result: string | undefined = colorHexExpand("#FF0");

    assert.equal(result, "#FFFF00");
    assert.equal(colorHexCheck(result), true);
  });

  it("5. Return error when it receives an invalid 5-digit hexadecimal color.", (): void => {
    const result: string | undefined = colorHexExpand("#FF000");

    assert.equal(result, error);
    assert.equal(colorHexCheck(result), false);
  });

  it("6. Return a valid 6-digit hexadecimal color when it receives a valid 6-digit hexadecimal color.", (): void => {
    const result: string | undefined = colorHexExpand("#FF0000");

    assert.equal(result, "#FF0000");
    assert.equal(colorHexCheck(result), true);
  });

  it("7. Return error when it receives an invalid 7-digit hexadecimal color.", (): void => {
    const result: string | undefined = colorHexExpand("#FF00000");

    assert.equal(result, error);
    assert.equal(colorHexCheck(result), false);
  });

  it("8. Return a valid 6-digit hexadecimal color when it receives a valid lowercase hexadecimal color code.", (): void => {
    const result: string | undefined = colorHexExpand("#ff0");

    assert.equal(result, "#FFFF00");
    assert.equal(colorHexCheck(result), true);
  });

  it("9. Return a valid 6-digit hexadecimal color when it receives a valid uppercase hexadecimal color code.", (): void => {
    const result: string | undefined = colorHexExpand("#FF0");

    assert.equal(result, "#FFFF00");
    assert.equal(colorHexCheck(result), true);
  });

  it("10. Return a valid 6-digit hexadecimal color when it receives a valid mixed-case hexadecimal color code.", (): void => {
    const result: string | undefined = colorHexExpand("#fF0");

    assert.equal(result, "#FFFF00");
    assert.equal(colorHexCheck(result), true);
  });

  it("11. Return error when it receives an invalid hexadecimal color.", (): void => {
    const result: string | undefined = colorHexExpand("#a2g");

    assert.equal(result, error);
    assert.equal(colorHexCheck(result), false);
  });

  it("12. Return error when it receives an empty string.", (): void => {
    const result: string | undefined = colorHexExpand("");

    assert.equal(result, error);
    assert.equal(colorHexCheck(result), false);
  });
});
