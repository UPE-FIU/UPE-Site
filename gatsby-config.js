module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "UPE Website",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "vh4r0zrl",
        dataset: "",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
  ],
};
