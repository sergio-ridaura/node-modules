"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringIsSymbol = void 0;
const isSymbolRegex_1 = require("./isSymbolRegex");
/**
 * Text with symbols.
 *
 * @param text Text to analyze.
 * @returns With symbols.
 */
const stringIsSymbol = (text) => {
    return isSymbolRegex_1.stringIsSymbolRegex.test(text);
};
exports.stringIsSymbol = stringIsSymbol;
