import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { Link } from "gatsby"

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  left: 48px;
  top: 48px;
  border-radius: 8px;
  margin: 16px 0px 16px 0px;
  width: 100%;
  max-width: 400px;
`

const TextContainer = styled.div`
  border-radius: 8px;
  place-items: end;
  padding: 40px 23px;
  grid-area: 1/1;
  position: relative;
  justify-content: left;
  display: flex;

  @media (min-width: 992px) {
    &:hover {
      .story-details {
        opacity: 0;
        bottom: -30px;
      }
      .story-actions {
        opacity: 1;
        bottom: 0px;
      }
      .story-gradient {
        opacity: 1;
      }
    }
  }
`

const CardLinkWrapper = styled.div`
  grid-area: 1/1;
  position: relative;
  a {
    &:hover,
    &:link,
    &:visited,
    &:active {
      text-decoration: none;
    }

    & > div {
      width: 100%;
      height: 100%;
    }
  }
`

const SimpleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: end;
`
const Details = styled.div`
  position: absolute;
  text-align: left;
  opacity: 1;
  bottom: 0px;
  transition: ease opacity 0.8s, ease bottom 0.6s;
`
const AuthorName = styled.p`
  font-family: var(--font-family-primary);
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: var(--color-frost);
  margin: 0px 0px var(--spacing-2) 0px;

  @media (min-width: 576px) {
    font-size: var(--font-size-9);
    line-height: 40px;
    font-style: normal;
    font-weight: normal;
  }
`

const StoryType = styled.p`
  color: var(--color-white);
  font-family: var(--font-family-secondary);
  font-style: normal;
  font-weight: normal;
  font-size: var(--font-size-5);
  line-height: 26px;
  margin: 0px 0px;

  @media (min-width: 576px) {
    font: var(--typo-label-l);
    font-style: normal;
    font-weight: normal;
    line-height: var(--line-height-1);
  }
`

const ButtonLink = styled.a`
  position: absolute;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--color-sea);
  border-radius: 4px;
  line-height: var(--line-height-3);
  text-align: center;
  color: var(--color-white);
  cursor: pointer;
  opacity: 0;
  bottom: -30px;
  transition: ease opacity 0.6s, ease bottom 0.3s,
    background-color 0.6s ease-out;

  &:hover {
    background-color: var(--color-ashford);
  }

  &:hover,
  &:link,
  &:visited,
  &:active {
    color: var(--color-white);
    text-decoration: none;
  }
`
const GridContainer = styled.div`
  display: grid;
  border-radius: "8px";
  width: 100%;
`

const Gradient = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) -20.28%,
    #000000 112.05%
  );
  margin: -40px -23px;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: 8px;
  opacity: 0.5;
  transition: ease opacity 0.6s;
`

const StoryItem = ({ image, author, type, buttonText, buttonLink }) => {
  const breakpoints = useBreakpoint()
  return (
    <ItemContainer>
      <GridContainer>
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt="image"
          style={{
            gridArea: "1/1",
            borderRadius: "8px",
            height: "498px",
            width: "100%",
          }}
          imgStyle={{
            borderRadius: "8px",
          }}
          placeholder="blurred"
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />

        {breakpoints.bslg ? (
          <TextContainer>
            <Gradient className="story-gradient" />

            <SimpleContainer>
              <Details className="story-details">
                <AuthorName>{author}</AuthorName>
                <StoryType>{type}</StoryType>
              </Details>
              <Link to={buttonLink}>
                <ButtonLink
                  className="story-actions typo-body-m"
                  href={buttonLink}
                >
                  {buttonText}
                </ButtonLink>
              </Link>
            </SimpleContainer>
          </TextContainer>
        ) : (
          <CardLinkWrapper>
            <Link to={buttonLink}>
              <TextContainer>
                <Gradient className="story-gradient" />
                <SimpleContainer>
                  <Details className="story-details">
                    <AuthorName>{author}</AuthorName>
                    <StoryType>{type}</StoryType>
                  </Details>
                </SimpleContainer>
              </TextContainer>
            </Link>
          </CardLinkWrapper>
        )}
      </GridContainer>
    </ItemContainer>
  )
}

StoryItem.propTypes = {}

export default StoryItem
