"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringContainSpace = void 0;
const containSpaceRegex_1 = require("./containSpaceRegex");
/**
 * Text containing space.
 *
 * @param text Text to analyze.
 * @returns Containing space.
 */
const stringContainSpace = (text) => {
    return containSpaceRegex_1.stringContainSpaceRegex.test(text);
};
exports.stringContainSpace = stringContainSpace;
