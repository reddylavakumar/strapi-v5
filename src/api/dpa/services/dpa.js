"use strict";

/**
 * dpa service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::dpa.dpa");
