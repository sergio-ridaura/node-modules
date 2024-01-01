"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hexExpand_1 = require("./hexExpand");
const hexCheck_1 = require("./hexCheck");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * colorHexExpand test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("colorHexExpand.", () => {
    const error = "error: invalid color";
    (0, node_test_1.it)("1. Return a valid 6-digit hexadecimal color when it receives a valid hexadecimal color code.", () => {
        const result = (0, hexExpand_1.colorHexExpand)("#FF0");
        node_assert_1.default.equal(result, "#FFFF00");
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(result), true);
    });
    (0, node_test_1.it)("2. Return error when it receives an invalid hexadecimal color without a hash.", () => {
        const result = (0, hexExpand_1.colorHexExpand)("FF0000");
        node_assert_1.default.equal(result, error);
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(result), false);
    });
    (0, node_test_1.it)("3. Return error when it receives an invalid 2-digit hexadecimal color.", () => {
        const result = (0, hexExpand_1.colorHexExpand)("#FF");
        node_assert_1.default.equal(result, error);
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(result), false);
    });
    (0, node_test_1.it)("4. Return a valid 6-digit hexadecimal color when it receives a valid 3-digit hexadecimal color.", () => {
        const result = (0, hexExpand_1.colorHexExpand)("#FF0");
        node_assert_1.default.equal(result, "#FFFF00");
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(result), true);
    });
    (0, node_test_1.it)("5. Return error when it receives an invalid 5-digit hexadecimal color.", () => {
        const result = (0, hexExpand_1.colorHexExpand)("#FF000");
        node_assert_1.default.equal(result, error);
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(result), false);
    });
    (0, node_test_1.it)("6. Return a valid 6-digit hexadecimal color when it receives a valid 6-digit hexadecimal color.", () => {
        const result = (0, hexExpand_1.colorHexExpand)("#FF0000");
        node_assert_1.default.equal(result, "#FF0000");
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(result), true);
    });
    (0, node_test_1.it)("7. Return error when it receives an invalid 7-digit hexadecimal color.", () => {
        const result = (0, hexExpand_1.colorHexExpand)("#FF00000");
        node_assert_1.default.equal(result, error);
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(result), false);
    });
    (0, node_test_1.it)("8. Return a valid 6-digit hexadecimal color when it receives a valid lowercase hexadecimal color code.", () => {
        const result = (0, hexExpand_1.colorHexExpand)("#ff0");
        node_assert_1.default.equal(result, "#FFFF00");
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(result), true);
    });
    (0, node_test_1.it)("9. Return a valid 6-digit hexadecimal color when it receives a valid uppercase hexadecimal color code.", () => {
        const result = (0, hexExpand_1.colorHexExpand)("#FF0");
        node_assert_1.default.equal(result, "#FFFF00");
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(result), true);
    });
    (0, node_test_1.it)("10. Return a valid 6-digit hexadecimal color when it receives a valid mixed-case hexadecimal color code.", () => {
        const result = (0, hexExpand_1.colorHexExpand)("#fF0");
        node_assert_1.default.equal(result, "#FFFF00");
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(result), true);
    });
    (0, node_test_1.it)("11. Return error when it receives an invalid hexadecimal color.", () => {
        const result = (0, hexExpand_1.colorHexExpand)("#a2g");
        node_assert_1.default.equal(result, error);
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(result), false);
    });
    (0, node_test_1.it)("12. Return error when it receives an empty string.", () => {
        const result = (0, hexExpand_1.colorHexExpand)("");
        node_assert_1.default.equal(result, error);
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(result), false);
    });
});
