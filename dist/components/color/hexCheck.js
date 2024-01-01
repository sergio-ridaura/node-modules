"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorHexCheck = void 0;
const hexRegex_1 = require("./hexRegex");
/**
 * Check that the hexadecimal color is correct.
 *
 * @param color Color to evaluate.
 * @returns It is hexadecimal.
 */
const colorHexCheck = (color) => {
    return hexRegex_1.colorHexRegex.test(color);
};
exports.colorHexCheck = colorHexCheck;
