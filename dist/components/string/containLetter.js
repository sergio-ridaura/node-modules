"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringContainLetter = void 0;
const containLetterRegex_1 = require("./containLetterRegex");
/**
 * Text containing letters.
 *
 * @param text Text to analyze.
 * @returns Containing letters.
 */
const stringContainLetter = (text) => {
    return containLetterRegex_1.stringContainLetterRegex.test(text);
};
exports.stringContainLetter = stringContainLetter;
