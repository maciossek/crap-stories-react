const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    plugins: ["@emotion"],
  },
  webpack: {
    plugins: [new AntdDayjsWebpackPlugin()],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "rgb(255,0,129)",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
