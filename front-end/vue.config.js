const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

const publicPath =
  process.env.NODE_ENV === "production" ? "/ecomprojetvuejs/" : "/";

module.exports = {
  publicPath: publicPath,
};
