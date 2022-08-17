import * as React from "react"
import Blog from "../components/Blog/Blog";
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({data}) => {
    console.log(data);
  
  return (
    <Layout>
    <Seo title="Page two" />
    <h1>{data.wpPage.title}</h1>
    <Blog image={data.wpPage.title} heading={data.wpPage.title} comment={data.wpPage.title} />
    <div dangerouslySetInnerHTML={{__html: data.wpPage.content}} />
  <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export const pageQuery = graphql`
query {
    wpPage(slug: {eq: "blog"}) {
      title
      content
      contentType {
        node {
          id
        }
      }
    }
  }`

export default BlogPage
