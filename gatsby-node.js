const path = require(`path`)

/**
 * Create a page for each Gallery collection.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // grab all galleries
  const result = await graphql(`
    query {
      allStrapiGallery {
        nodes {
          slug
        }
      }
    }
  `)
  // create page for each gallery
  result.data.allStrapiGallery.nodes.forEach(node => {
    createPage({
      path: `/gallery/${node.slug}/`,
      component: path.resolve(`./src/templates/gallery.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}
