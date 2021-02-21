import React, { useState } from 'react';

import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { 
  Typography,
} from '@material-ui/core';

import "../styles/grid.scss"

const IndexPage = ({ data }) => {

  return (
    <Layout>

      <SEO title="Home" />

      <div className="grid">
        <div className="inner">
          <div className="col l-6 ip12-6 s-12">

            <Typography variant="h1">{data.wpPage.title || "Title"}</Typography>

          </div>
        </div>
      </div>

    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(isFrontPage: {eq: true}) {
      title
    }
  }
`

export default IndexPage
