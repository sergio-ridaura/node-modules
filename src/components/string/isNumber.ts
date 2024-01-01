import { stringIsNumberRegex } from "./isNumberRegex";
import type { StringIsNumberType } from "./isNumber.type";

/**
 * Text with numbers.
 *
 * @param text Text to analyze.
 * @returns Is text.
 */
export const stringIsNumber: StringIsNumberType = (text) => {
  return stringIsNumberRegex.test(text);
};
