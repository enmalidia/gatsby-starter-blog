import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import { graphql } from "gatsby"
import { Container1440 } from "../../components/generalStyledComponents"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import TimeLineBlock from "../../components/about/timeLineBlock"
import TimeLineVariantBlock from "../../components/about/timeLineVariantBlock"
import pageData from "./data.json"
import { parseText } from "../../utils/text"
import Fade from "react-reveal/Fade"

const ContainerGrey = styled.div`
  background-color: var(--color-background);
  margin-bottom: 0;
`
const Container = styled.div`
  background-color: var(--color-white);
  padding: var(--spacing-7) var(--spacing-4);

  @media (min-width: 992px) {
    padding: var(--spacing-16);
  }
`
const DetailsVision = styled.div`
  display: block;
`
const DetailsVisionHeader = styled.p`
  font: var(--typo-label-s);
  color: var(--color-sea);
  line-height: var(--line-height-1);
`

const DetailsVisionText = styled.p`
  line-height: var(--line-height-5);

  @media (min-width: 992px) {
    margin: 0;
    line-height: var(--line-height-8);
  }
`

const DetailsHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px -16px 0 -16px;

  @media (min-width: 992px) {
    flex-direction: row;
    margin: 80px -40px 0 -40px;
  }
`

const DetailsHistory = styled.div`
  padding: 0 16px;

  @media (min-width: 992px) {
    width: 50%;
    max-width: 50%;
    min-width: 50%;
    padding: 0 40px;
  }
`

const DetailsHistoryHeader = styled.p`
  font: var(--typo-heading-m);
  color: var(--color-sea);
  line-height: var(--line-height-6);
`

const DetailsHistoryText = styled.p`
  font: var(--typo-body-l);
  line-height: var(--line-height-4);
`

const ContentContainer = styled(Container1440)`
  padding: var(--spacing-8) var(--spacing-4) var(--spacing-11) var(--spacing-4);

  @media (min-width: 992px) {
    padding: var(--spacing-16);
  }

  @media (min-width: 1440px) {
    padding: var(--spacing-16);
  }
`

const Header = styled.div`
  line-height: var(--line-height-1);
  text-transform: uppercase;
  color: var(--color-sea);
  margin: 0px 0px;
`

const Title = styled.div`
  line-height: var(--line-height-11);
  color: var(--color-bodyfont);
  margin: var(--spacing-4) 0 0 0;
`

const TimeLineContainer = styled.div`
  & > div {
    padding-bottom: var(--spacing-7);
    margin-bottom: var(--spacing-7);
    border-bottom: 1px solid var(--color-border);
  }
  @media (min-width: 768px) {
    & > div {
      padding-bottom: var(--spacing-11);
      margin-bottom: var(--spacing-11);
      border-bottom: 1px solid var(--color-border);
    }
  }
  .about-img1 {
    border-radius: 4px;
    /* flex-shrink: 0;
    width: 100%; */
    @media (min-width: 768px) {
      /*  width: 100%; */
      height: 240px;
    }
    @media (min-width: 1024px) {
      flex-shrink: 0;
      width: 450px;
    }
  }

  .about-img2 {
    border-radius: 4px;
    /* flex-shrink: 0; */
    width: 100%;
    @media (min-width: 768px) {
      /*  width: 100%; */
      min-width: 30%;
      height: 240px;
    }
    @media (min-width: 1024px) {
      flex-shrink: 0;
      width: 450px;
    }
  }

  .about-img3,
  .about-img5 {
    border-radius: 4px;
    /* flex-shrink: 0;
    width: 100%; */
    @media (min-width: 768px) {
      min-width: 30%;
      height: 313px;
    }
    @media (min-width: 1024px) {
      flex-shrink: 0;
      width: 608px;
    }
  }

  .about-img4 {
    border-radius: 4px;
    /* flex-shrink: 0;
    width: 100%; */
    @media (min-width: 768px) {
      min-width: 30%;
      height: 278px;
    }
    @media (min-width: 1024px) {
      flex-shrink: 0;
      width: 450px;
    }
  }
