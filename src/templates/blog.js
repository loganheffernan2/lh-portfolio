import React from "react"
import { graphql } from "gatsby"
import Header from '../components/Header'
import '../css/item.css'
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="content">
      <div><Header /></div>
      <div id="blogWrap">
        <p id="postTitle">
        <p>{frontmatter.title}</p>
        <span> — </span>
        <p>{frontmatter.date}</p>
        </p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY")
        path
        title
      }
    }
  }
`