"use strict";

/**
 * github copilot  service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::github-copilot.github-copilot");
