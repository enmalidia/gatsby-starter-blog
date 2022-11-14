import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { useBreakpoint } from "gatsby-plugin-breakpoints"
import styled from "@emotion/styled"
import ServiceTextInfoBlock from "./serviceTextInfoBlock"
import { Container1440 } from "../generalStyledComponents"

const Container = styled.div`
  display: grid;
  padding-top: 0;
  padding-bottom: 0;

  background-color: ${props =>
    props.dark ? "var(--color-ashford)" : "var(--color-white)"};

  @media (min-width: 768px) {
    padding-top: var(--spacing-16);
    padding-bottom: var(--spacing-16);
  }
`

const ContentContainer = styled.div`
  padding: var(--spacing-8) var(--spacing-4);
  @media (min-width: 576px) {
    padding-top: var(--spacing-10);
    padding-bottom: var(--spacing-10);
    padding-left: var(--spacing-10);
    padding-right: var(--spacing-10);
  }
  @media (min-width: 1024px) {
    padding-left: var(--spacing-16);
    padding-right: var(--spacing-16);
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
    flex-flow: wrap;
  }
`
const Grid = styled.div`
  display: grid;
  //height: 100%;
  max-height: 340px;
  overflow: hidden;
  .gatsby-image-wrapper {
    height: 340px;
  }

  @media (min-width: 768px) {
    .gatsby-image-wrapper {
      height: unset;
      border-radius: ${props =>
        props.rtl ? "6px 0px 0px 6px" : "0px 6px 6px 0px"};
    }

    /* padding-left: ${props =>
      props.rtl
        ? " calc(var(--spacing-10) - calc(var(--bs-gutter-x) * 0.5))"
        : "0px"};
    padding-right: ${props =>
      props.rtl
        ? "0px"
        : "calc(var(--spacing-10) - calc(var(--bs-gutter-x) * 0.5))"}; */

    max-height: 100%;
    height: 100%;
    .gatsby-image-wrapper div:first-of-type {
      padding-top: unset !important;
    }
  }

  @media (min-width: 1024px) {
    padding-left: ${props =>
      props.rtl
        ? " calc(var(--spacing-16) - calc(var(--bs-gutter-x) * 0.5))"
        : "0px"};
    padding-right: ${props =>
      props.rtl
        ? "0px"
        : "calc(var(--spacing-16) - calc(var(--bs-gutter-x) * 0.5))"};
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

const SideImageWithPaddingBlock = ({
  list,
  reverse,
  dark,
  header,
  title,
  description,
  details,
  rtl,
  image,
  extraPadding,
  children,
  anchorName,
}) => {
  const breakpoints = useBreakpoint()
  return (
    <Container dark={dark} id={anchorName}>
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
                <ServiceTextInfoBlock
                  list={list}
                  dark={dark}
                  header={header}
                  title={title}
                  description={description}
                  details={details}
                />
                {children}
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
                <ServiceTextInfoBlock
                  list={list}
                  dark={dark}
                  header={header}
                  title={title}
                  description={description}
                  details={details}
                />
                {children}
              </ContentContainer>
            </Col>
          )}
        </Row>
      </FrontContainer>
    </Container>
  )
}
SideImageWithPaddingBlock.defaultProps = {
  reverse: false,
  dark: false,
  rtl: false,
  list: [],
  extraPadding: false,
  anchorName: ''
}
SideImageWithPaddingBlock.propTypes = {}

export default SideImageWithPaddingBlock
