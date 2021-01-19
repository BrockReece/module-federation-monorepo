const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
    publicPath: process.env.SHELL_BASE,
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "shell",
                filename: "remoteEntry.js",
                remotes: {
                    shell: `shell@${process.env.SHELL_BASE}remoteEntry.js`,
                    foo: `foo@${process.env.APP_BASE}remoteEntry.js`,
                    styleguide: `styleguide@${process.env.STYLEGUIDE_BASE}remoteEntry.js`
                },
                exposes: {
                    './App': './src/App.vue',
                    './Router': './src/router/index',
                    './views/Home': './src/views/Home',
                    './compositions/user': './src/compositions/user'
                },
                shared: [ 'vue', 'core-js', 'vue-router', 'styleguide' ]
            })
        ]
    }
}