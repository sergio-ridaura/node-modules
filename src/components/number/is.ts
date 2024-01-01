import type { NumberIsType } from "./is.type";

/**
 * Is number.
 *
 * @param number Number to analyze.
 * @returns Is number
 */
export const numberIs: NumberIsType = (number) => {
  return typeof number === "number" && !isNaN(number);
};
