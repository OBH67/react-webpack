const path = require('path')

//const custom = require('../config/webpack.common')

module.exports = {
  stories: ['../src/screens/home.stories.tsx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        // Add the sass loader to process scss files
        'sass-loader',
      ],
    })

    return config
  },
}
