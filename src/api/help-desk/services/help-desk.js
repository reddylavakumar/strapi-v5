'use strict';

/**
 * help-desk service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::help-desk.help-desk');
