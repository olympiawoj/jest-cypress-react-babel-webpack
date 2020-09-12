const isProd = String(process.env.NODE_ENV) === 'production'
const isTest = String(process.env.NODE_ENV) === 'test' // jest sets this for us automatically

module.exports = {
  presets: [
    // if its test, compile in commonjs so it works in node, otherwise dont compile at all and webpack will take over
    ['@babel/preset-env', {modules: isTest? 'commonjs' : false}],
    '@babel/preset-react',
    [
      '@emotion/babel-preset-css-prop',
      {
        hoist: isProd,
        sourceMap: !isProd,
        autoLabel: !isProd,
        labelFormat: '[filename]--[local]',
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
}
