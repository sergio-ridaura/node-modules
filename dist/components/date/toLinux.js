"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToLinux = void 0;
const check_1 = require("./check");
/**
 * Convert a date to linux format.
 *
 * @param date Date to analyze.
 * @returns Date to Linux.
 */
const dateToLinux = (date) => {
    let parsedDate;
    if (date === undefined) {
        parsedDate = new Date();
    }
    else {
        if (!(0, check_1.dateCheck)(date)) {
            return "error: invalid date";
        }
        parsedDate = new Date(date);
    }
    return Math.floor(parsedDate.getTime() / 1000);
};
exports.dateToLinux = dateToLinux;
