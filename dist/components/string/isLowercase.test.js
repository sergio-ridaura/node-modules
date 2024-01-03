"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isLowercase_1 = require("./isLowercase");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * stringIsLowercase test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("stringIsLowercase.", () => {
    (0, node_test_1.it)("1. Return false when the string contains only letters.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("Hello");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("2. Returns true when the string contains only lowercase letters.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("abc");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("3. Returns false when the string contains only uppercase letters.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("ABC");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("4. Returns false when the string contains only lowercase and uppercase letters.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("abcABC");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("5. Return false when the string contains letters and numbers.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("abc123");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("6. Return false when the string contains letters and symbols.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("abc$%&");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("7. Return false when the string contains letters and non-letter characters.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("abc$%&");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("8. Return false when the string is empty.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("9. Return false when the string contains only numbers characters.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("123");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("10. Return false when the string contains only symbols characters.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("$%&");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("11. Return false when the string contains only non-letter characters.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("123$%&");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("12. Return false when the string contains whitespace and letters.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("abc ABC");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("13. Return false when the string contains whitespace, letters and non-letter characters.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("abc 123");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("14. Return false when the string contains whitespace and only non-letter characters.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("123 $%&");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("15. Return false when the string contains accented letters.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("áÁèÈïÏ");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("16. Return false when input is a string with unicode characters.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("世界");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("17. Return false when input is a string with emojis.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)("😊");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("18. Return false when input is a string with spaces.", () => {
        const result = (0, isLowercase_1.stringIsLowercase)(" ");
        node_assert_1.default.equal(result, false);
    });
});
