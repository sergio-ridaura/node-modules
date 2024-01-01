"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hexCheck_1 = require("./hexCheck");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * colorHexCheck test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("colorHexCheck.", () => {
    (0, node_test_1.it)("1. Return true when it receives a valid hash hexadecimal color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)("#FF0000");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("2. Return false when it receives an invalid hexadecimal color without a hash.", () => {
        const result = (0, hexCheck_1.colorHexCheck)("FF0000");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("3. Return false when it receives an invalid 2-digit hexadecimal color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)("#FF");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("4. Return true when it receives a valid 3-digit hexadecimal color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)("#FF0");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("5. Return false when it receives an invalid 5-digit hexadecimal color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)("#FF000");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("6. Return true when it receives a valid 6-digit hexadecimal color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)("#FF0000");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("7. Return false when it receives an invalid 7-digit hexadecimal color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)("#FF00000");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("8. Return true when it receives a valid lowercase hexadecimal color code.", () => {
        const result = (0, hexCheck_1.colorHexCheck)("#ff0000");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("9. Return true when it receives a valid uppercase hexadecimal color code.", () => {
        const result = (0, hexCheck_1.colorHexCheck)("#FF0000");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("10. Return true when it receives a valid mixed-case hexadecimal color code.", () => {
        const result = (0, hexCheck_1.colorHexCheck)("#fF0");
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("11. Return false when it receives an invalid hexadecimal color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)("#12345");
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("12. Return false when it receives an empty string.", () => {
        const result = (0, hexCheck_1.colorHexCheck)("");
        node_assert_1.default.equal(result, false);
    });
});
