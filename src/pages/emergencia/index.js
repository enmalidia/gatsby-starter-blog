import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import SideImageFullEightBlock from "../../components/services/sideImageFullEightBlock"
import BackgroundImageBlock from "../../components/services/backgroundImageBlock"
import OneColumnTextInfoSection from "../../components/services/oneColumnTextInfoSection"
import pageData from "./data.json"
import AttentionDetails from "../../components/services/attentionDetails"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import ContentBlockWithImage from "../../components/common/ContentBoxWithImage"
const Details = styled.p`
  font: var(--typo-heading-s);
  line-height: var(--line-height-5);
`

const AlignItemsCenter = styled(AttentionDetails)`
  & div {
    align-items: center;
  }
`

const EmergencyPage = () => {
  const breakpoints = useBreakpoint()
  const data = useStaticQuery(graphql`
    query {
      eme2: file(relativePath: { eq: "emergency/eme2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      eme3: file(relativePath: { eq: "emergency/eme3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)
  const { eme1, eme2, eme3 } = pageData
  return (
    <Layout>
      <Seo title="Services" />

      <OneColumnTextInfoSection
        list={eme1.list}
        header={eme1.header}
        title={eme1.title}
        description={eme1.description}
      >
        <Details>{eme1.detail}</Details>

        <AlignItemsCenter {...eme1.contact} typeList="row" itemColor="white" />
      </OneColumnTextInfoSection>
      {breakpoints.bsmd ? (
        <BackgroundImageBlock
          list={eme2.list}
          header={eme2.header}
          title={eme2.title}
          description={eme2.description}
          details={eme2.details}
          image={data.eme2}
          imgStyle={{ objectPosition: "top" }}
          rtl
        />
      ) : (
        <ContentBlockWithImage
          list={eme2.list}
          header={eme2.header}
          title={eme2.title}
          description={eme2.description}
          details={eme2.details}
          image={data.eme2}
          imgStyle={{ objectPosition: "left" }}
        />
      )}
      <SideImageFullEightBlock
        list={eme3.list}
        header={eme3.header}
        title={eme3.title}
        description={eme3.description}
        details={eme3.details}
        image={data.eme3}
        rtl
      />
    </Layout>
  )
}

export default EmergencyPage
