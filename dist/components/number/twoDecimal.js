"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoDecimal = void 0;
/**
 * Transform a number to two decimal places.
 *
 * @param number Number to transform.
 * @returns Number with two decimals.
 */
const twoDecimal = (number) => {
    let result = Math.round(number * 100) / 100;
    if (Object.is(result, -0)) {
        result = 0;
    }
    return result;
};
exports.twoDecimal = twoDecimal;
