module.exports = [{
    plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
    options: {
        "plugins": [],
        "id": "GTM-TDK5TPV",
        "includeInDevelopment": false,
        "defaultDataLayer": null,
        "routeChangeEventName": "gatsby-route-change",
        "enableWebVitalsTracking": false,
        "selfHostedOrigin": "https://www.googletagmanager.com"
    },
}, {
    plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
    options: {
        "plugins": [],
        "background_color": "#dddddd",
        "display": "standalone",
        "name": "Netil Radio",
        "short_name": "Netil Radio",
        "start_url": "/",
        "theme_color": "#007eff",
        "icon": "src/images/logo.png",
        "legacy": true,
        "theme_color_in_head": true,
        "cache_busting_mode": "query",
        "crossOrigin": "anonymous",
        "include_favicon": true,
        "cacheDigest": "f5b304c8d9d923c4d75cee6c491428d2"
    },
}, {
    plugin: require('../gatsby-browser.js'),
    options: {
        "plugins": []
    },
}]