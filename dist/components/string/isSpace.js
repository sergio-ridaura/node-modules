"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringIsSpace = void 0;
const isSpaceRegex_1 = require("./isSpaceRegex");
/**
 * Text with spaces.
 *
 * @param text Text to analyze.
 * @returns With spaces.
 */
const stringIsSpace = (text) => {
    return isSpaceRegex_1.stringIsSpaceRegex.test(text);
};
exports.stringIsSpace = stringIsSpace;
