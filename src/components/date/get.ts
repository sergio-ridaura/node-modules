import { dateCheck } from "./check";
import { numberIs } from "../number/is";
import { stringIsNumber } from "../string/isNumber";
import type { DateGetType } from "./get.type";

/**
 * Get date.
 * 
 * @param date No data or date to analyze.
 * @returns Date obtained.
 */
export const dateGet: DateGetType = (date) => {
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

  const result: string[] = [
    String(parsedDate.getFullYear()),
    "-",
    String(parsedDate.getMonth() + 1).padStart(2, "0"),
    "-",
    String(parsedDate.getDate()).padStart(2, "0"),
    " ",
    String(parsedDate.getHours()).padStart(2, "0"),
    ":",
    String(parsedDate.getMinutes()).padStart(2, "0"),
    ":",
    String(parsedDate.getSeconds()).padStart(2, "0"),
  ];

  return result.join("");
};
