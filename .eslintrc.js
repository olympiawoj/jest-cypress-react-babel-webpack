const path = require('path')

module.exports = {
  extends: [
    'kentcdodds',
    'kentcdodds/import',
    'kentcdodds/jest',
    'kentcdodds/react',
  ],
  rules: {
    // https://github.com/benmosher/eslint-plugin-import/issues/1446
    'import/named': 'off',
  },
  settings: {'import/resolver': 'node'},
  overrides: [
    // WEB PACK OVERRIDES
    {
      files: ['**/src/**'],
      settings: {'import/resolver': 'webpack'},
    },
    // TEST FILE OVERRIDES
    {
      files: ['**/__tests__/**'],
      settings: {'import/resolver': { // import resolver for jest will look up that config file and will say you moduleDirectories, so resolve modules the way jest would resolve modules
        jest: {
          jestConfigFile: path.join(__dirname, './jest.config.js')
          }
        }
      },
    },
  ],
}
