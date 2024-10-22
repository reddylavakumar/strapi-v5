module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '13mb',
      formLimit: '10mb',
      textLimit: '256kb',
      encoding: 'utf-8',
    },
  },
];
