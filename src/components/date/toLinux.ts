import { dateCheck } from "./check";
import type { DateToLinuxType } from "./toLinux.type";

/**
 * Convert a date to linux format.
 *
 * @param date Date to analyze.
 * @returns Date to Linux.
 */
export const dateToLinux: DateToLinuxType = (date) => {
  let parsedDate: string | number | Date;

  if (date === undefined) {
    parsedDate = new Date();
  } else {
    if (!dateCheck(date)) {
      return "error: invalid date";
    }

    parsedDate = new Date(date);
  }

  return Math.floor(parsedDate.getTime() / 1000);
};
