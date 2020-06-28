module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `md-content`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
