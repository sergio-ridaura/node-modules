"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metersToFeet = void 0;
const twoDecimal_1 = require("../number/twoDecimal");
/**
 * Converts a measurement from meters to feet.
 *
 * @param meters Meters to evaluate.
 * @returns Feet.
 */
const metersToFeet = (meters) => {
    return (0, twoDecimal_1.twoDecimal)(meters * 3.28084);
};
exports.metersToFeet = metersToFeet;
