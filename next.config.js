console.log('NODE_ENV', process.env.NODE_ENV)
const config = require('config')

let nextConfig

if(process.env.DEV_SERVER){
    nextConfig = {
        publicRuntimeConfig: config,
        distDir: 'build',
    }
}else{
    nextConfig = {
        publicRuntimeConfig: config,
        distDir: 'build',
        assetPrefix: 'http://localhost:8080/out/',
    }
}


module.exports = nextConfig
