"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isUppercase_utils_1 = __importDefault(require("./isUppercase.utils"));
const vitest_1 = require("vitest");
const test_1 = require("@vit/test");
(0, test_1.testClean)();
(0, vitest_1.describe)("stringIsUppercase. Text with uppercase letters.", () => {
    (0, vitest_1.it)("1. Return false when the string contains only letters.", () => {
        (0, isUppercase_utils_1.default)("abc", false);
    });
    (0, vitest_1.it)("2. Returns false when the string contains only lowercase letters.", () => {
        (0, isUppercase_utils_1.default)("abc", false);
    });
    (0, vitest_1.it)("3. Returns true when the string contains only uppercase letters.", () => {
        (0, isUppercase_utils_1.default)("ABC", true);
    });
    (0, vitest_1.it)("4. Returns false when the string contains only lowercase and uppercase letters.", () => {
        (0, isUppercase_utils_1.default)("abcABC", false);
    });
    (0, vitest_1.it)("5. Return false when the string contains letters and numbers.", () => {
        (0, isUppercase_utils_1.default)("abc123", false);
    });
    (0, vitest_1.it)("6. Return false when the string contains letters and symbols.", () => {
        (0, isUppercase_utils_1.default)("abc$%&", false);
    });
    (0, vitest_1.it)("7. Return false when the string contains letters and non-letter characters.", () => {
        (0, isUppercase_utils_1.default)("abc$%&", false);
    });
    (0, vitest_1.it)("8. Return false when the string is empty.", () => {
        (0, isUppercase_utils_1.default)("", false);
    });
    (0, vitest_1.it)("9. Return false when the string contains only numbers characters.", () => {
        (0, isUppercase_utils_1.default)("123", false);
    });
    (0, vitest_1.it)("10. Return false when the string contains only symbols characters.", () => {
        (0, isUppercase_utils_1.default)("$%&", false);
    });
    (0, vitest_1.it)("11. Return false when the string contains only non-letter characters.", () => {
        (0, isUppercase_utils_1.default)("123$%&", false);
    });
    (0, vitest_1.it)("12. Return false when the string contains whitespace and letters.", () => {
        (0, isUppercase_utils_1.default)("abc ABC", false);
    });
    (0, vitest_1.it)("13. Return false when the string contains whitespace, letters and non-letter characters.", () => {
        (0, isUppercase_utils_1.default)("abc 123", false);
    });
    (0, vitest_1.it)("14. Return false when the string contains whitespace and only non-letter characters.", () => {
        (0, isUppercase_utils_1.default)("123 $%&", false);
    });
    (0, vitest_1.it)("15. Return false when the string contains accented letters.", () => {
        (0, isUppercase_utils_1.default)("áÁèÈïÏ", false);
    });
    (0, vitest_1.it)("16. Return false when input is a string with unicode characters.", () => {
        (0, isUppercase_utils_1.default)("世界", false);
    });
    (0, vitest_1.it)("17. Return false when input is a string with emojis.", () => {
        (0, isUppercase_utils_1.default)("😊", false);
    });
    (0, vitest_1.it)("18. Return false when input is a string with spaces.", () => {
        (0, isUppercase_utils_1.default)(" ", false);
    });
});
