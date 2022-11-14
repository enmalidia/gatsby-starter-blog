import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`

const TextContainer = styled.div`
  margin-top: var(--spacing-4);

  @media (min-width: 576px) {
    margin-top: 0px;
    margin-left: var(--spacing-6);
  }
`

const Header = styled.p`
  font-family: var(--font-family-primary);
  font-style: normal;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-1);
  line-height: var(--line-height-1);
  /* identical to box height, or 160% */

  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--color-sea);
  margin: 0px 0px var(--spacing-2) 0px;
`

const Title = styled.p`
  line-height: var(--line-height-6);
  color: var(--color-ashford);
  margin: 0px 0px var(--spacing-4) 0px;
`

const Description = styled.p`
  line-height: var(--line-height-4);
  color: var(--color-bodyfont);
  margin: 0px 0px var(--spacing-4) 0px;
`
const MoreLink = styled(Link)`
  text-decoration: none;
  line-height: var(--line-height-3);
  color: var(--color-sea);
  margin: 0px 0px;
  cursor: pointer;
  transition: 0.6s ease-out color;
  &:hover {
    color: var(--color-navy);
  }
`

const ContainerImg = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  display: grid;
`

const BackgroundImage = styled.div`
  grid-area: 1/1;
  display: flex;
  & > div.gatsby-image-wrapper {
    width: 100%;
    height: 132px;
    @media (min-width: 576px) {
      width: 161px;
      height: auto;
    }
  }
`

const ResultCard = ({ title, path, linkText }) => {
  return (
    <Container>
      <TextContainer>
        {/*         <Header>Heart Health</Header> */}
        <Title className="typo-heading-m">{title}</Title>
        {/*         <Description className="typo-bofy-l">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra,
          arcu adipiscing mauris lectus. Sit amet etiam id porta aliquam.
        </Description> */}
        <MoreLink to={path} className="typo-body-m">
          {linkText}
        </MoreLink>
      </TextContainer>
    </Container>
  )
}

ResultCard.propTypes = {}

export default ResultCard
