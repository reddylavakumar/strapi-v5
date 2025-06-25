"use strict";

/**
 * vs-code-extensions service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::vs-code-extension.vs-code-extension");
