import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import Pause from "../../images/pause.png"

const Container = styled.div`
  display: flex;
  width: 100%;
  background: #eff3f8;
  flex-direction: column;
  border-radius: 8px;
  padding: 0;
`

const ContentContainer = styled.div`
  place-items: center;
  padding: 40px 23px;
  grid-area: 1/1;
  position: relative;
  justify-content: center;
  display: grid;
`
const Image = styled.img`
  object-fit: contain;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
const NewsItemVideo = ({ image, imageMobile }) => {
  const breakpoints = useBreakpoint()

  React.useEffect(() => {
  }, [breakpoints])
  return (
    <Container>
      <div style={{ display: "grid" }}>
        {breakpoints.sm ? (
          <GatsbyImage
            image={imageMobile.childImageSharp.gatsbyImageData}
            alt="image"
            style={{
              gridArea: "1/1",
              borderRadius: "8px",
            }}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            alt="image"
            style={{
              gridArea: "1/1",
              borderRadius: "8px",
            }}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        )}

        <ContentContainer>
          <Image src={Pause} />
        </ContentContainer>
      </div>
    </Container>
  )
}

NewsItemVideo.propTypes = {}

export default NewsItemVideo
