import type { DateCheckType } from "./check.type";

/**
 * Check that the date is correct.
 *
 * @param date Date to check if it is valid.
 * @returns The date is valid.
 */
export const dateCheck: DateCheckType = (date) => {
  if (date === undefined) {
    return false;
  }

  const parsedDate: Date = new Date(date);

  return !isNaN(parsedDate.getTime());
};
