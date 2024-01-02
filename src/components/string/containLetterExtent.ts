import { stringContainLetterExtentRegex } from "./containLetterExtentRegex";
import type { StringContainLetterExtentType } from "./containLetterExtent.type";

/**
 * Text containing letter extent.
 *
 * @param text To analyze.
 * @returns Containing letter extent.
 */
export const stringContainLetterExtent: StringContainLetterExtentType = (
  text
) => {
  return stringContainLetterExtentRegex.test(text);
};
