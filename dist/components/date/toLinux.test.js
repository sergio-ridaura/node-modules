"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toLinux_1 = require("./toLinux");
const check_js_1 = require("./check.js");
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
/**
 * dateToLinux test.
 * @see https://nodejs.org/api/test.html
 */
(0, node_test_1.describe)("dateToLinux", () => {
    const error = "error: invalid date";
    (0, node_test_1.it)("1. Return date when it receives a valid date.", () => {
        const result = (0, toLinux_1.dateToLinux)("2023-09-18 21:21:06");
        node_assert_1.default.equal(result, 1695072066);
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), true);
    });
    (0, node_test_1.it)("2. Returns date when receiving a valid date in linux format.", () => {
        const result = (0, toLinux_1.dateToLinux)(1695074971);
        node_assert_1.default.equal(result, 1695074);
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), true);
    });
    (0, node_test_1.it)("3. Returns error when receiving a valid date in text and linux format.", () => {
        const result = (0, toLinux_1.dateToLinux)("1695074971");
        node_assert_1.default.equal(result, error);
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), false);
    });
    (0, node_test_1.it)("4. Return error when it receives a invalid date.", () => {
        const result = (0, toLinux_1.dateToLinux)("2023-99-18 21:21:06");
        node_assert_1.default.equal(result, error);
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), false);
    });
    (0, node_test_1.it)("5. Returns error when receiving a invalid date in text and linux format.", () => {
        const result = (0, toLinux_1.dateToLinux)("169507497%");
        node_assert_1.default.equal(result, error);
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), false);
    });
    (0, node_test_1.it)("6. Return date when it receives a valid number.", () => {
        const result = (0, toLinux_1.dateToLinux)("2023%");
        node_assert_1.default.equal(result, 1672531200);
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), true);
    });
    (0, node_test_1.it)("7. Return date when it receives a zero number.", () => {
        const result = (0, toLinux_1.dateToLinux)("0");
        node_assert_1.default.equal(result, 946684800);
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), true);
    });
    (0, node_test_1.it)("8. Returns the current date when no data is received.", () => {
        const result = (0, toLinux_1.dateToLinux)();
        node_assert_1.default.equal((0, check_js_1.dateCheck)(result), true);
    });
});
