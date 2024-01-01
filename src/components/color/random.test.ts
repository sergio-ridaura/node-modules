import { colorRandom } from "./random";
import { colorHexCheck } from "./hexCheck";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * colorRandom test.
 * @see https://nodejs.org/api/test.html
 */
describe("colorRandom.", (): void => {
  it("1. Return valid hexadecimal color code.", (): void => {
    const result: boolean = colorHexCheck(colorRandom());

    assert.equal(result, true);
  });

  it("2. Return a different color code on each call.", (): void => {
    const color0: string = colorRandom();
    assert.equal(colorHexCheck(color0), true);

    const color1: string = colorRandom();
    assert.equal(colorHexCheck(color1), true);

    assert.notEqual(color0, color1);
  });
});
