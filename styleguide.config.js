const path = require('path');

module.exports = {
  title: 'Kanbasu Vue',
  defaultExample: false,
  components: 'src/components/**/*.vue',
  require: [path.join(__dirname, 'src/scss/main.scss')],
};
