const path = require('path');

module.exports = {
  title: 'Kanbasu Vue',
  serverPort: 3000,
  defaultExample: false,
  components: 'src/components/**/*.vue',
  require: [path.join(__dirname, 'src/scss/main.scss')],
  skipComponentsWithoutExample: true,
  usageMode: 'expand',
};
