import { twoDecimal } from "../number/twoDecimal";
import type { CelsiusToFahrenheitType } from "./celsiusToFahrenheit.type";

/**
 * Converts a temperature in celsius to fahrenheit.
 *
 * @param celsius Celsius to evaluate.
 * @returns Fahrenheit.
 */
export const celsiusToFahrenheit: CelsiusToFahrenheitType = (celsius) => {
  return twoDecimal(celsius * 1.8 + 32);
};
