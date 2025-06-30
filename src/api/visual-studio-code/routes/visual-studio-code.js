"use strict";

/**
 * visual-studio-code router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::visual-studio-code.visual-studio-code");
