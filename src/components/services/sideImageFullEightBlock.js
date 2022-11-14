import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import ServiceTextInfoBlock from "./serviceTextInfoBlock"
import {
  Container1440,
  ContainerServiceTextInfoBlock,
} from "../generalStyledComponents"
const Container = styled.div`
  padding-top: 0;
  padding-bottom: 0;

  background-color: ${props =>
    props.dark
      ? "var(--color-ashford)"
      : props.color
      ? `var(--color-${props.color})`
      : "var(--color-white)"};
  display: grid;
`
const ContentContainer = styled(ContainerServiceTextInfoBlock)`
  @media (min-width: 768px) {
    padding-left: ${props => (props.rtl ? "var(--spacing-10)" : "0px")};
    padding-right: ${props => (props.rtl ? "0px" : "var(--spacing-10)")};
  }
  @media (min-width: 1024px) {
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
  flex-flow: ${props => (props.reverse ? "column-reverse" : "wrap")}; /* 
  background-color: ${props =>
    props.dark ? "var(--color-ashford)" : "var(--color-white)"}; */
  @media (min-width: 768px) {
    width: 100%;
    flex-flow: wrap;
  }
`
const Grid = styled.div`
  display: grid;
  max-height: 340px;
  overflow: hidden;
  .gatsby-image-wrapper {
    height: 340px;
  }

  @media (min-width: 576px) {
    // padding-right: calc(var(--spacing-10) - calc(var(--bs-gutter-x) * 0.5));
  }

  @media (min-width: 768px) {
    padding-left: ${props => (props.rtl ? "var(--spacing-10)" : "0px")};
    padding-right: ${props => (props.rtl ? "0px" : "var(--spacing-10)")};
    max-height: 100%;
    height: 100%;
    width: 100%;
    .gatsby-image-wrapper {
      height: unset;
    }
    .gatsby-image-wrapper div:first-of-type {
      padding-top: unset !important;
    }
  }

  @media (min-width: 1024px) {
    padding-left: ${props => (props.rtl ? "var(--spacing-16)" : "0px")};
    padding-right: ${props => (props.rtl ? "0px" : "var(--spacing-16)")};
    //padding-right: calc(var(--spacing-16) - calc(var(--bs-gutter-x) * 0.5));
  }
`

const GridImage = styled(Grid)`
  @media (min-width: 768px) {
    top: 0px;
    height: ${props =>
      props.sticky
        ? props.imageHeight
          ? props.imageHeight
          : "500px"
        : "100%"};
    position: ${props => (props.sticky ? "sticky" : "block")};
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
const SideImageFullEightBlock = ({
  list,
  listTitle,
  reverse,
  dark,
  color,
  header,
  title,
  description,
  details,
  image,
  rtl,
  children,
  sticky,
  imageHeight,
  anchorName,
  imgStyle,
}) => {
  const breakpoints = useBreakpoint()

  return (
    <Container dark={dark} color={color} id={anchorName}>
      <BackContainer>
        <Subsection>
          {breakpoints.bsmd && !rtl ? (
            <GridImage rtl={rtl} sticky={sticky} imageHeight={imageHeight}>
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                style={{
                  gridArea: "1/1",
                }}
                layout="fullWidth"
                alt=""
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
                imgStyle={imgStyle}
              />
            </GridImage>
          ) : null}
        </Subsection>
        <Subsection>
          {breakpoints.bsmd && rtl ? (
            <GridImage rtl={rtl} sticky={sticky} imageHeight={imageHeight}>
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                style={{
                  gridArea: "1/1",
                }}
                layout="fullWidth"
                alt=""
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
                imgStyle={imgStyle}
              />
            </GridImage>
          ) : null}
        </Subsection>
      </BackContainer>

      <FrontContainer>
        <Row className="row g-0" reverse={reverse}>
          {rtl ? (
            <>
              <Col className="col-12 col-md-6">
                <ContentContainer rtl={rtl}>
                  <ServiceTextInfoBlock
                    list={list}
                    listTitle={listTitle}
                    dark={dark}
                    header={header}
                    title={title}
                    description={description}
                    details={details}
                  />
                  {children}
                </ContentContainer>
              </Col>
              <Col className="col-12 col-md-6">
                {!breakpoints.bsmd && (
                  <GridImage
                    rtl={rtl}
                    sticky={sticky}
                    imageHeight={imageHeight}
                  >
                    <GatsbyImage
                      image={image.childImageSharp.gatsbyImageData}
                      style={{
                        gridArea: "1/1",
                      }}
                      layout="fullWidth"
                      alt=""
                      placeholder="blurred"
                      formats={["auto", "webp", "avif"]}
                    />
                  </GridImage>
                )}
              </Col>
            </>
          ) : (
            <>
              <Col className="col-12 col-md-6">
                {!breakpoints.bsmd && (
                  <GridImage
                    rtl={rtl}
                    sticky={sticky}
                    imageHeight={imageHeight}
                  >
                    <GatsbyImage
                      image={image.childImageSharp.gatsbyImageData}
                      style={{
                        gridArea: "1/1",
                      }}
                      layout="fullWidth"
                      alt=""
                      placeholder="blurred"
                      formats={["auto", "webp", "avif"]}
                    />
                  </GridImage>
                )}
              </Col>
              <Col className="col-12 col-md-6">
                <ContentContainer rtl={rtl}>
                  <ServiceTextInfoBlock
                    list={list}
                    listTitle={listTitle}
                    dark={dark}
                    header={header}
                    title={title}
                    description={description}
                    details={details}
                  />
                  {children}
                </ContentContainer>
              </Col>
            </>
          )}
        </Row>
      </FrontContainer>
    </Container>
  )
}
SideImageFullEightBlock.defaultProps = {
  reverse: false,
  dark: false,
  list: [],
  rtl: false,
  anchorName: "",
}
SideImageFullEightBlock.propTypes = {}

export default SideImageFullEightBlock
