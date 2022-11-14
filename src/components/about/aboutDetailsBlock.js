import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { useBreakpoint } from "gatsby-plugin-breakpoints"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Container1440 } from "../generalStyledComponents"
import DetailsBlock from "./detailsBlock"

const Container = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  display: grid;

  background-color: ${props =>
    props.dark ? "var(--color-ashford)" : "var(--color-white)"};

  @media (min-width: 576px) {
    /* padding-top: var(--spacing-11); */
    padding-bottom: var(--spacing-16);
  }
`

const ContentContainer = styled.div`
  padding: 0px var(--spacing-4) 0px var(--spacing-4);
  & > div:not(:last-of-type) {
    margin-bottom: var(--spacing-7);
  }
  @media (min-width: 576px) {
    /* padding-bottom: var(--spacing-10);
    padding-top: var(--spacing-10); */
    /*  padding-left: ${props => (props.rtl ? "var(--spacing-10)" : "0px")};
    padding-right: ${props => (props.rtl ? "0px" : "var(--spacing-10)")}; */
    & > div:not(:last-of-type) {
      margin-bottom: var(--spacing-11);
    }
  }
  @media (min-width: 992px) {
    padding-bottom: 0px;
    padding-top: 0px;
    padding-left: ${props => (props.rtl ? "var(--spacing-10)" : "0px")};
    padding-right: ${props => (props.rtl ? "0px" : "var(--spacing-10)")};
  }
  @media (min-width: 1440px) {
    padding-left: ${props => (props.rtl ? "var(--spacing-16)" : "0px")};
    padding-right: ${props => (props.rtl ? "0px" : "var(--spacing-16)")};
  }
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Row = styled.div`
  flex-flow: ${props => (props.reverse ? "column-reverse" : "wrap")};
  @media (min-width: 768px) {
    width: 100%;
    flex-flow: wrap;
  }
`
const Grid = styled.div`
  display: none;
  max-height: 340px;
  overflow: hidden;

  @media (min-width: 768px) {
    display: grid;
    padding-right: var(--spacing-10);
    padding-left: var(--spacing-10);
    max-height: 100%;
    height: 100%;
    .gatsby-image-wrapper {
      border-radius: 6px;
    }
    .gatsby-image-wrapper div:first-of-type {
      padding-top: unset !important;
    }
  }

  @media (min-width: 992px) {
    display: grid;
    padding-right: var(--spacing-16);
    padding-left: var(--spacing-16);
  }
`

const BackContainer = styled.div`
  grid-area: 1/1;
  display: flex;
`

const FrontContainer = styled(Container1440)`
  grid-area: 1/1;
  display: flex;
`

const Subsection = styled.div`
  width: 50%;
`

const AboutDetailsBlock = ({ reverse, items, rtl, image, extraPadding }) => {
  const breakpoints = useBreakpoint()
  return (
    <Container>
      <BackContainer>
        <Subsection>
          {breakpoints.bsmd && !rtl ? (
            <Grid extraPadding={extraPadding} rtl={rtl}>
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                style={{
                  gridArea: "1/1",
                }}
                layout="constrained"
                aspectRatio={3 / 1}
                alt=""
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
              />
            </Grid>
          ) : null}
        </Subsection>
        <Subsection>
          {breakpoints.bsmd && rtl ? (
            <Grid extraPadding={extraPadding} rtl={rtl}>
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                style={{
                  gridArea: "1/1",
                }}
                layout="constrained"
                aspectRatio={3 / 1}
                alt=""
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
              />
            </Grid>
          ) : null}
        </Subsection>
      </BackContainer>
      <FrontContainer>
        <Row className="row g-0" reverse={reverse}>
          {rtl ? (
            <Col className="col-12 col-md-6">
              <ContentContainer rtl={rtl}>
                {items.map((item, index) => (
                  <DetailsBlock key={index} {...item} />
                ))}
              </ContentContainer>
            </Col>
          ) : (
            <Col className="col-12 col-md-6">
              {!breakpoints.bsmd && (
                <Grid extraPadding={extraPadding} rtl={rtl}>
                  <GatsbyImage
                    image={image.childImageSharp.gatsbyImageData}
                    style={{
                      gridArea: "1/1",
                    }}
                    layout="constrained"
                    aspectRatio={3 / 1}
                    alt=""
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                  />
                </Grid>
              )}
            </Col>
          )}
          {rtl ? (
            <Col className="col-12 col-md-6">
              {!breakpoints.bsmd && (
                <Grid extraPadding={extraPadding} rtl={rtl}>
                  <GatsbyImage
                    image={image.childImageSharp.gatsbyImageData}
                    style={{
                      gridArea: "1/1",
                    }}
                    layout="constrained"
                    aspectRatio={3 / 1}
                    alt=""
                    placeholder="blurred"
                    formats={["auto", "webp", "avif"]}
                  />
                </Grid>
              )}
            </Col>
          ) : (
            <Col className="col-12 col-md-6">
              <ContentContainer rtl={rtl}>
                {items.map((item, index) => (
                  <DetailsBlock key={index} {...item} />
                ))}
              </ContentContainer>
            </Col>
          )}
        </Row>
      </FrontContainer>
    </Container>
  )
}
AboutDetailsBlock.defaultProps = {
  reverse: false,
  rtl: false,
  list: [],
  extraPadding: false,
}
AboutDetailsBlock.propTypes = {}

export default AboutDetailsBlock
