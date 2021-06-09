console.log('NODE_ENV', process.env.NODE_ENV)
const config = require('config')

nextConfig = {
    publicRuntimeConfig: config,
    distDir: 'build',
    devIndicators: {
        autoPrerender: false,
    },
    trailingSlash: true,
    webpack(config) {
        config.resolve.modules.push(__dirname)
        return config
    }
}

module.exports = nextConfig
