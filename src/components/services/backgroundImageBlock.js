import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import styled from "@emotion/styled"
import ServiceTextInfoBlock from "./serviceTextInfoBlock"
import { Container1440 } from "../generalStyledComponents"

const ContentContainer = styled.div`
  padding: var(--spacing-8);
  background-color: var(--color-white);
  border-radius: 6px;
  max-width: 747px;
  margin-top: var(--spacing-16);
  margin-bottom: var(--spacing-7);
  @media (min-width: 576px) {
    padding: var(--spacing-15);
  }
  @media (min-width: 1024px) {
    margin-top: var(--spacing-15);
    margin-bottom: var(--spacing-15);
    padding: var(--spacing-15);
  }
`

/* const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Row = styled.div`
  flex-flow: ${props => (props.reverse ? "column-reverse" : "wrap")};
  @media (min-width: 576px) {
    flex-flow: wrap;
  }
` */

const GridContent = styled(Container1440)`
  grid-area: 1/1;
  position: relative;
  place-items: center;
  display: flex;
  justify-content: ${props => (props.rtl ? "right" : "left")};
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  @media (min-width: 576px) {
    padding-right: ${props =>
      props.rtl ? "var(--spacing-15) !important" : "auto"};
    padding-left: ${props =>
      props.rtl ? "auto" : "var(--spacing-15) !important"};
  }
`
const Grid = styled.div`
  display: grid;
  .gatsby-image-wrapper div:first-of-type {
    padding-top: unset !important;
  }
`

const BackgroundImageBlock = ({
  list,
  dark,
  header,
  title,
  description,
  details,
  image,
  rtl,
  children,
  anchorName,
  imgStyle
}) => {
  return (
    <Grid id={anchorName}>
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        style={{
          gridArea: "1/1",
        }}
        layout="fullWidth"
        aspectRatio={16 / 9}
        alt=""
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
        imgStyle={imgStyle}
      />
      <GridContent rtl={rtl}>
        <ContentContainer>
          <ServiceTextInfoBlock
            list={list}
            dark={dark}
            header={header}
            title={title}
            description={description}
            details={details}
            anchorName={anchorName}
          />
          {children}
        </ContentContainer>
      </GridContent>
    </Grid>
  )
}
BackgroundImageBlock.defaultProps = {
  reverse: false,
  dark: false,
  list: [],
  rtl: false,
  anchorName: "",
}
BackgroundImageBlock.propTypes = {}

export default BackgroundImageBlock
