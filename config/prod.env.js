'use strict'
module.exports = {
  NODE_ENV: '"production"',
  WEBSITE_LOCALE: `"${process.env.WEBSITE_LOCALE || 'en'}"`,
  GA_ID: `"${process.env.GA_ID || 'UA-110928879-1'}"`,
}
