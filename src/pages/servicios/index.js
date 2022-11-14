import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import SideImageFullEightBlock from "../../components/services/sideImageFullEightBlock"
import BackgroundImageBlock from "../../components/services/backgroundImageBlock"
import SideImageWithPaddingBlock from "../../components/services/sideImageWithPaddingBlock"
import OneColumnTextInfoSection from "../../components/services/oneColumnTextInfoSection"
import TwoColumnTextInfoSection from "../../components/services/twoColumnTextInfoSection"
import AttentionDetails from "../../components/services/attentionDetails"
import ContentBlockWithImage from "../../components/common/ContentBoxWithImage"
import pageData from "./data.json"
import Qr from "../../components/QR"

import serv6QR from "../../images/services/qr-prenatal-center.png"
import serv1QR from "../../images/services/qr-images-center.png"
import serv2QR from "../../images/services/qr-nuclear-medicine.png"


const StyledAttentionDetails = styled(AttentionDetails)`
  & > div > div > div {
    margin-left: 0;
  }
`

const ServicePage = () => {
  const breakpoints = useBreakpoint()
  const data = useStaticQuery(graphql`
    query {
      serv1: file(relativePath: { eq: "services/serv1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      serv3: file(relativePath: { eq: "services/serv3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      serv4: file(relativePath: { eq: "services/serv4.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      serv6: file(relativePath: { eq: "services/serv6.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      serv8: file(relativePath: { eq: "services/serv8.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  const { serv1, serv2, serv3, serv4, serv5, serv6, serv7, serv8, serv9 } =
    pageData

  return (
    <Layout>
      <Seo title="Services" />
        <SideImageFullEightBlock
          list={serv1.list}
          header={serv1.header}
          title={serv1.title}
          description={serv1.description}
          details={serv1.details}
          image={data.serv1}
          reverse
          sticky
          imageHeight="728px"
          anchorName={serv1.anchorName}
        >
          <AttentionDetails {...serv1.contact} itemColor="background" />
          <Qr image={serv1QR} {...serv1.qr} />
        </SideImageFullEightBlock>
        <OneColumnTextInfoSection
          list={serv2.list}
          header={serv2.header}
          title={serv2.title}
          description={serv2.description}
          details={serv2.details}
          anchorName={serv2.anchorName}
        >
          <AttentionDetails
            list={serv2.contact.list}
            header={serv2.contact.header}
            typeList="row"
            itemColor="white"
          />
          <Qr image={serv2QR} {...serv2.qr} />
        </OneColumnTextInfoSection>

        {breakpoints.bsmd ? (
          <BackgroundImageBlock
            header={serv3.header}
            title={serv3.title}
            description={serv3.description}
            details={serv3.details}
            image={data.serv3}
            anchorName={serv3.anchorName}
            rtl
          >
            <AttentionDetails
              list={serv3.contact.list}
              header={serv3.contact.header}
              itemColor="background"
            />
          </BackgroundImageBlock>
        ) : (
          <ContentBlockWithImage
            header={serv3.header}
            title={serv3.title}
            description={serv3.description}
            details={serv3.details}
            image={data.serv3}
            anchorName={serv3.anchorName}
          >
            <AttentionDetails
              list={serv3.contact.list}
              header={serv3.contact.header}
              itemColor="background"
            />
          </ContentBlockWithImage>
        )}

        <SideImageWithPaddingBlock
          header={serv4.header}
          title={serv4.title}
          description={serv4.description}
          details={serv4.details}
          list={serv4.list}
          image={data.serv4}
          anchorName={serv4.anchorName}
          dark
          rtl
        >
          <StyledAttentionDetails
            list={serv4.contact.list}
            header={serv4.contact.header}
            color="white"
          />
        </SideImageWithPaddingBlock>
        <TwoColumnTextInfoSection
          list={serv5.list}
          listTitle={serv5.listTitle}
          header={serv5.header}
          title={serv5.title}
          description={serv5.description}
          details={serv5.details}
          anchorName={serv5.anchorName}
          color="white"
        >
          <AttentionDetails
            list={serv5.contact.list}
            header={serv5.contact.header}
            itemColor="background"
            typeList="row"
          />
        </TwoColumnTextInfoSection>
        <SideImageFullEightBlock
          list={serv6.list}
          header={serv6.header}
          title={serv6.title}
          description={serv6.description}
          details={serv6.details}
          image={data.serv6}
          anchorName={serv6.anchorName}
          dark
        >
          <StyledAttentionDetails
            list={serv6.contact.list}
            header={serv6.contact.header}
            color="white"
          />
          <Qr image={serv6QR} {...serv6.qr} />
        </SideImageFullEightBlock>
        <TwoColumnTextInfoSection
          list={serv7.list}
          header={serv7.header}
          title={serv7.title}
          description={serv7.description}
          details={serv7.details}
          color="white"
          anchorName={serv7.anchorName}
        >
          <AttentionDetails
            list={serv7.contact.list}
            header={serv7.contact.header}
            itemColor="background"
            typeList="row"
          />
        </TwoColumnTextInfoSection>
        {breakpoints.bsmd ? (
          <BackgroundImageBlock
            header={serv8.header}
            title={serv8.title}
            description={serv8.description}
            details={serv8.details}
            image={data.serv8}
            rtl
            anchorName={serv8.anchorName}
          >
            <AttentionDetails
              list={serv8.contact.list}
              header={serv8.contact.header}
              itemColor="background"
            />
          </BackgroundImageBlock>
        ) : (
          <ContentBlockWithImage
            header={serv8.header}
            title={serv8.title}
            description={serv8.description}
            details={serv8.details}
            image={data.serv8}
            rtl
            anchorName={serv8.anchorName}
            reverse
          >
            <AttentionDetails
              list={serv9.contact.list}
              header={serv9.contact.header}
              itemColor="background"
            />
          </ContentBlockWithImage>
        )}
        <TwoColumnTextInfoSection
          list={serv9.list}
          listTitle={serv9.listTitle}
          header={serv9.header}
          title={serv9.title}
          description={serv9.description}
          details={serv9.details}
          color="white"
          anchorName={serv9.anchorName}
        >
          <AttentionDetails
            list={serv9.contact.list}
            header={serv9.contact.header}
            itemColor="background"
            typeList="row"
          />
        </TwoColumnTextInfoSection>
    </Layout>
  )
}

export default ServicePage
