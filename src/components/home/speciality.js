import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import SpecialityItem from "./specialityItem"
import { Container1440 } from "../generalStyledComponents"

const Container = styled.div`
  background-color: var(--color-white);
`
const ContentContainer = styled(Container1440)`
  background-color: var(--color-white);
  padding-top: var(--spacing-11);
  padding-bottom: var(--spacing-7);
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: 576px) {
    padding-top: var(--spacing-16);
    padding-bottom: var(--spacing-11);
  }
`

const ItemsContainer = styled.div`
  padding-top: var(--spacing-7);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > a {
    width: 100%;
    text-decoration: none;
    &:hover, &:visited, &:link, &:active {
      color: var(--color-white);
    }
  }
  @media (min-width: 576px) {
    padding-top: var(--spacing-9);
    & > a {
      width: 196px;
    }
  }
  @media (min-width: 1440px) {
    & > div:nth-child(1) {
      margin-left: 98px;
    }
    & > div:nth-child(6) {
      margin-right: 98px;
    }
  }
`

const HeaderText = styled.p`
  line-height: var(--line-height-8);
  text-align: center;
  color: var(--color-navy);
  margin-bottom: 0px;
  font-size: var(--font-size-9);
  @media (min-width: 576px) {
  }
`

const Speciality = ({ title, items }) => {
  return (
    <Container className="container-fluid">
      <ContentContainer>
        <HeaderText className="typo-heading-l">{title}</HeaderText>
        <ItemsContainer>
          {items.map(({ code, title, link }) => (
            <SpecialityItem key={code} code={code} description={title} link={link} />
          ))}
        </ItemsContainer>
      </ContentContainer>
    </Container>
  )
}

Speciality.propTypes = {}

export default Speciality
