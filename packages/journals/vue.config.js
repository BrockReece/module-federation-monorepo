const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
    publicPath: 'http://localhost:8084/',
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "journals",
                filename: "remoteEntry.js",
                remotes: {
                    journals: "journals@http://localhost:8084/remoteEntry.js",
                    shell: "shell@http://localhost:8080/remoteEntry.js",
                    styleguide: 'styleguide@https://unpkg.com/@brockreece/test-styleguide@0.1.1/dist/remoteEntry.js',
                },
                exposes: {
                    './router': './src/router/index',
                    './components/AddJournalButton': './src/components/AddJournalButton'
                },
                shared: ['vue', 'core-js', 'vue-router', 'styleguide']
            })
        ]
    }
}