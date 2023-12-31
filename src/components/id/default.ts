import type { IdDefaultType } from "./default.type";

/**
 * Allows you to add `default` id to components or use a new id.
 *
 * @param id Id. If the `default` id is used, the default id is used.
 * @param idDefaultText Default id.
 * @returns Text result of the combination of id.
 */
export const idDefault: IdDefaultType = (id, idDefaultText) => {
  if (id !== undefined && id === "default") {
    return idDefaultText;
  }
  return id;
};
