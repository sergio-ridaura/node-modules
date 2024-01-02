import { twoDecimal } from "../number/twoDecimal";
import { PoundsToKilogramsType } from "./poundsToKilograms.type";

/**
 * Converts a weight in pounds to kilograms.
 *
 * @param pounds Pounds to evaluate
 * @returns Kilograms.
 */
export const poundsToKilograms: PoundsToKilogramsType = (pounds) => {
  return twoDecimal(pounds * 0.453592);
};
