const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/index.js"],
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: true,
      minify: true,
    }),
    new MiniCssExtractPlugin({
      filename: "./css/index.css",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"),
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|jpe?g|svg)$/i,
        type: "asset/resource",
      },
      {
        loader: "image-webpack-loader",
        options: {
          bypassOnDebug: true,
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
};
