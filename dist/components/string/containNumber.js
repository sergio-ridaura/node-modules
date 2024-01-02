"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringContainNumber = void 0;
const containNumberRegex_1 = require("./containNumberRegex");
/**
 * Text containing numbers.
 *
 * @param text Text to analyze.
 * @returns Containing numbers.
 */
const stringContainNumber = (text) => {
    return containNumberRegex_1.stringContainNumberRegex.test(text);
};
exports.stringContainNumber = stringContainNumber;
