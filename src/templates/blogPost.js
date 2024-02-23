import React from "react"
import { FaHeart, FaShareAlt, FaComment } from "react-icons/fa"
import { graphql } from "gatsby"
import * as styles from "../styles/blogPost.module.css"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <p className={styles.author}>By {post.frontmatter.author}</p>
        <p className={styles.date}>{post.frontmatter.date}</p>
      </header>
      <section
        className={styles.contentArea}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <footer className={styles.footer}>
        <FaHeart className={styles.icon} aria-label="like" />
        <FaShareAlt className={styles.icon} aria-label="share" />
        <FaComment className={styles.icon} aria-label="comment" />
      </footer>
    </article>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
