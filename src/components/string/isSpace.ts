import { stringIsSpaceRegex } from "./isSpaceRegex";
import type { StringIsSpaceType } from "./isSpace.type";

/**
 * Text with spaces.
 *
 * @param text Text to analyze.
 * @returns With spaces.
 */
export const stringIsSpace: StringIsSpaceType = (text) => {
  return stringIsSpaceRegex.test(text);
};
