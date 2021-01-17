module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: "BigSeat",
              short_name: "BigSeat",
              start_url: "/",
              icon: "src/images/icon.png",
            },
          },
    ]
}