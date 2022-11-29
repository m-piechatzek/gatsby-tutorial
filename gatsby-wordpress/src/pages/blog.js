import * as React from "react"
import Blog from "../components/Blog/Blog";
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = ({data}) => {
    console.log("test", data);

    const blogs = [];
    console.log("wppost", data.allWpPost.edges);
    data.allWpPost.edges.forEach((post, index) => {
      blogs.push(
        <Blog image={post.node.featuredImage?.node.publicUrl} 
        heading={post.node.title} 
        paragraph={post.node.excerpt} 
        full={post.node.content} />
        )
    })
  
  return (
  <Layout>
    <Seo title="Blog Page" />
    <h1>Blogz</h1>
    {blogs}
    -----
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

  export const BlogQuery = graphql`
  query {
    allWpPost {
      edges {
        node {
          id
          title
          content
          excerpt
          featuredImage {
            node {
              publicUrl
            }
          }
        }
      }
    }
  }`

export default BlogPage

// allWpPost {
//   edges {
//     node {
//       id
//       title
//       content
//       excerpt
//     }
//   }
// }
// allWpMediaItem {
//   edges {
//     node {
//       id
//       filename
//       sourceUrl
//     }
//   }
// }