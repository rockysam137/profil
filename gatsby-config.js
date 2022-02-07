require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: `profil`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
    {
    resolve:'gatsby-source-cloudinary',
    options:{
      clounName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey:process.env.CLOUDINARY_API_KEY,
      apiSecreet:process.env.CLOUDINARY_API_SECRET,
      resouceType:'image',
      type:'type Value',
      prefix: 'abc-xyz'
        }
    }
    ]
};
