"use strict";

/**
 * cursor service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::cursor.cursor");
