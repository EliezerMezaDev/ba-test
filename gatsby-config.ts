import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Buenaventura.tax`,
    description: `Team of professionals dedicated to tax calculation and tax compliance.`,
    type: "website",
    author: `@novanetstudio`,
    siteUrl: "https://buenaventura.netlify.app",
    image: `./src/assets/images/icon.png`,
    titleTemplate: "Buenaventura.tax",
    twitterUsername: "@novanetstudio",
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Buenaventura Tax`,
        short_name: `Buenaventura Tax`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0e2d1d`,
        display: `standalone`,
        orientation: `portrait`,
        icon: "src/assets/favicon.png",
      },
    },
  ],
};

export default config;
