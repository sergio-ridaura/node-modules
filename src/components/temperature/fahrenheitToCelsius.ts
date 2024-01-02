import { twoDecimal } from "../number/twoDecimal";
import type { FahrenheitToCelsiusType } from "./fahrenheitToCelsius.type";

/**
 * Converts a temperature in fahrenheit to celsius.
 *
 * @param fahrenheit Fahrenheit to evaluate.
 * @returns Celsius.
 */
export const fahrenheitToCelsius: FahrenheitToCelsiusType = (fahrenheit) => {
  return twoDecimal((fahrenheit - 32) / 1.8);
};
