"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringIsNumber = void 0;
const isNumberRegex_1 = require("./isNumberRegex");
/**
 * Text with numbers.
 */
const stringIsNumber = (text) => {
    return isNumberRegex_1.stringIsNumberRegex.test(text);
};
exports.stringIsNumber = stringIsNumber;
