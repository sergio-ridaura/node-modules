/**
 * Start of the application for the development.
 */
import { gistsGet } from "node-github-ridaura";

// console.log(classDefault("default", "world!", "hello"));
(async () => {
  console.log(await gistsGet("sergio-ridaura"));
})();
