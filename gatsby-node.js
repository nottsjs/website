/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const eventsTemplate = path.resolve(`src/templates/event-template.jsx`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___start] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: eventsTemplate,
      context: { event: true }, // additional data can be passed via context
    })
  })
}

const remark = require('remark')
const remarkHTML = require('remark-html')

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (!node.frontmatter) return

  console.log('====================================== NODE HAS FRONTMATTER ====================================')
  console.log(JSON.stringify(node.frontmatter))

  const { presenter_bio } = node.frontmatter
  if (presenter_bio) {
    const markdown = remark()
      .use(remarkHTML)
      .processSync(presenter_bio)
      .toString()
    createNodeField({
      name: `presenter_bio_html`,
      node,
      value: markdown
    });
  }
}
