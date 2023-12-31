"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateCheck = void 0;
/**
 * Check that the date is correct.
 *
 * @param date Date to check if it is valid.
 * @returns The date is valid.
 */
const dateCheck = (date) => {
    if (date === undefined) {
        return false;
    }
    const parsedDate = new Date(date);
    return !isNaN(parsedDate.getTime());
};
exports.dateCheck = dateCheck;
