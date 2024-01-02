"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mphToKph = void 0;
const twoDecimal_1 = require("../number/twoDecimal");
/**
 * Converts a speed from mph to kph.
 *
 * @param mph Mph to evaluate.
 * @returns Kph.
 */
const mphToKph = (mph) => {
    return (0, twoDecimal_1.twoDecimal)(mph * 1.60934);
};
exports.mphToKph = mphToKph;
