module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("eslint");
  }
};

exports.devServer = {
  watchOptions: {
    poll: true
  }
};
