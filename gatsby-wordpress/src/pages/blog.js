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
    <h1>{data.wpPost.title}</h1>
    <Blog image={data.allWpMediaItem.edges[0].node.sourceUrl} heading={data.wpPost.title} comment={data.wpPost.title} />
    {/* <div dangerouslySetInnerHTML={{__html: data.wpPost.content}} /> */}
  <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

// export const pageQuery = graphql`
// query {
//     wpPost(slug: {eq: "blog"}) {
//       title
//       content
//       contentType {
//         node {
//           id
//         }
//       }
//     }
//   }`

  export const BlogQuery = graphql`
  query {
    wpPost(slug: {eq: "hello-there"}) {
      title
      content
    }
    allWpMediaItem {
      edges {
        node {
          sourceUrl
        }
      }
    }
  }`

export default BlogPage
