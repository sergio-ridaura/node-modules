"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorRandom = void 0;
const random_1 = require("../number/random");
/**
 * Generates a random hexadecimal color.
 *
 * @returns Random color.
 */
const colorRandom = () => {
    const colorHex = [
        "#",
        (0, random_1.numberRandom)(1, 255).toString(16).padStart(2, "0").toUpperCase(),
        (0, random_1.numberRandom)(1, 255).toString(16).padStart(2, "0").toUpperCase(),
        (0, random_1.numberRandom)(1, 255).toString(16).padStart(2, "0").toUpperCase(),
    ];
    return colorHex.join("");
};
exports.colorRandom = colorRandom;
