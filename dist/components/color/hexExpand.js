"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorHexExpand = void 0;
const hexCheck_1 = require("./hexCheck");
/**
 * Return a 6-digit hexadecimal created from a 3-digit hexadecimal color.
 *
 * @param color Color to examine.
 * @returns 6 digit hexadecimal color.
 */
const colorHexExpand = (color) => {
    if (!(0, hexCheck_1.colorHexCheck)(color)) {
        return "error: invalid color";
    }
    color = color.toUpperCase();
    if (color.length === 7) {
        return color;
    }
    const results = [
        "#",
        color[1],
        color[1],
        color[2],
        color[2],
        color[3],
        color[3],
    ];
    return results.join("");
};
exports.colorHexExpand = colorHexExpand;
