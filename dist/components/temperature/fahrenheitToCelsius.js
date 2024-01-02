"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fahrenheitToCelsius = void 0;
const twoDecimal_1 = require("../number/twoDecimal");
/**
 * Converts a temperature in fahrenheit to celsius.
 *
 * @param fahrenheit Fahrenheit to evaluate.
 * @returns Celsius.
 */
const fahrenheitToCelsius = (fahrenheit) => {
    return (0, twoDecimal_1.twoDecimal)((fahrenheit - 32) / 1.8);
};
exports.fahrenheitToCelsius = fahrenheitToCelsius;
