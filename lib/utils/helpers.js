"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Assert given input is of type array
 *
 * @param {any} input
 * @returns {input is any[]}
 */
exports.isArray = (input) => Array.isArray(input);
/**
 * Remove commas from an input string
 *
 * @param {*} input
 */
exports.removeCommas = (input) => String(input).replace(/,/g, "");
/**
 * Remove non-numeric characters from an input string
 *
 * @param {*} input
 */
exports.removeNonNumeric = (input) => String(input).replace(/[^0-9.]/g, "");
//# sourceMappingURL=helpers.js.map