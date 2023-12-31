"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idDefault = void 0;
/**
 * Allows you to add `default` id to components or use a new id.
 *
 * @param id Id. If the `default` id is used, the default id is used.
 * @param idDefaultText Default id.
 * @returns Text result of the combination of id.
 */
const idDefault = (id, idDefaultText) => {
    if (id !== undefined && id === "default") {
        return idDefaultText;
    }
    return id;
};
exports.idDefault = idDefault;
