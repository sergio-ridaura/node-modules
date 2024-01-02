import type { NumberIsPairType } from "./isPair.type";

/**
 * Number is pair.
 *
 * @param number Number to analyze.
 * @returns Is pair.
 */
export const numberIsPair: NumberIsPairType = (number) => {
  return number % 2 === 0;
};
