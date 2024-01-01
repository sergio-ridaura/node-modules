import colorSimilarTest from "./similar.utils";
import { describe, it, expect } from "vitest";
import { testClean, testLog } from "@vit/test";

testClean();

describe("colorSimilar. Generates a random and similar hexadecimal color from another color.", (): void => {
  it("1. Return valid hexadecimal color when it receives a valid hash hexadecimal color.", (): void => {
    const color: string = colorSimilarTest("#FF0000", true);
    testLog({ color });
  });

  it("2. Return error when it receives an invalid hexadecimal color without a hash.", (): void => {
    const color: string = colorSimilarTest("FF0000", false);
    testLog({ color });
  });

  it("3. Return error when it receives an invalid 2-digit hexadecimal color.", (): void => {
    const color: string = colorSimilarTest("#FF", false);
    testLog({ color });
  });

  it("4. Return valid hexadecimal color when it receives a valid 3-digit hexadecimal color.", (): void => {
    const color: string = colorSimilarTest("#FF0", true);
    testLog({ color });
  });

  it("5. Return error when it receives an invalid 5-digit hexadecimal color.", (): void => {
    const color: string = colorSimilarTest("#FF000", false);
    testLog({ color });
  });

  it("6. Return valid hexadecimal color when it receives a valid 6-digit hexadecimal color.", (): void => {
    const color: string = colorSimilarTest("#FF0000", true);
    testLog({ color });
  });

  it("7. Return error when it receives an invalid 7-digit hexadecimal color.", (): void => {
    const color: string = colorSimilarTest("#FF00000", false);
    testLog({ color });
  });

  it("8. Return valid hexadecimal color when it receives a valid lowercase hexadecimal color code.", (): void => {
    const color: string = colorSimilarTest("#ff0000", true);
    testLog({ color });
  });

  it("9. Return valid hexadecimal color when it receives a valid uppercase hexadecimal color code.", (): void => {
    const color: string = colorSimilarTest("#FF0000", true);
    testLog({ color });
  });

  it("10. Return valid hexadecimal color when it receives a valid mixed-case hexadecimal color code.", (): void => {
    const color: string = colorSimilarTest("#fF0", true);
    testLog({ color });
  });

  it("11. Return error when it receives an invalid hexadecimal color.", (): void => {
    const color: string = colorSimilarTest("#12345", false);
    testLog({ color });
  });

  it("12. Return error when it receives an empty string in color.", (): void => {
    const color: string = colorSimilarTest("", false);
    testLog({ color });
  });

  it("13. Return a different color code on each call.", (): void => {
    const color0: string = colorSimilarTest("#FF0000", true);
    const color1: string = colorSimilarTest("#FF0000", true);
    testLog({ color0, color1 });

    expect(color0).not.toMatch(color1);
  });

  it("14. Return valid hexadecimal color when it receives a valid variation.", (): void => {
    const color: string = colorSimilarTest("#FF0000", true, 200);
    testLog({ color });
  });

  it("15. Return error when it receives a variation equal to 0.", (): void => {
    const color: string = colorSimilarTest("#FF0000", false, 0);
    testLog({ color });
  });

  it("16. Return error when receiving a negative variation.", (): void => {
    const color: string = colorSimilarTest("#FF0000", false, -2);
    testLog({ color });
  });

  it("17. Return a valid hexadecimal color when receiving a variation with decimals.", (): void => {
    const color: string = colorSimilarTest("#FF0000", true, 2.2);
    testLog({ color });
  });
});
