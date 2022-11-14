import React from "react"
import YearBlock from "./yearBlock"
import styled from "@emotion/styled"

const Details = styled.p`
  line-height: var(--line-height-4);
  color: var(--color-bodyfont);
  margin: 0px 0px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
  flex-direction: ${props => (props.rtl ? "row-reverse" : "row")};
  }
`

const Content = styled.div`
& > * {
  margin-top: var(--spacing-7) !important;
}

@media (min-width: 768px) {
  & > *:first-of-type {
    margin-top: 0px;
  }
}
`
const TimeLineVariantBlock = ({ year, build, detail, children, rtl }) => {
  const haveChildren = !!children
  return (
    <Container rtl={rtl} className="flex-colunm flex-md-row">
      <YearBlock year={year} build={build} rtl={rtl} />
      <Content>
        {children}
        <Details className="typo-body-l" rtl={rtl} haveChildren={haveChildren}>
          {detail}
        </Details>
      </Content>
    </Container>
  )
}

TimeLineVariantBlock.propTypes = {}

export default TimeLineVariantBlock
