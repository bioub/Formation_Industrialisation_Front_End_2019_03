exports.config = {
  tests: './e2e/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080',
      show: true,
    },
  },
  bootstrap: null,
  mocha: {},
  name: 'Formation_Industrialisation_FrontEnd_2019_03',
};
