const path = require('path');
const {
    override,
    babelInclude,
    addBabelPreset,
    addExternalBabelPlugin,
} = require('customize-cra');

const supportMjs = () => (webpackConfig) => {
    webpackConfig.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
    });
    return webpackConfig;
};

module.exports = override(
    babelInclude([
        path.resolve('src'),
        path.resolve('node_modules/gatsby'),
    ]), 
    addBabelPreset("@babel/preset-react"), 
    addExternalBabelPlugin('@babel/plugin-proposal-class-properties'), 
    supportMjs()
);