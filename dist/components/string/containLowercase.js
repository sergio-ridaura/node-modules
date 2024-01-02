"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringContainLowercase = void 0;
const containLowercaseRegex_1 = require("./containLowercaseRegex");
/**
 * Text containing lowercase letters.
 *
 * @param text To analyze.
 * @returns Containing lowercase letters.
 */
const stringContainLowercase = (text) => {
    return containLowercaseRegex_1.stringContainLowercaseRegex.test(text);
};
exports.stringContainLowercase = stringContainLowercase;
