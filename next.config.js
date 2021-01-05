// deafult
const withCSS = require("@zeit/next-css");
const withLess = require('@zeit/next-less')
const webpack = require('webpack');

const withFonts = require('next-fonts');

// default Config
// module.exports = withCSS({});


// Custom Config
module.exports = withCSS({
  cssModules: true
})

// const { ASSET_HOST } = process.env

// // for those who using CDN
// const assetPrefix = ASSET_HOST || ''

// module.exports = {
//   assetPrefix,
//   target: 'serverless',
//   webpack: (config, { dev }) => {
//     config.output.publicPath = `${assetPrefix}`

//     return config
//   }
// }

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: '/imgages',
//         destination: '/static/images copy',
//       },
//       {
//         source: '/build',
//         destination: '/static/build',
//       },
//       {
//         source: '/dist',
//         destination: '/static/dist',
//       },
//       {
//         source: '/js',
//         destination: '/static/js',
//       },
//       {
//         source: '/scss',
//         destination: '/static/scss',
//       },
//     ]
//   },
// }

module.exports = withFonts(withLess(withCSS(
  {
    webpack: function (config) {
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]'
          }
        }
      })

      config.plugins.push(new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }))

      return config
    }
  }
)));
