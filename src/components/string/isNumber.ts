import { stringIsNumberRegex } from "./isNumberRegex";
import type { StringIsNumberType } from "./isNumber.type";

/**
 * Text with numbers.
 */
export const stringIsNumber: StringIsNumberType = (text) => {
  return stringIsNumberRegex.test(text);
};
