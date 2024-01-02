import { twoDecimal } from "../number/twoDecimal";
import type { KphToMphType } from "./kphToMph.type";

/**
 * Converts a speed from kph to mph.
 *
 * @param kph Kph to evaluate.
 * @returns Mph.
 */
export const kphToMph: KphToMphType = (kph) => {
  return twoDecimal(kph * 0.621371);
};
