'use strict';

/**
 * blog-internal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-internal.blog-internal');
