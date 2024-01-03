"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringIsLowercase = void 0;
const isLowercaseRegex_1 = require("./isLowercaseRegex");
/**
 * Text with lowercase letters.
 *
 * @param text Text to analyze.
 * @returns Containing lowercase.
 */
const stringIsLowercase = (text) => {
    return isLowercaseRegex_1.stringIsLowercaseRegex.test(text);
};
exports.stringIsLowercase = stringIsLowercase;
