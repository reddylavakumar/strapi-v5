"use strict";

/**
 * student-program service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::student-program.student-program");
