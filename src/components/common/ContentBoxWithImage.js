import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import styled from "@emotion/styled"
import { Container1440 } from "../generalStyledComponents"
import ServiceTextInfoBlock from "../services/serviceTextInfoBlock"

const ContentContainer = styled.div`
  background-color: var(--color-white);
  border-radius: 6px;
  max-width: 747px;
  margin-top: var(--spacing-8);
  padding: 0px var(--spacing-4) 0px var(--spacing-4);
  padding-bottom: ${props => (!props.reverse ? "var(--spacing-8)" : "0px")};

  /* margin-bottom: var(--spacing-8); */
  @media (min-width: 576px) {
    padding: var(--spacing-10);
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

const LayoutContent = styled(Container1440)`
  place-items: center;
  display: flex;
  /*   padding-left: var(--spacing-4);
  padding-right: var(--spacing-4); */
  @media (min-width: 576px) {
    /* padding-right: ${props =>
      props.rtl ? "var(--spacing-15) !important" : "auto"};
    padding-left: ${props =>
      props.rtl ? "auto" : "var(--spacing-15) !important"}; */
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? "column-reverse" : "column")};
  .gatsby-image-wrapper {
    /*  padding-top: unset !important; */
    height: 340px;
    margin-top: ${props => (props.reverse ? "var(--spacing-8)" : "0px")};
    @media (min-width: 756px) {
      height: unset;
    }
  }
`

const ContentBlockWithImage = ({
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
  reverse,
  imgStyle,
}) => {
  return (
    <Container id={anchorName} reverse={reverse}>
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        layout="fullWidth"
        aspectRatio={16 / 9}
        alt=""
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
        imgStyle={imgStyle}
      />
      <LayoutContent>
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
      </LayoutContent>
    </Container>
  )
}
ContentBlockWithImage.defaultProps = {
  reverse: false,
  dark: false,
  list: [],
  rtl: false,
  anchorName: "",
}
ContentBlockWithImage.propTypes = {}

export default ContentBlockWithImage
