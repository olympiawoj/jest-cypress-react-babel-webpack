const path =  require('path') // resolvers to directory name + src, so exact same place we have in webpack config
// node modules will be treated like omduoel

module.exports = {
    // testEnvironment: 'jest-environment-node', // ensures tests are running in a node environment
    testEnvironment: 'jest-environment-jsdom', // ensures tests are running in browser simulated environment
    moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared', path.join(__dirname, 'test')], // anything in test, shared, src, or node_modules can be imported as if it's a node_module
    moduleNameMapper: {
        // match all imports for .module.css bc those will have an object w styles applied, in particular .auto-scaling-text
        '\\.module\\.css$':'identity-obj-proxy', // returns a string for path accessed 
        '\\.css$': require.resolve('./test/style-mock.js') // regex pattern
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // files jest will run after setting up jest testing environment
    snapshotSerializers: ['jest-emotion'],
}