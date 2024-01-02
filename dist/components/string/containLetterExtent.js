"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringContainLetterExtent = void 0;
const containLetterExtentRegex_1 = require("./containLetterExtentRegex");
/**
 * Text containing letter extent.
 *
 * @param text To analyze.
 * @returns Containing letter extent.
 */
const stringContainLetterExtent = (text) => {
    return containLetterExtentRegex_1.stringContainLetterExtentRegex.test(text);
};
exports.stringContainLetterExtent = stringContainLetterExtent;
