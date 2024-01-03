import { stringIsCapitalRegex } from "./isCapitalRegex";
import type { StringIsCapitalType } from "./isCapital.type";

/**
 * The text starts with a capital letter.
 *
 * @param text Text to analyze.
 * @returns Containing capital letters.
 */
export const stringIsCapital: StringIsCapitalType = (text) => {
  return stringIsCapitalRegex.test(text);
};
