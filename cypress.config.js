const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  numTestsKeptInMemory: 5,
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  env: {
      client_id: "MrGPc7e3IL1hA6w13l7Ru5giygxmNiafGNhFv89d",
      client_secret: "Pk6DdDgu2HzSoepcMHRabY60lDEvQ9ucTejYvc5dOgNVSNaOJirCUM83oAzlwe0KBiGR2Nhi6ltclyNC1rmcq0CiJZXzE42KfeatQ4j9npr6nMIQAzMal8O8RiYrIoono306CfyvSSJRfVfKExIjj0ZyE4TUrtPezJbKmvkVDzh8aj3kbanDKatirhwpfqfVdfgsqVNjzIM9ZgKHnbrTX7nNULL3BtxxNGgDMuCuvKiJFrLSyIIz1F4SNrHwHz"
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost',
  },
})
