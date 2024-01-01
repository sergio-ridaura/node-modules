import { NumberIsPositiveType } from "./isPositive.type";

/**
 * Number is positive.
 *
 * @param number Number to analyze.
 * @returns Is positive.
 */
export const numberIsPositive: NumberIsPositiveType = (number) => {
  if (number > 0) {
    return true;
  } else if (number < 0) {
    return false;
  }
  return null;
};
