module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: "BigSeat",
            short_name: "BigSeat",
            start_url: "/",
            icon: "src/images/icon.png",
          },
        },
        {
          resolve: `gatsby-source-datocms`,
          options: {
            apiToken: `d2f0b3ae3e3a269411fbc829232383`,
            preview: false,
            // environment: `main`,
            // previewMode: false,
            disableLiveReload: false,
            localeFallbacks: {
              fr: ['en'],
            },
          },
        },
    ]
}