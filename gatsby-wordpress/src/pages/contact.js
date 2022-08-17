import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const ContactPage = ({data}) => {

    console.log(data);



return (<Layout>
    <Seo title="Page two" />
    <h1>Hi from the contact page</h1>
    <p>Welcome to contact</p>
    <Link to="/">Go back to the homepage</Link>
   <div dangerouslySetInnerHTML={{__html: data.wpPage.content}} />
  </Layout>
)
}

export const pageQuery = graphql`
query {
    wpPage(slug: {eq: "contact"}) {
      title
      content
      contentType {
        node {
          id
        }
      }
    }
  }`

export default ContactPage
