module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        oneOf: [
          {
            use: ["style-loader", "css-loader"],
            issuer: /\.(js)$/
          },
          {
            type: 'asset/resource',
            issuer: /\.(css|scss|sass)$/
          },
        ],
      },
    ],
  },
};
