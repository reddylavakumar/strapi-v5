'use strict';

/**
 * startup-program router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::startup-program.startup-program');
