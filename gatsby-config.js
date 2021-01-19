const DATOCMS_READ_TOKEN = 'd2f0b3ae3e3a269411fbc829232383'

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
          resolve: "gatsby-source-graphql",
          options: {
            typeName: "DATOCMS",
            fieldName: "datocms",
            url: "https://graphql.datocms.com/",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${DATOCMS_READ_TOKEN}`,
            },
          },
        },
    ]
}