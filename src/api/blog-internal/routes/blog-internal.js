'use strict';

/**
 * blog-internal router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::blog-internal.blog-internal');
