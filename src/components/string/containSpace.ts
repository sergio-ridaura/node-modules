import { stringContainSpaceRegex } from "./containSpaceRegex";
import type { StringContainSpaceType } from "./containSpace.type";

/**
 * Text containing space.
 *
 * @param text Text to analyze.
 * @returns Containing space.
 */
export const stringContainSpace: StringContainSpaceType = (text) => {
  return stringContainSpaceRegex.test(text);
};
