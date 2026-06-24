const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/js/main.ts",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[name][ext]",
    clean: true
  },

  resolve: {
    extensions: [".ts", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(webp|png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(mp4|webm|ogg)$/i,
        type: "asset/resource"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: "src/assets", 
          to: "assets",
          globOptions: {
            ignore: ["**/node_modules"]
          }
        }
      ]
    })
  ],

  devServer: {
    static: [
      {
        directory: path.join(__dirname, "src/assets"),
        publicPath: "/assets"
      }
    ],
    open: true,
    hot: true,
    port: 3000,
    compress: true,
    historyApiFallback: true
  }
};