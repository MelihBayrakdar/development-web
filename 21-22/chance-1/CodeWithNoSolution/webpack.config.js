const path = require('path');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = (env, argv) => {
  const isDevBuild = !(env && env.prod)
  const outputDir = (env && env.publishDir) ? env.publishDir : __dirname
  return ({
    entry: {
      site: "./Client/app.ts",
    },
    mode: isDevBuild ? 'development' : 'production',
    output: {
      filename: isDevBuild ? "[name].js" : "[name].min.js",
      path: __dirname + "/wwwroot/js",
      publicPath: "js/",
      libraryTarget: 'var',
      library: 'app'
      },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        { test: /\.tsx?$/, loader: ["babel-loader", "awesome-typescript-loader"] },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

        { test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)(\?|$)/, use: "url-loader?limit=100000" },
      ]
    },

    plugins: [
      new ExtractTextPlugin({
        filename: 'js/app.css'
      }),
      new CleanWebpackPlugin(path.join(outputDir, 'wwwroot', 'js')),
      new CheckerPlugin()
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
    }
  })
};


