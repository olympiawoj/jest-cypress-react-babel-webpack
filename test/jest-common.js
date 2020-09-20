const path = require('path') // resolvers to directory name + src, so exact same place we have in webpack config
// node modules will be treated like omduoel

module.exports = {
  rootDir: path.join(__dirname, '..'), // root dir where looking for test to be 1 path up from dir currently in
  // // testEnvironment: 'jest-environment-node', // ensures tests are running in a node environment
  // testEnvironment: 'jest-environment-jsdom', // ensures tests are running in browser simulated environment
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    'shared',
    path.join(__dirname),
  ], // anything in test, shared, src, or node_modules can be imported as if it's a node_module
  moduleNameMapper: {
    // match all imports for .module.css bc those will have an object w styles applied, in particular .auto-scaling-text
    '\\.module\\.css$': 'identity-obj-proxy', // returns a string for path accessed
    '\\.css$': require.resolve('./style-mock.js'), // regex pattern
  },
  collectCoverageFrom: ['**/src/**/*.js'], // array of globs - anything in src directory that ends in .js, collect coverage
}
