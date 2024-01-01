import { twoDecimal } from "../number/twoDecimal";
import { MetersToFeetType } from "./metersToFeet.type";

/**
 * Converts a measurement from meters to feet.
 *
 * @param meters Meters to evaluate.
 * @returns Feet.
 */
export const metersToFeet: MetersToFeetType = (meters) => {
  return twoDecimal(meters * 3.28084);
};
