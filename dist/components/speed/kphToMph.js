"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kphToMph = void 0;
const twoDecimal_1 = require("../number/twoDecimal");
/**
 * Converts a speed from kph to mph.
 *
 * @param kph Kph to evaluate.
 * @returns Mph.
 */
const kphToMph = (kph) => {
    return (0, twoDecimal_1.twoDecimal)(kph * 0.621371);
};
exports.kphToMph = kphToMph;
