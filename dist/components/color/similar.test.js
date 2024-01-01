"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const similar_1 = require("./similar");
const hexCheck_1 = require("./hexCheck");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * colorSimilar test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("colorSimilar.", () => {
    (0, node_test_1.it)("1. Return valid hexadecimal color when it receives a valid hash hexadecimal color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("#FF0000"));
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("2. Return error when it receives an invalid hexadecimal color without a hash.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("FF0000"));
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("3. Return error when it receives an invalid 2-digit hexadecimal color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("#FF"));
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("4. Return valid hexadecimal color when it receives a valid 3-digit hexadecimal color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("#FF0"));
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("5. Return error when it receives an invalid 5-digit hexadecimal color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("#FF000"));
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("6. Return valid hexadecimal color when it receives a valid 6-digit hexadecimal color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("#FF0000"));
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("7. Return error when it receives an invalid 7-digit hexadecimal color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("#FF00000"));
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("8. Return valid hexadecimal color when it receives a valid lowercase hexadecimal color code.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("#ff0000"));
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("9. Return valid hexadecimal color when it receives a valid uppercase hexadecimal color code.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("#FF0000"));
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("10. Return valid hexadecimal color when it receives a valid mixed-case hexadecimal color code.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("#fF0"));
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("11. Return error when it receives an invalid hexadecimal color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("#12345"));
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("12. Return error when it receives an empty string in color.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)(""));
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("13. Return a different color code on each call.", () => {
        const color0 = (0, similar_1.colorSimilar)("#FF0000");
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(color0), true);
        const color1 = (0, similar_1.colorSimilar)("#FF0000");
        node_assert_1.default.equal((0, hexCheck_1.colorHexCheck)(color1), true);
        node_assert_1.default.notEqual(color0, color1);
    });
    (0, node_test_1.it)("14. Return valid hexadecimal color when it receives a valid variation.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("#FF0000", 200));
        node_assert_1.default.equal(result, true);
    });
    (0, node_test_1.it)("15. Return error when it receives a variation equal to 0.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("#FF0000", 0));
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("16. Return error when receiving a negative variation.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("#FF0000", -2));
        node_assert_1.default.equal(result, false);
    });
    (0, node_test_1.it)("17. Return a valid hexadecimal color when receiving a variation with decimals.", () => {
        const result = (0, hexCheck_1.colorHexCheck)((0, similar_1.colorSimilar)("#FF0000", 2.2));
        node_assert_1.default.equal(result, true);
    });
});
