const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/assets/images"),
        "@context": path.resolve(__dirname, "src/context"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
      },
    },
  });
};
