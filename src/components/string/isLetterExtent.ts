import { stringIsLetterExtentRegex } from "./isLetterExtentRegex";
import type { StringIsLetterExtentType } from "./isLetterExtent.type";

/**
 * Text with letters extends.
 *
 * @param text Text to analyze.
 * @returns Containing letters.
 */
export const stringIsLetterExtent: StringIsLetterExtentType = (text) => {
  return stringIsLetterExtentRegex.test(text);
};
