const { defineConfig } = require('cypress')

module.exports = defineConfig({
  trashAssetsBeforeRuns: false,
  chromeWebSecurity: false,
  video: true,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  reporterOptions: {
    overwrite: true,
    html: true,
    json: true,
  },
  videoCompression: 32,
  viewportWidth: 1280,
  viewportHeight: 720,
  numTestsKeptInMemory: 50,
  requestTimeout: 5000,
  responseTimeout: 30000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://blogdoagi.com.br/',
    excludeSpecPattern: '*.js',
    specPattern: '**/*.{feature,features}'
  },
})
