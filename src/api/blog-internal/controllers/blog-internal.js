'use strict';

/**
 * blog-internal controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog-internal.blog-internal');
