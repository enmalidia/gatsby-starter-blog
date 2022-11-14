import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import ServicesItem from "./servicesItem"
import { Container1440 } from "../generalStyledComponents"

const Container = styled.div`
  background: #eff3f8;
  padding-top: var(--spacing-7);
  padding-bottom: var(--spacing-7);
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: 576px) {
    padding-top: var(--spacing-11);
  padding-bottom: var(--spacing-16);
  }
`

const Header = styled.p`
  line-height: var(--line-height-8);
  text-align: center;
  color: var(--color-navy);
  margin-bottom: 0px;
  font-size: var(--font-size-9);

  @media (min-width: 576px) {
  }
`

const ItemsContainer = styled.div`
  padding-top: var(--spacing-7);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 576px) {
    padding-top: var(--spacing-9);
  }
`

const Services = ({title, items}) => {
  return (
    <Container className="container-fluid">
      <Container1440>
        <Header  className="typo-heading-l">{title}</Header>
        <ItemsContainer>
          {items.map(service => (
            <ServicesItem {...service} />
          ))}
        </ItemsContainer>
      </Container1440>
    </Container>
  )
}

Services.propTypes = {}

export default Services
