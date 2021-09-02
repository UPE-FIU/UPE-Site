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
  ],
};
