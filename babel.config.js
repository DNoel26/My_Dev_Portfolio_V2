/** @format */

module.exports = (api) => {
    const isTest = api.env('test');

    // You can use isTest to determine what presets and plugins to use.
    const envConfig = {
        presets: ['next/babel'],
    };

    if (isTest) {
        envConfig.presets = [
            ...envConfig.presets,
            [('@babel/preset-env', { targets: { node: 'current' } })],
            '@babel/preset-typescript',
        ];
    }
    return envConfig;
};
