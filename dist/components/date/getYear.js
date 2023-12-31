"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateGetYear = void 0;
const check_1 = require("./check");
const is_1 = require("../number/is");
const isNumber_1 = require("../string/isNumber");
/**
 * Get Year.
 *
 * @param date No data or date to analyze.
 * @returns Year obtained.
 */
const dateGetYear = (date) => {
    let parsedDate;
    if (date === undefined) {
        parsedDate = new Date();
    }
    else {
        if ((0, isNumber_1.stringIsNumber)(`${date}`)) {
            date = parseFloat(`${date}`);
        }
        if (!(0, check_1.dateCheck)(date)) {
            return "error: invalid date";
        }
        if ((0, is_1.numberIs)(date)) {
            parsedDate = new Date(Number(date) * 1000);
        }
        else {
            parsedDate = new Date(date);
        }
    }
    return String(parsedDate.getFullYear());
};
exports.dateGetYear = dateGetYear;
