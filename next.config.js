const webpack = require('webpack')

if (process.env.NODE_ENV !== 'production') {
  require('now-env')
}

module.exports = {
  publicRuntimeConfig: {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_DOMAIN: process.env.AUTH0_CLIENT_DOMAIN,
  },
}
