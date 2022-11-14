import React from "react"
import styled from "@emotion/styled"

import { Container1440 } from "../generalStyledComponents"
import InfoList from "./infoList"

const Container = styled.div`
  /*   padding-top: 50px;
  padding-bottom: 50px; */

  // background: var(--color-white);
  background: ${props => props.color};
`

const ResponsiveContainer = styled(Container1440)`
  padding: 40px 16px var(--spacing-8) 16px;
  @media (min-width: 768px) {
    padding: var(--spacing-9) var(--spacing-8);
  }
  @media (min-width: 992px) {
    padding: var(--spacing-16) var(--spacing-16);
  }
`
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  ///padding: 0px 16px;
  // padding-top: 80px;
  @media (min-width: 768px) {
    padding: 0px;
  }
`
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // padding-top: 100px;
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
    margin-right: 56px;
  }
`

const Header = styled.p`
  font-family: var(--font-family-primary);
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 38px;
  color: #27364b;
  margin-bottom: 8px;

  @media (min-width: 576px) {
    margin-right: 56px;
    font-size: 48px;
    line-height: 58px;
  }
`

const SectionName = styled.p`
  color: var(--color-sea);
  text-transform: uppercase;
  font-family: var(--font-family-primary);
  font-style: normal;
  font-weight: bold;
  font-size: var(--font-size-1);
  line-height: var(--line-height-3);
  letter-spacing: 2px;

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

const ButtonPagos = styled.a`
  display: flex;
  margin-top: 16px;
  text-decoration: none;
  font-family: "Untitled Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;

  background-color: var(--color-sea);
  border: 2px solid var(--color-sea);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 16px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;

  transition: background-color 0.6s ease-out, border-color 0.6s ease-out;

  :hover {
    text-decoration: none;
    color: #ffffff;
    background-color: var(--color-ashford);
    border-color: var(--color-ashford);
  }

  @media (min-width: 768px) {
    display: flex;
    margin-top: 0px;
    margin-left: 52px;
  }
`

const InfoPayments = ({ title, header, description, list, color }) => {
  return (
    <Container color={color}>
      <ResponsiveContainer>
        <div className="row g-0">
          <LeftContainer className="col-12 col-md-6">
            <SectionName>{title}</SectionName>
            <Header>{header}</Header>
            <Description>{description}</Description>
          </LeftContainer>
          <RightContainer className="col-12 col-md-6">
            <InfoList list={list} />
            <ButtonPagos
              href="https://ashford.pagospr.com/"
              target="_blank"
              rel="noreferrer"
            >
              Portal de pago
            </ButtonPagos>
          </RightContainer>
        </div>
      </ResponsiveContainer>
    </Container>
  )
}

InfoPayments.propTypes = {}

export default InfoPayments
