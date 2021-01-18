const { ModuleFederationPlugin } = require("webpack").container

module.exports = {
    publicPath: 'http://localhost:8080/',
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "shell",
                filename: "remoteEntry.js",
                remotes: {
                    shell: "shell@http://localhost:8080/remoteEntry.js",
                    foo: "foo@http://localhost:8081/remoteEntry.js",
                    styleguide: "styleguide@https://unpkg.com/@brockreece/test-styleguide@0.1.1/dist/remoteEntry.js",
                    styleguideNew: 'styleguide@https://unpkg.com/@brockreece/test-styleguide/dist/remoteEntry.js'
                },
                exposes: {
                    './App': './src/App.vue',
                    './Router': './src/router/index',
                    './views/Home': './src/views/Home',
                    './compositions/user': './src/compositions/user',
                    './components/Countries': './src/components/Countries'
                },
                shared: [ 'vue', 'core-js', 'vue-router', 'styleguide', '@vue/apollo-composable', 'graphql', '@apollo/client' ]
            })
        ]
    }
}