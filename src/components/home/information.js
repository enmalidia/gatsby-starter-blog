import React from "react"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import UilArrowDown from "@iconscout/react-unicons/icons/uil-arrow-down"
import Fade from "react-reveal/Fade"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import "./information.scss"

const Container = styled.div`
  position: relative;
`

const TextInfo = styled.p`
  /* Headings DESKTOP/Heading L */

  line-height: var(--line-height-8);
  color: var(--color-frost);

  margin-bottom: var(--spacing-2);

  text-align: left;
  max-width: 960px;

  @media (min-width: 576px) {
    /* Headings DESKTOP/Heading XL */
    line-height: var(--line-height-11);
    /* or 121% */

    text-align: center;
    color: var(--color-white);
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
    margin-bottom: var(--spacing-6);
  }
`

const TextDetail = styled.p`
  /* Text/Body L */
  line-height: var(--line-height-4);

  color: var(--color-white);
  margin: 0px 0px;

  @media (min-width: 576px) {
    /* Headings DESKTOP/Heading S */
    line-height: var(--line-height-5);
    text-align: center;

    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    margin: 0px 0px;
  }

  @media (min-width: 1200px) {
    font-size: var(--font-size-6);
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: left;
  max-width: 791px;
  padding: 0px var(--spacing-4);
  @media (min-width: 576px) {
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    max-width: 895px;
    padding: 0;
  }
`

const XSeparator = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`
const GridContent = styled.div`
  grid-area: 1/1;
  position: relative;
  // This centers the other elements inside the hero component
  place-items: center;
  display: grid;
`

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  justify-content: end;
  background: linear-gradient(
    180.04deg,
    rgba(0, 0, 0, 0) 33.94%,
    rgba(0, 0, 0, 0.2) 73.82%
  );
  display: -webkit-box !important;
  -webkit-box-pack: end;
  -webkit-box-align: end;
  -webkit-box-orient: vertical;

  @media (min-width: 576px) {
    background: none;
    align-items: center;
    justify-content: center;
  }
`

const ArrowPath = styled.div`
  position: absolute;
  height: 20vh;
  bottom: 0;
  align-items: end;
  display: none;
  @media (min-width: 576px) {
    display: flex;
  }
`

const FloatArrow = styled.div`
  position: sticky;
  bottom: 0;
  padding-bottom: 2rem;
`

const Grid = styled.div`
  display: grid;
  height: var(--height-without-navbar);
`
const Information = ({ scrollAction, title, detail }) => {
  const breakpoints = useBreakpoint()
  return (
    <Grid>
      <StaticImage
        style={{
          gridArea: "1/1",
        }}
        imgStyle={{
          objectPosition: "top",
        }}
        layout="fullWidth"
        src="../../images/home/info-background.png"
        quality={80}
        alt=""
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
        className="info-background"
      />
      <StaticImage
        style={{
          gridArea: "1/1",
        }}
        imgStyle={{
          objectPosition: "top",
        }}
        layout="fullWidth"
        src="../../images/home/info-background-small.png"
        alt=""
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
        className="info-background-small"
      />

      <GridContent>
        <ContentContainer>
          <TextContainer>
            <Fade bottom delay={500}>
              <TextInfo
                className={
                  breakpoints.bssm ? "typo-heading-xl" : "typo-heading-l"
                }
              >
                {title}
              </TextInfo>
            </Fade>
            <Fade bottom delay={500}>
              <TextDetail
                className={breakpoints.bssm ? "typo-heading-s" : "typo-body-l"}
              >
                {detail}
              </TextDetail>
            </Fade>
          </TextContainer>
          <XSeparator>
            <ArrowPath>
              <FloatArrow>
                <UilArrowDown
                  color="var(--color-white)"
                  className="arrow-down"
                  onClick={scrollAction}
                  size="25"
                />
              </FloatArrow>
            </ArrowPath>
          </XSeparator>
        </ContentContainer>
      </GridContent>
    </Grid>
  )
}

export default Information
