"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.celsiusToFahrenheit = void 0;
const twoDecimal_1 = require("../number/twoDecimal");
/**
 * Converts a temperature in celsius to fahrenheit.
 *
 * @param celsius Celsius to evaluate.
 * @returns Fahrenheit.
 */
const celsiusToFahrenheit = (celsius) => {
    return (0, twoDecimal_1.twoDecimal)(celsius * 1.8 + 32);
};
exports.celsiusToFahrenheit = celsiusToFahrenheit;
