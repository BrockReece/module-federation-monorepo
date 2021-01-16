const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    publicPath: 'https://unpkg.com/@brockreece/test-styleguide@0.1.2/dist/',
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "styleguide",
                filename: "remoteEntry.js",
                remotes: {
                },
                exposes: {
                    './Btn': './src/components/Btn'
                },
                shared: ['vue', 'core-js']
            })
        ]
    }
}