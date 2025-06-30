"use strict";

/**
 * visual-studio-code controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::visual-studio-code.visual-studio-code"
);
