"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feetToMeters = void 0;
const twoDecimal_1 = require("../number/twoDecimal");
/**
 * Converts a measurement from feet to meters.
 *
 * @param feet Feet to evaluate.
 * @returns Meters.
 */
const feetToMeters = (feet) => {
    return (0, twoDecimal_1.twoDecimal)(feet * 0.3048);
};
exports.feetToMeters = feetToMeters;
