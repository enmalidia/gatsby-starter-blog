import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import AttentionDetails from "../../components/services/attentionDetails"
import styled from "@emotion/styled"

import { useStaticQuery, graphql } from "gatsby"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

// Import Swiper styles
import "swiper/css"
import SideImageFullEightBlock from "../../components/services/sideImageFullEightBlock"
import BackgroundImageBlock from "../../components/services/backgroundImageBlock"
import SideImageWidthPaddingBlock from "../../components/services/sideImageWithPaddingBlock"
import pageData from "./data.json"
import OneColumnTextInfoSection from "../../components/services/oneColumnTextInfoSection"
import TwoColumnTextInfoSection from "../../components/services/twoColumnTextInfoSection"
import { StaticImage } from "gatsby-plugin-image"
import ContentBlockWithImage from "../../components/common/ContentBoxWithImage"

import spe10QR from "../../images/specialities/qr-pediatria.png";
import Qr from "../../components/QR"

const StyledAttentionDetails = styled(AttentionDetails)`
  & > div > div > div {
    margin-left: 0;
  }
`

const SpecialitiesPage = () => {
  const breakpoints = useBreakpoint()
  const data = useStaticQuery(graphql`
    query {
      spe1: file(relativePath: { eq: "specialities/spe1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      spe2: file(relativePath: { eq: "specialities/spe2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      spe4: file(relativePath: { eq: "specialities/spe4.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      spe6: file(relativePath: { eq: "specialities/spe6.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      spe8: file(relativePath: { eq: "specialities/spe8.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      spe10: file(relativePath: { eq: "specialities/spe10.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)
  const { spe1, spe2, spe3, spe4, spe5, spe6, spe7, spe8, spe9, spe10, spe11 } =
    pageData
  return (
    <Layout>
      <Seo title="Services" />
      <SideImageFullEightBlock
        header={spe1.header}
        title={spe1.title}
        description={spe1.description}
        details={spe1.details}
        image={data.spe1}
        anchorName={spe1.anchorName}
        rtl
        imgStyle={{ objectPosition: "top" }}
      />
      <SideImageWidthPaddingBlock
        header={spe2.header}
        title={spe2.title}
        description={spe2.description}
        details={spe2.details}
        image={data.spe2}
        anchorName={spe2.anchorName}
        dark
        reverse
      >
        <StyledAttentionDetails
          list={spe2.contact.list}
          header={spe2.contact.header}
          typeList="row"
          color="white"
        />
      </SideImageWidthPaddingBlock>
      <OneColumnTextInfoSection
        header={spe3.header}
        title={spe3.title}
        description={spe3.description}
        details={spe3.details}
        anchorName={spe3.anchorName}
        list={spe3.list}
      />
      {breakpoints.bsmd ? (
        <BackgroundImageBlock
          header={spe4.header}
          title={spe4.title}
          description={spe4.description}
          details={spe4.details}
          list={spe4.list}
          image={data.spe4}
          anchorName={spe4.anchorName}
        />
      ) : (
        <ContentBlockWithImage
          header={spe4.header}
          title={spe4.title}
          description={spe4.description}
          details={spe4.details}
          list={spe4.list}
          image={data.spe4}
          anchorName={spe4.anchorName}
        />
      )}
      {!breakpoints.bsmd && (
        <StaticImage
          src="../../images/specialities/spe11.png"
          alt="img11"
          layout="fullWidth"
        />
      )}
      <TwoColumnTextInfoSection
        header={spe5.header}
        title={spe5.title}
        description={spe5.description}
        details={spe5.details}
        list={spe5.list}
        color="white"
        anchorName={spe5.anchorName}
      >
        <AttentionDetails
          list={spe5.contact.list}
          header={spe5.contact.header}
          typeList="row"
          itemColor="background"
        />
      </TwoColumnTextInfoSection>
      <SideImageFullEightBlock
        list={spe6.list}
        header={spe6.header}
        title={spe6.title}
        description={spe6.description}
        details={spe6.details}
        image={data.spe6}
        dark
        anchorName={spe6.anchorName}
      >
        {/*<StyledAttentionDetails
          list={spe6.contact.list}
          header={spe6.contact.header}
          typeList="row"
          color="white"
        />*/}
      </SideImageFullEightBlock>
      <TwoColumnTextInfoSection
        header={spe7.header}
        title={spe7.title}
        description={spe7.description}
        details={spe7.details}
        list={spe7.list}
        color="white"
        anchorName={spe7.anchorName}
      >
        {/*<AttentionDetails
          list={spe7.contact.list}
          header={spe7.contact.header}
          typeList="row"
          itemColor="background"
          order={true}
        />*/}
      </TwoColumnTextInfoSection>

      {breakpoints.bsmd ? (
        <BackgroundImageBlock
          header={spe8.header}
          title={spe8.title}
          description={spe8.description}
          details={spe8.details}
          list={spe8.list}
          image={data.spe8}
          anchorName={spe8.anchorName}
        >
          {/*<AttentionDetails
            list={spe8.contact.list}
            header={spe8.contact.header}
            typeList="row"
            itemColor="background"
          />*/}
        </BackgroundImageBlock>
      ) : (
        <ContentBlockWithImage
          header={spe8.header}
          title={spe8.title}
          description={spe8.description}
          details={spe8.details}
          list={spe8.list}
          image={data.spe8}
          anchorName={spe8.anchorName}
        >
          {/*<AttentionDetails
            list={spe8.contact.list}
            header={spe8.contact.header}
            typeList="row"
            itemColor="background"
          />*/}
        </ContentBlockWithImage>
      )}

      <OneColumnTextInfoSection
        header={spe9.header}
        title={spe9.title}
        description={spe9.description}
        details={spe9.details}
        color="white"
        anchorName={spe9.anchorName}
      />
      <SideImageFullEightBlock
        header={spe10.header}
        title={spe10.title}
        description={spe10.description}
        details={spe10.details}
        image={data.spe10}
        color="background"
        anchorName={spe10.anchorName}
        rtl
        reverse
      >
        <AttentionDetails
          list={spe10.contact.list}
          header={spe10.contact.header}
          typeList="row"
          itemColor="white"
        />
        <Qr image={spe10QR} {...spe10.qr} />
      </SideImageFullEightBlock>
      <TwoColumnTextInfoSection
        header={spe11.header}
        title={spe11.title}
        listTitle={spe11.listTitle}
        description={spe11.description}
        details={spe11.details}
        list={spe11.list}
        color="white"
        anchorName={spe11.anchorName}
      />
    </Layout>
  )
}

export default SpecialitiesPage
