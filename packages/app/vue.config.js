const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
    publicPath: 'http://localhost:8081/',
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "foo",
                filename: "remoteEntry.js",
                remotes: {
                    foo: "foo@http://localhost:8081/remoteEntry.js",
                    shell: "shell@http://localhost:8080/remoteEntry.js",
                    styleguide: 'styleguide@https://unpkg.com/@brockreece/test-styleguide@0.1.1/dist/remoteEntry.js',
                },
                exposes: {
                    './router': './src/router/index'
                },
                shared: ['vue', 'core-js', 'vue-router', 'styleguide']
            })
        ]
    }
}