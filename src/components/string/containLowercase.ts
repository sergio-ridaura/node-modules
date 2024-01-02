import { stringContainLowercaseRegex } from "./containLowercaseRegex";
import type { StringContainLowercaseType } from "./containLowercase.type";

/**
 * Text containing lowercase letters.
 *
 * @param text To analyze.
 * @returns Containing lowercase letters.
 */
export const stringContainLowercase: StringContainLowercaseType = (text) => {
  return stringContainLowercaseRegex.test(text);
};
