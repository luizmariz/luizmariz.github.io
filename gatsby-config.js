module.exports = {
  siteMetadata: {
    title: 'Luiz Ipsum',
    author: 'Luiz Mariz',
    description:
      'Blog e site pessoal de um desenvolvedor Front-end muito fã de React, JavaScript e Web design.',
    siteUrl: 'https://luizipsum.com.br'
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images/`,
        name: 'images'
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `dominantColor`,
          quality: 80,
          backgroundColor: `transparent`
        }
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-use-dark-mode`,
      options: {
        classNameDark: `dark-mode`,
        classNameLight: `light-mode`,
        storageKey: `darkMode`,
        minify: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷'
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: []
            }
          },
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Luiz Ipsum',
        short_name: 'Luiz Ipsum',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
        background_color: `#ffffff`,
        theme_color: `#4b334c`,
        display: `minimal-ui`,
        theme_color_in_head: false
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-146759812-1',
        head: true
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.summary,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                });
              });
            },
            query: `
              {
                allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        summary
                        date
                      }
                      excerpt(truncate: true, pruneLength: 500, format: HTML)
                    }
                  }
                }
              }
            `,
            output: '/feed.xml',
            title: 'Luiz Ipsum Blog - RSS Feed'
          }
        ]
      }
    },
    `gatsby-plugin-catch-links`
  ]
};
