"use strict";

/**
 * visual-studio-code service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::visual-studio-code.visual-studio-code"
);
