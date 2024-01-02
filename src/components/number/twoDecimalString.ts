import type { TwoDecimalsStringType } from "./twoDecimalString.type";

/**
 * Transform a number to string two decimal places.
 *
 * @param number Number to analyze.
 * @returns String.
 */
export const twoDecimalsString: TwoDecimalsStringType = (number) => {
  return number.toFixed(2);
};
