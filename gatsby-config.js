module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "LandingJP",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-H5JS8V3G94", // Google Analytics / GA
          
        ],
        
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  "gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-postcss",
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",],
 
};
