import React from "react"
import { graphql, Link } from "gatsby"
import * as styles from "../styles/blog.module.css"

export default function Blog({ data }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Blog Title</h1>
        {/* Additional header content */}
      </header>

      <div className={styles.contentArea}>
        {/* Blog posts list */}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id}>
            <h2 className={styles.title}>{node.frontmatter.title}</h2>
            <p className={styles.author}>{node.frontmatter.author}</p>
            <p className={styles.date}>{node.frontmatter.date}</p>
            <div className={styles.content}>{node.excerpt}</div>
            <Link to={node.fields.slug} className={styles.postLink}>
              Read More
            </Link>
          </article>
        ))}
      </div>

      <footer className={styles.footer}>{/* Footer content */}</footer>
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
