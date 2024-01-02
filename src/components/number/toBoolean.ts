import type { NumberToBooleanType } from "./toBoolean.type";

/**
 * Number to boolean.
 *
 * @param number Number to analyze.
 * @returns Boolean.
 */
export const numberToBoolean: NumberToBooleanType = (number) => {
  return number !== 0;
};
