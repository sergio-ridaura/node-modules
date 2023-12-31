"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberIs = void 0;
/**
 * Is number.
 *
 * @param number Data to analyze.
 * @returns Is number
 */
const numberIs = (number) => {
    return typeof number === "number" && !isNaN(number);
};
exports.numberIs = numberIs;
