const useLessLoader = require('storybook-less-loader')

module.exports = {
  "stories": [
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",

    //AntDesign Components
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    const cssModel = config.module.rules.find(i => i.test.toString() === "/\\.css$/")
    
    config.module.rules.push({
      test: /\.less$/,
      sideEffects: true,
      use: [
        ...cssModel.use,
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
          },
        }
      ]
    });
    
    return config
  }
}