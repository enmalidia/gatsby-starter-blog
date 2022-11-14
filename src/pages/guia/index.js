import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import TwoColumnGuideContent from "../../components/guide/twoColumnGuideContent"
import pageData from "./data.json"

const GuidePage = () => {

  return (
    <Layout>
      <Seo title="Guide" />
<TwoColumnGuideContent {...pageData}/>
    </Layout>
  )
}

export default GuidePage
