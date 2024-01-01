"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("./is");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * stringIs test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("stringIs.", () => {
    (0, node_test_1.it)("1. Return false when input is a positive integer.", () => {
        const result = (0, is_1.stringIs)(5);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("2. Return false when input is a negative integer.", () => {
        const result = (0, is_1.stringIs)(-5);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("3. Return false when input is zero.", () => {
        const result = (0, is_1.stringIs)(0);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("4. Return false when input is null.", () => {
        const result = (0, is_1.stringIs)(null);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("5. Return false when input is undefined.", () => {
        const result = (0, is_1.stringIs)(undefined);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("6. Return false when input is a decimal number.", () => {
        const result = (0, is_1.stringIs)(10.9);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("7. Return false for exponential notation input.", () => {
        const result = (0, is_1.stringIs)(1e10);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("8. Return false for Infinity input.", () => {
        const result = (0, is_1.stringIs)(Infinity);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("9. Return false for -Infinity input.", () => {
        const result = (0, is_1.stringIs)(-Infinity);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("10. Return false for NaN input.", () => {
        const result = (0, is_1.stringIs)(NaN);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("11. Return false for true boolean input.", () => {
        const result = (0, is_1.stringIs)(true);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("12. Return false for false boolean input.", () => {
        const result = (0, is_1.stringIs)(false);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("13. Return true for string input.", () => {
        const result = (0, is_1.stringIs)("1234");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("14. Return false for object input.", () => {
        const result = (0, is_1.stringIs)({ number: 1234 });
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("15. Return false for array input.", () => {
        const result = (0, is_1.stringIs)([1234]);
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("16. Return true when input has leading/trailing spaces.", () => {
        const result = (0, is_1.stringIs)(" 5 ");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("17. Return true when input has leading/trailing non-numeric characters.", () => {
        const result = (0, is_1.stringIs)("abc123");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("18. Return true when input has non-numeric characters in between.", () => {
        const result = (0, is_1.stringIs)("1a2");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("19. Return true when input is a string with unicode characters.", () => {
        const result = (0, is_1.stringIs)("世界");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("20. Return true when input is a string with emojis.", () => {
        const result = (0, is_1.stringIs)("😊");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("21. Return true when input is an empty string.", () => {
        const result = (0, is_1.stringIs)("");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("22. Return true when the string contains accented letters.", () => {
        const result = (0, is_1.stringIs)("áÁèÈïÏ");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("23. Return true when input is a string with spaces.", () => {
        const result = (0, is_1.stringIs)(" ");
        node_assert_1.default.equal(result, true);
    });
});
