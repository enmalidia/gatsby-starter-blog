import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"

const Container = styled.div`
  display: flex;
  width: 100%;
  background: #eff3f8;
  flex-direction: column;
  border-radius: 8px;
  padding: 0;
`

const Description = styled.p`
  font-family: Untitled Sans;
  font-style: normal;
  font-weight: normal;
  color: #002554;
  margin: 8px 0px;
  font-size: 18px;
  line-height: 109.31%;

  @media (min-width: 576px) {
    font-size: 16px;
    line-height: 135%;
  }
`

const Category = styled.div`
  font-family: Untitled Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 109.31%;
  text-transform: uppercase;
  color: #3eb1c8;
  border-radius: 2px;
  width: fit-content;
  padding: 4px 8px;

  @media (min-width: 576px) {
    font-size: 12px;
    line-height: 16px;
    font-weight: normal;
    color: #002554;
    background: #cbebff;
    border-radius: 2px;
  }
`

const ItemImage = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

const TextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  text-align: left;
  margin: 0;
`
const NewsItem = ({ image }) => {
  return (
    <Container>
      <div>
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt="image"
          style={{
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>

      <TextContainer>
        <Description>
          Let’s talk about diabetes: A guide to your Ashford resources & more
        </Description>
        <Category>Category</Category>
      </TextContainer>
    </Container>
  )
}

NewsItem.propTypes = {}

export default NewsItem
