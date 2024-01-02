import { twoDecimal } from "../number/twoDecimal";
import { KilogramsToPoundsType } from "./kilogramsToPounds.type";

/**
 * Converts a weight in kilograms to pounds.
 *
 * @param kilograms Kilograms to evaluate
 * @returns Pounds.
 */
export const kilogramsToPounds: KilogramsToPoundsType = (kilograms) => {
  return twoDecimal(kilograms * 2.20462);
};
