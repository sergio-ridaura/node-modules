"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringContainUppercase = void 0;
const containUppercaseRegex_1 = require("./containUppercaseRegex");
/**
 * Text containing uppercase letters.
 *
 * @param text Text to analyze.
 * @returns Containing uppercase letters.
 */
const stringContainUppercase = (text) => {
    return containUppercaseRegex_1.stringContainUppercaseRegex.test(text);
};
exports.stringContainUppercase = stringContainUppercase;
