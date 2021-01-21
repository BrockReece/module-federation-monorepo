const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    publicPath: process.env.STYLEGUIDE_BASE,
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "styleguide",
                filename: "remoteEntry.js",
                remotes: {},
                exposes: {
                    './Btn': './src/components/Btn'
                },
                shared: ['vue', 'core-js']
            })
        ]
    }
}