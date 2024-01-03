"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringIsLetterExtent = void 0;
const isLetterExtentRegex_1 = require("./isLetterExtentRegex");
/**
 * Text with letters extends.
 *
 * @param text Text to analyze.
 * @returns Containing letters.
 */
const stringIsLetterExtent = (text) => {
    return isLetterExtentRegex_1.stringIsLetterExtentRegex.test(text);
};
exports.stringIsLetterExtent = stringIsLetterExtent;
