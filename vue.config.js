const webpack = require("webpack");

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Triade do Tempo';
        return args;
      })
  },

  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 20
      })
    ]
  },

  css: {
    sourceMap: process.env.NODE_ENV !== "production"
  }
};