`

const Subtitle = styled.p`
  /* Headings DESKTOP/Heading S */
  line-height: 28px;
  color: var(--color-sea);
  margin: var(--spacing-7) 0px 0px 0px;
  /*     @media (min-width: 576px) {
      margin-bottom: var(--spacing-9);
    } */
`

const SubtitleDetails = styled.p`
  line-height: var(--line-height-4);
  margin: var(--spacing-4) 0px var(--spacing-11) 0px;

  @media (min-width: 768px) {
    margin: var(--spacing-4) 0px var(--spacing-16-esp1) 0px;
  }
`

const Conclusion = styled.p`
  font-weight: 400 !important;
  color: var(--color-sea);
  line-height: var(--line-height-4);
  margin: 0;
  padding: 0;

  @media (min-width: 992px) {
    line-height: var(--line-height-5);
  }
`

const AboutPage = ({ data: { detailImg } }) => {
  return (
    <Layout>
      <Seo title="About" />
      <ContainerGrey>
        <ContentContainer>
          <Header className="typo-label-s">{pageData.header}</Header>
          <Title className="typo-heading-xl">{pageData.title}</Title>
          <Subtitle className="typo-heading-s">{pageData.subtitle}</Subtitle>
          <SubtitleDetails className="typo-body-l">
            {pageData.description}
          </SubtitleDetails>
          <TimeLineContainer>
            <Fade bottom>
              <TimeLineVariantBlock {...pageData.timeline[0]}>
                <StaticImage
                  src="../../images/about/1.png"
                  className="about-img1"
                  alt="img1"
                  layout="fullWidth"
                />
              </TimeLineVariantBlock>
            </Fade>
            <Fade bottom>
              <TimeLineBlock {...pageData.timeline[1]} rtl>
                <StaticImage
                  src="../../images/about/5.png"
                  className="about-img5"
                  alt="img5"
                  layout="fullWidth"
                />
              </TimeLineBlock>
            </Fade>
            <Fade bottom>
              <TimeLineBlock {...pageData.timeline[2]}>
                <StaticImage
                  src="../../images/about/2.png"
                  className="about-img2"
                  alt="img2"
                  layout="fullWidth"
                />
              </TimeLineBlock>
            </Fade>
            <Fade bottom>
              <TimeLineBlock {...pageData.timeline[3]} rtl>
                <StaticImage
                  src="../../images/about/3.png"
                  className="about-img3"
                  alt="img3"
                  layout="fullWidth"
                />
              </TimeLineBlock>
            </Fade>
            <Fade bottom>
              <TimeLineBlock {...pageData.timeline[4]}>
                <StaticImage
                  src="../../images/about/4.png"
                  className="about-img4"
                  alt="img4"
                  layout="fullWidth"
                />
              </TimeLineBlock>
            </Fade>

            <Conclusion className="typo-heading-s">
              {pageData.conclusion}
            </Conclusion>
          </TimeLineContainer>
        </ContentContainer>
      </ContainerGrey>
      <Container>
        <DetailsVision>
          <DetailsVisionHeader>
            {pageData.details.vision.header}
          </DetailsVisionHeader>
          <DetailsVisionText className="typo-heading-l">
            “{pageData.details.vision.text}”
          </DetailsVisionText>
        </DetailsVision>
        <DetailsHistoryContainer>
          <DetailsHistory>
            <DetailsHistoryHeader>
              {pageData.details.history[0].header}
            </DetailsHistoryHeader>
            <DetailsHistoryText>
              {parseText(pageData.details.history[0].text)}
            </DetailsHistoryText>
          </DetailsHistory>
          <DetailsHistory>
            <DetailsHistoryHeader>
              {pageData.details.history[1].header}
            </DetailsHistoryHeader>
            <DetailsHistoryText>
              {parseText(pageData.details.history[1].text)}
            </DetailsHistoryText>
          </DetailsHistory>
        </DetailsHistoryContainer>
      </Container>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query {
    detailImg: file(relativePath: { eq: "about/detail1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
