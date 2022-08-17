import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const JobberBloggerPage = ({data}) => {

    console.log(data);



return (<Layout>
    <Seo title="Jobber Blogger" />
    <h1>Hi from the jobber blogger page</h1>
    <p>Welcome to jobber blogger</p>
    <Link to="/">Go back to the homepage</Link>
   <div dangerouslySetInnerHTML={{__html: data.wpPage.content}} />
  </Layout>
)
}

export const pageJobberBloggerQuery = graphql`
query {
    wpPage(slug: {eq: "the-jobber-blogger"}) {
      title
      content
      contentType {
        node {
          id
        }
      }
    }
  }`

export default JobberBloggerPage
