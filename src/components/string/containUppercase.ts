import { stringContainUppercaseRegex } from "./containUppercaseRegex";
import type { StringContainUppercaseType } from "./containUppercase.type";

/**
 * Text containing uppercase letters.
 *
 * @param text Text to analyze.
 * @returns Containing uppercase letters.
 */
export const stringContainUppercase: StringContainUppercaseType = (text) => {
  return stringContainUppercaseRegex.test(text);
};
