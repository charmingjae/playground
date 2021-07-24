const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@css": path.resolve(__dirname, "src/css"),
      "@button": path.resolve(__dirname, "src/component/button"),
      "@template": path.resolve(__dirname, "src/component/template"),
      "@menu": path.resolve(__dirname, "src/component/menu"),
      "@page": path.resolve(__dirname, "src/page"),
      "@router": path.resolve(__dirname, "src/router"),
    },
  },
  devtool: "eval-cheap-source-map",
  devServer: {
    host: "localhost",
    port: port,
    open: true,
    hot: true,
    overlay: true,
    writeToDisk: true,
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                namedExport: true,
              },
            },
          },
        ],
      },
      {
        test: /\.jfif$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
