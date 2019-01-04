const webpack = require('webpack')

if (process.env.NODE_ENV !== 'production') {
  require('now-env')
}

module.exports = {
  webpack: config => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(['AUTH0_CLIENT_ID', 'AUTH0_CLIENT_DOMAIN'])
    )
    return config
  },
}
