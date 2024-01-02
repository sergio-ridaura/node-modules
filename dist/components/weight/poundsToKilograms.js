"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poundsToKilograms = void 0;
const twoDecimal_1 = require("../number/twoDecimal");
/**
 * Converts a weight in pounds to kilograms.
 *
 * @param pounds Pounds to evaluate
 * @returns Kilograms.
 */
const poundsToKilograms = (pounds) => {
    return (0, twoDecimal_1.twoDecimal)(pounds * 0.453592);
};
exports.poundsToKilograms = poundsToKilograms;
