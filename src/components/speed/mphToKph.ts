import { twoDecimal } from "../number/twoDecimal";
import type { MphToKphType } from "./mphToKph.type";

/**
 * Converts a speed from mph to kph.
 *
 * @param mph Mph to evaluate.
 * @returns Kph.
 */
export const mphToKph: MphToKphType = (mph) => {
  return twoDecimal(mph * 1.60934);
};
