"use strict";

/**
 * vs-code-extension controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::vs-code-extension.vs-code-extension"
);
