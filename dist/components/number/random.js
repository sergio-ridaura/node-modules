"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRandom = void 0;
/**
 * Generate a random number.
 *
 * @param min Smallest number.
 * @param max Largest number.
 * @returns Random number.
 */
const numberRandom = (min = 0, max = min * 2) => {
    if (min > max) {
        return "error: the minimum number is higher than the maximum";
    }
    const random = Math.random() * (max - min + 1) + min;
    return Math.floor(random);
};
exports.numberRandom = numberRandom;
