"use strict";

/**
 * github copilot controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::github-copilot.github-copilot");
