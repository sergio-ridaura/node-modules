import { dateCheck } from "./check";
import { numberIs } from "../number/is";
import { stringIsNumber } from "../string/isNumber";
import type { DateGetYearType } from "./getYear.type";

/**
 * Get Year.
 *
 * @param date No data or date to analyze.
 * @returns Year obtained.
 */
export const dateGetYear: DateGetYearType = (date) => {
  let parsedDate: string | number | Date;

  if (date === undefined) {
    parsedDate = new Date();
  } else {
    if (stringIsNumber(`${date}`)) {
      date = parseFloat(`${date}`);
    }

    if (!dateCheck(date)) {
      return "error: invalid date";
    }

    if (numberIs(date)) {
      parsedDate = new Date(Number(date) * 1000);
    } else {
      parsedDate = new Date(date);
    }
  }

  return String(parsedDate.getFullYear());
};
