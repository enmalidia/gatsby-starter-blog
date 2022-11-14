import React from "react"
import styled from "@emotion/styled"
const Year = styled.p`
  font-family: var(--font-family-primary);
  font-style: normal;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-12);
  line-height: var(--line-height-11);
  color: var(--color-bodyfont);
  margin: 0px 0px;
`
const Separator = styled.div`
  border-bottom: 2px solid  var(--color-ashford);
  width: 88px;
  height: 0px;
  margin-left: var(--spacing-7);
  margin-right: var(--spacing-7);
`
const Build = styled.p`
  /* Text/Body L */
  line-height: 24px;
  color: var(--color-sea);
  margin: 0px 0px;

  @media (min-width: 768px) {
    text-align: ${props => (props.rtl ? "right" : "left")};
  }
`

const YearContainer = styled.div`
  display: flex;
  align-items: baseline;

  @media (min-width: 768px) {
    flex-direction: ${props => (props.rtl ? "row-reverse" : "row")};
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const YearBlock = ({ year, build, rtl, reverse }) => {
  return (
    <Container>
      <YearContainer rtl={rtl} reverse>
        <Year>{year}</Year>
        <Separator></Separator>
      </YearContainer>
      <Build className="typo-body-l" rtl={rtl}>
        {build}
      </Build>
    </Container>
  )
}

YearBlock.propTypes = {}

export default YearBlock
