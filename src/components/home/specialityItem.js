import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { Link } from 'gatsby'

const Code = styled.div`
  background: #002554;
  border-radius: 6px;
  display: flex;
  width: 61px;
  height: 61px;
  align-items: center;
  justify-content: center;
  margin-left: 0;
  @media (min-width: 576px) {
    margin: auto;
  }
`

const CodeText = styled.p`
  font-family: Futura Std;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #eff3f8;
  margin: 0;
`

const Description = styled.p`
  font-family: Untitled Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 109.31%;

  text-align: left;
  color: #002554;
  margin: 14px 0px;

  @media (min-width: 576px) {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
  }
`
const CodeContainer = styled.div`
  display: flex;
  min-width: 62px;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 100%;
`
const Container = styled(Link)`
  padding: 8px;
  display: flex;
  @media (min-width: 576px) {
    display: block;
  }
`

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: var(--spacing-4);
  @media (min-width: 576px) {
    margin-left: 0px;
    display: block;
    justify-content: center;
  }
`

const SpecialityItem = ({ code, description, link }) => {
  return (
    <Container to={link}>
      <div>
        <CodeContainer>
          <Code>
            <CodeText>{code}</CodeText>
          </Code>
        </CodeContainer>
      </div>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
    </Container>
  )
}

SpecialityItem.propTypes = {}

export default SpecialityItem
