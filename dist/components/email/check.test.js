"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const check_1 = require("./check");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * emailCheck test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("dateCheck", () => {
    (0, node_test_1.it)("1. Return true when it receives a valid email.", () => {
        const result = (0, check_1.emailCheck)("test@example.com");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("2. Return false when it receives an invalid email.", () => {
        const result = (0, check_1.emailCheck)("abcdefg");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("3. Return false when it receives an empty string as an email.", () => {
        const result = (0, check_1.emailCheck)("");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("4. Return false when it receives an email with no @ symbol.", () => {
        const result = (0, check_1.emailCheck)("testexample.com");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("5. Return false when it receives an email with no domain.", () => {
        const result = (0, check_1.emailCheck)("test@example");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("6. Return false when it receives an email with no username.", () => {
        const result = (0, check_1.emailCheck)("@example");
        node_assert_1.default.equal(result, false);
    });
});
