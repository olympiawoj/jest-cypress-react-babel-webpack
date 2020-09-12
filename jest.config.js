module.exports = {
    // testEnvironment: 'jest-environment-node', // ensures tests are running in a node environment
    testEnvironment: 'jest-environment-jsdom', // ensures tests are running in browser simulated environment
    moduleNameMapper: {
        // match all imports for .module.css bc those will have an object w styles applied, in particular .auto-scaling-text
        '\\.module\\.css$':'identity-obj-proxy', // returns a string for path accessed 
        '\\.css$': require.resolve('./test/style-mock.js') // regex pattern
    }
}