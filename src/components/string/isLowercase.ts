import { stringIsLowercaseRegex } from "./isLowercaseRegex";
import type { StringIsLowercaseType } from "./isLowercase.type";

/**
 * Text with lowercase letters.
 *
 * @param text Text to analyze.
 * @returns Containing lowercase.
 */
export const stringIsLowercase: StringIsLowercaseType = (text) => {
  return stringIsLowercaseRegex.test(text);
};
