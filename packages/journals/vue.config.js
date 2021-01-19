const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
    publicPath: process.env.JOURNAL_BASE,
    configureWebpack: {
        plugins: [
            new ModuleFederationPlugin({
                name: "journals",
                filename: "remoteEntry.js",
                remotes: {
                    journals: `journals@${process.env.JOURNAL_BASE}remoteEntry.js`,
                    styleguideNew: `styleguide@${process.env.STYLEGUIDE_BASE}remoteEntry.js`
                },
                exposes: {
                    './views/Journals': './src/views/Journals',
                    './components/AddJournalButton': './src/components/AddJournalButton',
                    './compositions/journals': './src/compositions/journals'
                },
                shared: ['vue', 'core-js', 'vue-router', 'styleguide']
            })
        ]
    }
}