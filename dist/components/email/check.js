"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailCheck = void 0;
const regex_1 = require("./regex");
/**
 * Check that the email is in a correct format.
 *
 * @param email Email to check if it is valid.
 * @returns The email is valid.
 */
const emailCheck = (email) => {
    return regex_1.emailRegex.test(email);
};
exports.emailCheck = emailCheck;
