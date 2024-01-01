import { colorBrightnessRandom } from "./randomBrightness";
import { colorHexCheck } from "./hexCheck";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * colorBrightnessRandom test.
 * @see https://nodejs.org/api/test.html
 */
describe("colorBrightnessRandom.", (): void => {
  it("1. Return valid hexadecimal color when it receives a valid hash hexadecimal color.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom("#FF0000"));

    assert.equal(result, true);
  });

  it("2. Return error when it receives an invalid hexadecimal color without a hash.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom("FF0000"));

    assert.equal(result, false);
  });

  it("3. Return error when it receives an invalid 2-digit hexadecimal color.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom("#FF"));

    assert.equal(result, false);
  });

  it("4. Return valid hexadecimal color when it receives a valid 3-digit hexadecimal color.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom("#FF0"));

    assert.equal(result, true);
  });

  it("5. Return error when it receives an invalid 5-digit hexadecimal color.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom("#FF000"));

    assert.equal(result, false);
  });

  it("6. Return valid hexadecimal color when it receives a valid 6-digit hexadecimal color.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom("#FF0000"));

    assert.equal(result, true);
  });

  it("7. Return error when it receives an invalid 7-digit hexadecimal color.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom("#FF00000"));

    assert.equal(result, false);
  });

  it("8. Return valid hexadecimal color when it receives a valid lowercase hexadecimal color code.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom("#ff0000"));

    assert.equal(result, true);
  });

  it("9. Return valid hexadecimal color when it receives a valid uppercase hexadecimal color code.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom("#FF0000"));

    assert.equal(result, true);
  });

  it("10. Return valid hexadecimal color when it receives a valid mixed-case hexadecimal color code.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom("#fF0"));

    assert.equal(result, true);
  });

  it("11. Return error when it receives an invalid hexadecimal color.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom("#12345"));

    assert.equal(result, false);
  });

  it("12. Return error when it receives an empty string in color.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom(""));

    assert.equal(result, false);
  });

  it("13. Return a different color code on each call.", (): void => {
    const color0: string = colorBrightnessRandom("#FF0000");
    assert.equal(colorHexCheck(color0), true);

    const color1: string = colorBrightnessRandom("#FF0000");
    assert.equal(colorHexCheck(color1), true);

    assert.notEqual(color0, color1);
  });

  it("14. Return valid hexadecimal color when it receives a valid variation.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom("#FF0000"));

    assert.equal(result, true);
  });

  it("15. Return error when it receives a variation equal to 0.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom("#FF0000", 0));

    assert.equal(result, false);
  });

  it("16. Return error when receiving a negative variation.", (): void => {
    const result: boolean = colorHexCheck(colorBrightnessRandom("#FF0000", -2));

    assert.equal(result, true);
  });

  it("17. Return valid hexadecimal when receiving a variation with decimals.", (): void => {
    const result: boolean = colorHexCheck(
      colorBrightnessRandom("#FF0000", 22.2)
    );

    assert.equal(result, true);
  });
});
