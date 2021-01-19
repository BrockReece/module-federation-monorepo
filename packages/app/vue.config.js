const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
    publicPath: process.env.APP_BASE,
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "foo",
                filename: "remoteEntry.js",
                remotes: {
                    shell: `shell@${process.env.SHELL_BASE}remoteEntry.js`,
                    foo: `foo@${process.env.APP_BASE}remoteEntry.js`,
                    styleguide: `styleguide@${process.env.STYLEGUIDE_BASE}remoteEntry.js`
                },
                exposes: {
                    './router': './src/router/index'
                },
                shared: ['vue', 'core-js', 'vue-router', 'styleguide']
            })
        ]
    }
}