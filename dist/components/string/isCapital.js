"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringIsCapital = void 0;
const isCapitalRegex_1 = require("./isCapitalRegex");
/**
 * The text starts with a capital letter.
 *
 * @param text Text to analyze.
 * @returns Containing capital letters.
 */
const stringIsCapital = (text) => {
    return isCapitalRegex_1.stringIsCapitalRegex.test(text);
};
exports.stringIsCapital = stringIsCapital;
