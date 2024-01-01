import type { NumberRandomType } from "./random.type";

/**
 * Generate a random number.
 *
 * @param min Smallest number.
 * @param max Largest number.
 * @returns Random number.
 */
export const numberRandom: NumberRandomType = (min = 0, max = min * 2) => {
  if (min > max) {
    return "error: the minimum number is higher than the maximum";
  }

  const random: number = Math.random() * (max - min + 1) + min;

  return Math.floor(random);
};
