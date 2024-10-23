'use strict';

/**
 * startup-program service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::startup-program.startup-program');
