import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Helmet from 'react-helmet'

import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { PostLayout } from '../components/PostLayout'
import { SEO } from '../components/SEO'
import config from '../utils/config'

export default function PostTemplate({ data }) {
  const post = data.markdownRemark
  const { title, comments_off, thumbnail } = post.frontmatter

  return (
    <>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
      <SEO postPath={post.fields.slug} postNode={post} postSEO />

      <PostLayout post={post}>
        {thumbnail && (
          <Img
            fixed={thumbnail?.childImageSharp?.fixed}
            className="main-article-thumbnail"
          />
        )}
        <Hero title={title} type="post" />

        <div
          className="main-article"
          id={post.fields.slug}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        {!comments_off && (
          <section id="comments" className="comments">
            <h3>Comments</h3>
            {/* <Comments /> */}
          </section>
        )}
      </PostLayout>
    </>
  )
}

PostTemplate.Layout = Layout

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        categories
        description
        comments_off
        thumbnail {
          childImageSharp {
            fixed(width: 75, height: 75) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
