"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const containLowercase_1 = require("./containLowercase");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * stringContainLowercase test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("stringContainLowercase.", () => {
    (0, node_test_1.it)("1. Return true when the string contains only letters.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("abc");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("2. Returns true when the string contains only lowercase letters.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("abc");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("3. Returns false when the string contains only uppercase letters.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("ABC");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("4. Returns true when the string contains only lowercase and uppercase letters.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("abcABC");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("5. Return true when the string contains letters and numbers.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("abc123");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("6. Return true when the string contains letters and symbols.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("abc$%&");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("7. Return true when the string contains letters and non-letter characters.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("abc$%&");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("8. Return false when the string is empty.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("9. Return false when the string contains only numbers characters.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("123");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("10. Return false when the string contains only symbols characters.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("$%&");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("11. Return false when the string contains only non-letter characters.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("123$%&");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("12. Return true when the string contains whitespace and letters.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("abc ABC");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("13. Return true when the string contains whitespace, letters and non-letter characters.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("abc 123");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("14. Return false when the string contains whitespace and only non-letter characters.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("123 $%&");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("15. Return false when the string contains accented letters.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("áÁèÈïÏ");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("16. Return false when input is a string with unicode characters.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("世界");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("17. Return false when input is a string with emojis.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)("😊");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("18. Return false when input is a string with spaces.", () => {
        const result = (0, containLowercase_1.stringContainLowercase)(" ");
        node_assert_1.default.equal(result, false);
    });
});