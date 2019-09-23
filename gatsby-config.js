module.exports = {
  siteMetadata: {
    title: 'Luiz Ipsum',
    author: 'Luiz Mariz',
    siteDescription: '',
    siteUrl: 'http://localhost:8000',
    portfolioData: {
      authorFullName: 'Luiz Gustavo Oliveira Mariz',
      imagePath: `${__dirname}/src/assets/images/photo.png`,
      languages: [ 'react', 'node', 'angular', 'python', 'go', 'C++', 'java' ],
      aboutMe: 'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Atirei o pau no gatis, per gatis num morreus. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!',
      portfolio: {
        'example': 'https://www.google.com'
      },
    }
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener'
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Luiz Ipsum',
        short_name: 'LuizIpsum',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo-512px.png'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-146759812-1',
        // Puts tracking script in the head instead of the body
        head: false,
        anonymize: true,
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/']
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#755671`,
        showSpinner: false
      }
    }
  ],
}