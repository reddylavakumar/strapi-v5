'use strict';

/**
 * vdp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vdp.vdp');
