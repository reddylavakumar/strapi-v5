"use strict";

/**
 * countdown-banner service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::countdown-banner.countdown-banner");
