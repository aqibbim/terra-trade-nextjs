const withPWA = require('next-pwa')

/*const withOffline = require('next-offline')

const nextConfig = {
    pwa: {
        dest: 'public'
    }
}

module.exports = withOffline(nextConfig)*/

module.exports = withPWA({
    pwa: {
        dest: 'public'
    }
})
