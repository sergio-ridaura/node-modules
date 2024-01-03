import { stringIsLetterRegex } from "./isLetterRegex";
import type { StringIsLetterType } from "./isLetter.type";

/**
 * Text with letters.
 *
 * @param text Text to analyze.
 * @returns With letters.
 */
export const stringIsLetter: StringIsLetterType = (text) => {
  return stringIsLetterRegex.test(text);
};
