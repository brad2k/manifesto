module.exports = {
    siteMetadata: {
        title: `Brad Azevedo`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-eslint`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Montserrat', 'Shadows Into Light'],
                },
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                
            },
        },
    ],
}
