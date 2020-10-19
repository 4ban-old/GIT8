const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { spawn } = require("child_process");

module.exports = {
  target: "electron-renderer",
  devtool: "inline-source-map",
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: false,
                  loose: true,
                  useBuiltIns: "usage",
                  corejs: "3.0.0",
                },
              ],
              "@babel/preset-react",
            ],
            plugins: [],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: /node_modules/,
        use: [{ loader: "file-loader?name=img/[name]__[hash:base64:5].[ext]" }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        use: [
          { loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]" },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    stats: {
      colors: true,
      chunks: false,
      children: false,
    },
    before() {
      spawn("electron", ["."], {
        shell: true,
        env: process.env,
        stdio: "inherit",
      })
        .on("close", (code) => process.exit(0))
        .on("error", (spawnError) => console.error(spawnError));
    },
  },
};
