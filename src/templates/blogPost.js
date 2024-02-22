import React from "react"
import { graphql } from "gatsby"
import * as styles from "../styles/blogPost.module.css"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <div className={styles.postContainer}>
      <h1 className={styles.title}>{post.frontmatter.title}</h1>
      <p className={styles.date}>{post.frontmatter.date}</p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
