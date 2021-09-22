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
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:300,400,700,900`, `source sans pro\:300,400,700,900`],
        display: "swap",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
  ],
};
