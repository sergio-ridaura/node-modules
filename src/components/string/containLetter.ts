import { stringContainLetterRegex } from "./containLetterRegex";
import type { StringContainLetterType } from "./containLetter.type";

/**
 * Text containing letters.
 *
 * @param text Text to analyze.
 * @returns Containing letters.
 */
export const stringContainLetter: StringContainLetterType = (text) => {
  return stringContainLetterRegex.test(text);
};
