const { defineConfig } = require('cypress')

const newLocal = "http://localhost:8080"
module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
  },
})
