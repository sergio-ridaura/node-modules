"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberIsPositive = void 0;
/**
 * Number is positive.
 *
 * @param number Number to analyze.
 * @returns Is positive.
 */
const numberIsPositive = (number) => {
    if (number > 0) {
        return true;
    }
    else if (number < 0) {
        return false;
    }
    return null;
};
exports.numberIsPositive = numberIsPositive;
