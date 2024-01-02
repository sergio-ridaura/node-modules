"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoDecimalsString = void 0;
/**
 * Transform a number to string two decimal places.
 *
 * @param number Number to analyze.
 * @returns String.
 */
const twoDecimalsString = (number) => {
    return number.toFixed(2);
};
exports.twoDecimalsString = twoDecimalsString;
