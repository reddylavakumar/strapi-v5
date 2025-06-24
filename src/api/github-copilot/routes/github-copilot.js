"use strict";

/**
 * github copilot  router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::github-copilot.github-copilot");
