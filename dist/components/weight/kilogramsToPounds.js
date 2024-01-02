"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kilogramsToPounds = void 0;
const twoDecimal_1 = require("../number/twoDecimal");
/**
 * Converts a weight in kilograms to pounds.
 *
 * @param kilograms Kilograms to evaluate
 * @returns Pounds.
 */
const kilogramsToPounds = (kilograms) => {
    return (0, twoDecimal_1.twoDecimal)(kilograms * 2.20462);
};
exports.kilogramsToPounds = kilogramsToPounds;
