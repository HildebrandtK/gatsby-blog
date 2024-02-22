import React from "react"
import { graphql, Link } from "gatsby"
import * as styles from "../styles/blog.module.css"

export default function Blog({ data }) {
  return (
    <div className={styles.blogContainer}>
      <h1>Blog</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className={styles.blogContainer}>
          <h3 className={styles.postTitle}>
            <Link to={node.fields.slug} className={styles.postLink}>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </Link>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
