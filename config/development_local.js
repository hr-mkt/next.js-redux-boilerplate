const hostname = require('ip').address()

module.exports = {
    NODE_ENV: 'development_local',
    WEB: {
        BASE_URL: `http://${hostname}:3000`
    },
    API: {
        DATA_URL: `http://${hostname}:10010`
    }
}
