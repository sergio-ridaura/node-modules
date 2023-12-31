import type { TwoDecimalType } from "./twoDecimal.type";

/**
 * Transform a number to two decimal places.
 *
 * @param number Number to transform.
 * @returns Number with two decimals.
 */
export const twoDecimal: TwoDecimalType = (number) => {
  let result: number = Math.round(number * 100) / 100;

  if (Object.is(result, -0)) {
    result = 0;
  }

  return result;
};
