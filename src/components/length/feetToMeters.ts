import { twoDecimal } from "../number/twoDecimal";
import type { FeetToMetersType } from "./feetToMeters.type";

/**
 * Converts a measurement from feet to meters.
 *
 * @param feet Feet to evaluate.
 * @returns Meters.
 */
export const feetToMeters: FeetToMetersType = (feet) => {
  return twoDecimal(feet * 0.3048);
};
