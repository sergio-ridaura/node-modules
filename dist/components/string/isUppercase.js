"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isUppercaseRegex_1 = __importDefault(require("./isUppercaseRegex"));
/** Text with uppercase letters. */
function stringIsUppercase(text) {
    return isUppercaseRegex_1.default.test(text);
}
exports.default = stringIsUppercase;
