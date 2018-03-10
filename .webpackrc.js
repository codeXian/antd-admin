export default {
  extraBabelPlugins: [
    ["import", { "libraryName": "antd", "style": true }]
  ],
  externals: {
    jquery: "jQuery",
    swipper: "Swiper"
  },
  // theme: './theme.js'
}
