"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const containNumber_1 = require("./containNumber");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * stringContainNumber test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("stringContainNumber.", () => {
    (0, node_test_1.it)("1. Return false when the string contains only letters.", () => {
        const result = (0, containNumber_1.stringContainNumber)("Hello");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("2. Returns false when the string contains only lowercase letters.", () => {
        const result = (0, containNumber_1.stringContainNumber)("abc");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("3. Returns false when the string contains only uppercase letters.", () => {
        const result = (0, containNumber_1.stringContainNumber)("ABC");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("4. Returns false when the string contains only lowercase and uppercase letters.", () => {
        const result = (0, containNumber_1.stringContainNumber)("abcABC");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("5. Return true when the string contains letters and numbers.", () => {
        const result = (0, containNumber_1.stringContainNumber)("abc123");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("6. Return false when the string contains letters and symbols.", () => {
        const result = (0, containNumber_1.stringContainNumber)("abc$%&");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("7. Return false when the string contains letters and non-letter characters.", () => {
        const result = (0, containNumber_1.stringContainNumber)("abc$%&");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("8. Return false when the string is empty.", () => {
        const result = (0, containNumber_1.stringContainNumber)("");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("9. Return true when the string contains only numbers characters.", () => {
        const result = (0, containNumber_1.stringContainNumber)("123");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("10. Return false when the string contains only symbols characters.", () => {
        const result = (0, containNumber_1.stringContainNumber)("$%&");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("11. Return true when the string contains only non-letter characters.", () => {
        const result = (0, containNumber_1.stringContainNumber)("123$%&");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("12. Return false when the string contains whitespace and letters.", () => {
        const result = (0, containNumber_1.stringContainNumber)("abc ABC");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("13. Return true when the string contains whitespace, letters and non-letter characters.", () => {
        const result = (0, containNumber_1.stringContainNumber)("abc 123");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("14. Return true when the string contains whitespace and only non-letter characters.", () => {
        const result = (0, containNumber_1.stringContainNumber)("123 $%&");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("15. Return false when the string contains accented letters.", () => {
        const result = (0, containNumber_1.stringContainNumber)("áÁèÈïÏ");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("16. Return false when input is a string with unicode characters.", () => {
        const result = (0, containNumber_1.stringContainNumber)("世界");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("17. Return false when input is a string with emojis.", () => {
        const result = (0, containNumber_1.stringContainNumber)("😊");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("18. Return false when input is a string with spaces.", () => {
        const result = (0, containNumber_1.stringContainNumber)(" ");
        node_assert_1.default.equal(result, false);
    });
});
