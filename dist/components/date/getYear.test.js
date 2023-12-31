"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getYear_1 = require("./getYear");
const check_js_1 = require("./check.js");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * dateYearGet test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("dateYearGet.", () => {
    const error = "error: invalid date";
    (0, node_test_1.it)("1. Return date when it receives a valid date.", () => {
        const result = (0, getYear_1.dateGetYear)("2023-09-18 21:21:06");
        node_assert_1.default.equal(result, "2023");
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), true);
    });
    (0, node_test_1.it)("2. Returns date when receiving a valid date in linux format.", () => {
        const result = (0, getYear_1.dateGetYear)(1695074971);
        node_assert_1.default.equal(result, "2023");
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), true);
    });
    (0, node_test_1.it)("3. Returns date when receiving a valid date in text and linux format.", () => {
        const result = (0, getYear_1.dateGetYear)("1695074971");
        node_assert_1.default.equal(result, "2023");
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), true);
    });
    (0, node_test_1.it)("4. Return error when it receives a invalid date.", () => {
        const result = (0, getYear_1.dateGetYear)("2023-99-18 21:21:06");
        node_assert_1.default.equal(result, error);
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), false);
    });
    (0, node_test_1.it)("5. Returns error when receiving a invalid date in text and linux format.", () => {
        const result = (0, getYear_1.dateGetYear)("169507497%");
        node_assert_1.default.equal(result, error);
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), false);
    });
    (0, node_test_1.it)("6. Return date when it receives a valid number.", () => {
        const result = (0, getYear_1.dateGetYear)("2023");
        node_assert_1.default.equal(result, "1970");
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), true);
    });
    (0, node_test_1.it)("7. Return date when it receives a zero number.", () => {
        const result = (0, getYear_1.dateGetYear)("0");
        node_assert_1.default.equal(result, "1970");
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), true);
    });
    (0, node_test_1.it)("8. Returns the current date when no data is received.", () => {
        const result = (0, getYear_1.dateGetYear)();
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), true);
    });
});
