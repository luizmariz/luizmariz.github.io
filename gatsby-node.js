const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const BlogPostTemplate = path.resolve(`src/containers/blog-post.js`);
    const BlogIndexTemplate = path.resolve(`src/containers/blog-index.js`);

    createPage({
      path: '/',
      component: BlogIndexTemplate
    });

    resolve(
      graphql(`
        {
          allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
          return;
        }

        const posts = result.data.allMarkdownRemark.edges;
        posts.forEach(({ node }, i) => {
          const next = i === posts.length - 1 ? null : posts[i + 1].node;
          const previous = i === 0 ? null : posts[i - 1].node;
          createPage({
            path: node.fields.slug,
            component: BlogPostTemplate,
            context: {
              slug: node.fields.slug,
              previous,
              next
            }
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};
