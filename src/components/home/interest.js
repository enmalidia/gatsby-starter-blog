import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import StatisticList from "./statisticList"
import { Container1440 } from "../generalStyledComponents"

const ImageContainer = styled.div`
  /* max-width: 600px; */
  display: grid;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-self: center;
  padding-bottom: var(--spacing-8);

  @media (min-width: 768px) {
    padding-bottom: 0px;
    margin-top: var(--spacing-9);
    margin-bottom: var(--spacing-9);
    padding-right: var(--spacing-9);

    .gatsby-image-wrapper {
      border-radius: 6px;
    }
  }
`

const Container = styled.div`
  /*   padding-top: 50px;
  padding-bottom: 50px; */
  background: var(--color-ashford);
`

const ResponsiveContainer = styled(Container1440)`
  padding: 0px 0px var(--spacing-9) 0px;
  @media (min-width: 768px) {
    padding: var(--spacing-9) var(--spacing-8);
  }
  @media (min-width: 992px) {
    padding: var(--spacing-9) var(--spacing-16);
  }
`
const LeftContainer = styled.div`
  padding: 0;
  display: flex;

  @media (min-width: 576px) {
    padding: inherit;
  }
`
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;
  @media (min-width: 768px) {
    padding: 0px;
  }
`

const Description = styled.p`
  font-family: var(--font-family-secondary);
  font-style: normal;
  font-weight: normal;
  font-size: var(--font-size-6);
  line-height: 135%;
  color: var(--color-sea);
  margin-bottom: var(--spacing-7);

  @media (min-width: 768px) {
    margin-bottom: var(--spacing-9);
  }

`

const Header = styled.p`
  font-family: var(--font-family-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #eff3f8;
  margin: 18px 0px;
  @media (min-width: 576px) {
    font-size: 48px;
    line-height: 48px;
  }
`

const SectionName = styled.p`
  color: var(--color-sea);
  text-transform: uppercase;
  font-family: var(--font-family-secondary);
  font-style: normal;
  font-weight: normal;
  font-size: var(--font-size-3);
  line-height: var(--line-height-3);

  @media (min-width: 576px) {
    font-family: var(--font-family-primary);
    font-style: normal;
    font-weight: bold;
    letter-spacing: var(--letter-spacing-wide);
    text-transform: uppercase;
    line-height: var(--line-height-1);
    font-size: var(--font-size-1);
  }
`

const Interest = ({ title, header, description, list }) => {
  return (
    <Container>
      <ResponsiveContainer>
        <div className="row  g-0">
          <LeftContainer className="col-12 col-md-6">
            <ImageContainer>
              <StaticImage
                layout="fullWidth"
                src="../../images/home/interest.png"
                alt=""
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
                imgStyle={{
                  objectPosition:'top'
                }}
              />
            </ImageContainer>
          </LeftContainer>
          <RightContainer className="col-12 col-md-6">
            <SectionName>{title}</SectionName>
            <Header>{header}</Header>
            <Description>{description}</Description>
            <StatisticList list={list} />
          </RightContainer>
        </div>
      </ResponsiveContainer>
    </Container>
  )
}

Interest.propTypes = {}

export default Interest
