import colorSimilar from "./similar";
import colorHexCheck from "./hexCheck";
import { expect } from "vitest";
import { testPerfInit, testPerfEnd, type TestPerfInitType } from "@vit/test";

/** Test for colorSimilar function. */
export default function colorSimilarTest(
  color: string,
  hasValid: boolean,
  variation?: number
): string {
  let result: string;

  if (variation === undefined) {
    const performance: TestPerfInitType = testPerfInit();
    result = colorSimilar(color);
    testPerfEnd(performance);
  } else {
    const performance: TestPerfInitType = testPerfInit();
    result = colorSimilar(color, variation);
    testPerfEnd(performance);
  }

  const valid: boolean = colorHexCheck(result);
  expect(valid).toBe(hasValid);

  expect(color).not.toMatch(result);

  return result;
}
