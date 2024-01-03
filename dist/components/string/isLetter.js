"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringIsLetter = void 0;
const isLetterRegex_1 = require("./isLetterRegex");
/**
 * Text with letters.
 *
 * @param text Text to analyze.
 * @returns With letters.
 */
const stringIsLetter = (text) => {
    return isLetterRegex_1.stringIsLetterRegex.test(text);
};
exports.stringIsLetter = stringIsLetter;
