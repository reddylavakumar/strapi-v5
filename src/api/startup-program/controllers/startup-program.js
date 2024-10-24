'use strict';

/**
 * startup-program controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::startup-program.startup-program');
