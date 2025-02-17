import React from 'react'
import Helmet from 'react-helmet'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'
import { PageLayout } from '../components/PageLayout'
import { SEO } from '../components/SEO'
import config from '../utils/config'

export default function Me() {
  const title = 'About Me'
  const description =
    'Personal notes about life, music, projects, and everything else.'
  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO customDescription={description} />

      <PageLayout>
        <Hero title={title} description={description} />
        data
      </PageLayout>
    </>
  )
}

Me.Layout = Layout