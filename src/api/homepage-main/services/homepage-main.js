"use strict";

/**
 * ide service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::homepage-main.homepage-main");
