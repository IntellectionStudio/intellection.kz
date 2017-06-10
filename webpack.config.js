import path from "path"

import webpack from "webpack"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import { phenomicLoader } from "phenomic"
import PhenomicLoaderFeedWebpackPlugin
  from "phenomic/lib/loader-feed-webpack-plugin"
import PhenomicLoaderSitemapWebpackPlugin
  from "phenomic/lib/loader-sitemap-webpack-plugin"
import CopyWebpackPlugin from "copy-webpack-plugin"
import ImageminPlugin from 'imagemin-webpack-plugin'
import imageminMozjpeg from 'imagemin-mozjpeg';

import pkg from "./package.json"

export default (config = {}) => {

  // hot loading for postcss config
  // until this is officially supported
  // https://github.com/postcss/postcss-loader/issues/66
  const postcssPluginFile = require.resolve("./postcss.config.js")
  const postcssPlugins = (webpackInstance) => {
    webpackInstance.addDependency(postcssPluginFile)
    delete require.cache[postcssPluginFile]
    return require(postcssPluginFile)(config)
  }

  return {
    ...config.dev && {
      devtool: "#cheap-module-eval-source-map",
    },
    node: {
      fs: "empty",
    },
    module: {
      noParse: /\.min\.js/,
      rules: [
        // src-set loader is first dur to https://github.com/timse/srcset-loader#user-content-why-is-the-srcset-loader-before-the-other-loaders
        {
          // match image files
          test: /\.(jpe?g|png|svg|gif)$/,

          // match one of the loader's main parameters (sizes and placeholder)
          resourceQuery: /[?&](sizes|placeholder)(=|&|\[|$)/,

          use: [
            'srcset-loader',

            // any other loader
            {
              loader: "file-loader",
              query: {
                hash: 'sha512',
                digest: 'hex',
                name: "[path][name].[hash].[ext]",
                context: path.join(__dirname, config.source),
              },
            },
            'image-webpack-loader?optimizationLevel=7&interlaced=false',
            {
              loader: 'image-webpack-loader',
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: false,
                },
                optipng: {
                  optimizationLevel: 4,
                },
                pngquant: {
                  quality: '75-90',
                  speed: 3,
                },
              }
            }
          ],
        },
        // *.md => consumed via phenomic special webpack loader
        // allow to generate collection and rss feed.
        {
          // phenomic requirement
          test: /\.(md|markdown)$/,
          loader: phenomicLoader,
          query: {
            context: path.join(__dirname, config.source),
            // plugins: [
            //   ...require("phenomic/lib/loader-preset-markdown").default
            // ]
            // see https://phenomic.io/docs/usage/plugins/
          },
        },

        // *.js => babel + eslint
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, "scripts"),
            path.resolve(__dirname, "src"),
          ],
          loaders: [
            "babel-loader?cacheDirectory",
            "eslint-loader" + (config.dev ? "?emitWarning" : ""),
          ],
        },

        // ! \\
        // by default *.css files are considered as CSS Modules
        // And *.global.css are considered as global (normal) CSS

        // *.css => CSS Modules
        {
          test: /\.css$/,
          exclude: /\.global\.css$/,
          include: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "src", "tachyons", "src")
          ],
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                query: {
                  modules: true,
                  localIdentName: (
                    config.production
                    ? "[hash:base64:5]"
                    : "[path][name]--[local]--[hash:base64:5]"
                  ),
                },
              },
              {
                loader: "postcss-loader",
                // query for postcss can't be used right now
                // https://github.com/postcss/postcss-loader/issues/99
                // meanwhile, see webpack.LoaderOptionsPlugin in plugins list
                query: { plugins: postcssPlugins },
              },
            ],
          }),
        },
        // *.global.css => global (normal) css
        {
          test: /\.global\.css$/,
          include: path.resolve(__dirname, "src"),
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              "css-loader",
              {
                loader: "postcss-loader",
                // query for postcss can't be used right now
                // https://github.com/postcss/postcss-loader/issues/99
                // meanwhile, see webpack.LoaderOptionsPlugin in plugins list
                query: { plugins: postcssPlugins },
              },
            ],
          }),
        },
        // ! \\
        // If you want global CSS only, just remove the 2 sections above
        // and use the following one
        // ! \\ If you want global CSS for node_modules only, just uncomment
        // this section and the `include` part
        {
          test: /\.s?css$/,
          // depending on your need, you might need to scope node_modules
          // for global CSS if you want to keep CSS Modules by default
          // for your own CSS. If so, uncomment the line below
          include: [
            path.resolve(__dirname, "node_modules", "normalize.css"),
            path.resolve(__dirname, "node_modules", "tachyons", "css"),
            path.resolve(__dirname, "node_modules", "react-modal-video", "scss"),
          ],
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              "css-loader",
              {
                loader: "postcss-loader",
                query: { "plugins": postcssPlugins },
              },
              {
                loader: "sass-loader",
              },
            ]
          }),
        },
        // ! \\ if you want to use Sass or LESS, you can add sass-loader or
        // less-loader after postcss-loader (or replacing it).
        // ! \\ You will also need to adjust the file extension
        // and to run the following command
        //
        // Sass: `npm install --save-dev node-sass sass-loader`
        // https://github.com/jtangelder/sass-loader
        //
        // LESS: npm install --save-dev less less-loader
        // https://github.com/webpack/less-loader

        // copy assets and return generated path in js
        {
          test: /\.(jpe?g|png|gif)$/,
          loaders: [
            {
              loader: 'responsive-loader',
              query: {
                name: "[path][name].[hash].",
                context: path.join(__dirname, config.source),
              }
            }
          ]
        },
        {
          test: /\.(html|ico|eot|otf|webp|ttf|woff|woff2)$/,
          loader: "file-loader",
          query: {
            name: "[path][name].[hash].[ext]",
            context: path.join(__dirname, config.source),
          },
        },

        // svg as raw string to be inlined
        {
          test: /\.svg$/,
          loader: "raw-loader",
        },
      ],
    },

    plugins: [
      // You should be able to remove the block below when the following
      // issue has been correctly handled (and postcss-loader supports
      // "plugins" option directly in query, see postcss-loader usage above)
      // https://github.com/postcss/postcss-loader/issues/99
      new webpack.LoaderOptionsPlugin({
        test: /\.css$/,
        options: {
          postcss: postcssPlugins,
          // required to avoid issue css-loader?modules
          // this is normally the default value, but when we use
          // LoaderOptionsPlugin, we must specify it again, otherwise,
          // context is missing (and css modules names can be broken)!
          context: __dirname,
        },
      }),

      new webpack.LoaderOptionsPlugin({
        test: /\.(jpe?g|png|gif)$/,
        options: {
          responsiveLoader: {
            sizes: [100, 250, 500, 750, 1000, 2500, 5000, 10000],
            placeholder: true,
            placeholderSize: 50
          }
        }
      }),

      new PhenomicLoaderFeedWebpackPlugin({
        // here you define generic metadata for your feed
        feedsOptions: {
          title: pkg.name,
          site_url: pkg.homepage,
        },
        feeds: {
          // here we define one feed, but you can generate multiple, based
          // on different filters
          "feed.xml": {
            collectionOptions: {
              filter: { layout: "Post" },
              sort: "date",
              reverse: true,
              limit: 20,
            },
          },
        },
      }),

      new PhenomicLoaderSitemapWebpackPlugin({
        site_url: pkg.homepage,
      }),

      new ExtractTextPlugin({
        filename: "[name].[hash].css",
        disable: config.dev,
      }),

      new CopyWebpackPlugin([
        {from: 'admin', to: 'admin'},
      ]),

      ...config.production && [
        new webpack.optimize.UglifyJsPlugin(
          { compress: { warnings: false } }
        ),

        new ImageminPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i,
          optipng: {
              optimizationLevel: 7,
          },
          pngquant: {
              quality: '65-90',
              speed: 4,
          },
          gifsicle: {
              optimizationLevel: 3,
          },
          svgo: {
              plugins: [{
                  removeViewBox: false,
                  removeEmptyAttrs: true,
              }],
          },
          jpegtran: {
              progressive: true,
          },
          plugins: [
              imageminMozjpeg({
                  quality: 90,
                  progressive: true,
              }),
          ],
        }),
      ],
    ],

    output: {
      path: path.join(__dirname, config.destination),
      publicPath: config.baseUrl.pathname,
      filename: "[name].[hash].js",
    },

    resolve: { extensions: [ ".js", ".json" ] },
  }
}
