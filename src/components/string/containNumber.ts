import { stringContainNumberRegex } from "./containNumberRegex";
import type { StringContainNumberType } from "./containNumber.type";

/**
 * Text containing numbers.
 *
 * @param text Text to analyze.
 * @returns Containing numbers.
 */
export const stringContainNumber: StringContainNumberType = (text) => {
  return stringContainNumberRegex.test(text);
};
