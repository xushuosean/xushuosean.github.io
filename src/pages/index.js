import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import React, { useMemo } from 'react'
import Helmet from 'react-helmet'

import floppy from '../assets/floppylogo.png'
import { Heading } from '../components/Heading'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { PageLayout } from '../components/PageLayout'
import { Posts } from '../components/Posts'
import { SEO } from '../components/SEO'
import { projectsList } from '../data/projectsList'
import config from '../utils/config'
import { getSimplifiedPosts } from '../utils/helpers'

export default function Index({ data }) {
  const latestNotes = data.latestNotes.edges
  const latestArticles = data.latestArticles.edges
  const highlights = data.highlights.edges
  const notes = useMemo(() => getSimplifiedPosts(latestNotes), [latestNotes])

  const articles = useMemo(
    () => getSimplifiedPosts(latestArticles),
    [latestArticles]
  )
  const simplifiedHighlights = useMemo(
    () => getSimplifiedPosts(highlights, { thumbnails: true }),
    [highlights]
  )

  return (
    <>
      <Helmet title={config.siteTitle} />
      <SEO />

      <PageLayout>
        <Hero title="Hey, I'm Sean!" type="index">
          <div className="hero-wrapper">
            <div>
              <p className="hero-description">
                
              </p>
              <p className="hero-description">
                I enjoy weight-lifting, reading sci-fi and fantasy, playing
                retro video games, and spending time with my partner and
                friends.
              </p>

              <p className="hero-description">
                On this site, you can check out all the{' '}
                <Link to="/blog">articles</Link> I've written, read some of my{' '}
                <Link to="/notes">notes</Link>, or learn more{' '}
                <Link to="/me">about me</Link>{' '}
                <img
                  src={floppy}
                  className="floppy-logo"
                  alt="Floppy diskette"
                />
                .
              </p>
            </div>
            {/* <img src="/ram.png" className="hero-image" alt="RAM Ram" /> */}
          </div>
        </Hero>

        <section className="section-index">
          <Heading
            title="Articles"
            description="Guides, references, and tutorials."
          />
          <Posts data={articles} newspaper />
        </section>

        <section className="section-index">
          <Heading
            title="Notes"
            description="Personal notes about life, music, projects, and everything else."
          />
          <Posts data={notes} newspaper />
        </section>

        <section className="section-index">
          <Heading
            title="In-depth"
            description="Long-form tutorials on a variety of development topics."
          />
          <div className="cards">
            {simplifiedHighlights.map((post) => {
              return (
                <Link
                  to={post.slug}
                  className="card card-highlight"
                  key={`popular-${post.slug}`}
                >
                  {post.thumbnail && <Img fixed={post.thumbnail} />}
                  <div>{post.title}</div>
                </Link>
              )
            })}
          </div>
        </section>

        <section>
          <Heading
            title="Projects"
            slug="/projects"
            buttonText="All Projects"
            description="Open-source projects I've worked on over the years."
          />

          <div className="cards">
            {projectsList
              .filter((project) => project.highlight)
              .map((project) => {
                return (
                  <div className="card" key={`hightlight-${project.slug}`}>
                    <time>{project.date}</time>
                    <a
                      href={`https://github.com/taniarascia/${project.slug}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                    </a>
                    <p>{project.tagline}</p>
                    <div className="card-links">
                      {project.writeup && (
                        <Link className="button small" to={project.writeup}>
                          Article
                        </Link>
                      )}
                      <a
                        className="button small"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                )
              })}
          </div>
        </section>
      </PageLayout>
    </>
  )
}

Index.Layout = Layout

export const pageQuery = graphql`
  query IndexQuery {
    latestNotes: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          template: { eq: "post" }
          categories: { eq: "Personal" }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            categories
          }
        }
      }
    }
    latestArticles: allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          template: { eq: "post" }
          categories: { eq: "Technical" }
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            categories
          }
        }
      }
    }
    highlights: allMarkdownRemark(
      limit: 12
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Highlight" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
