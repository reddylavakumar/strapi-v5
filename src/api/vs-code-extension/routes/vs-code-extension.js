"use strict";

/**
 * vs-code-extension router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::vs-code-extension.vs-code-extension");
