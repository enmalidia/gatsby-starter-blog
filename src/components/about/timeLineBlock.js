import React from "react"
import PropTypes from "prop-types"
import YearBlock from "./yearBlock"
import styled from "@emotion/styled"
import { parseText } from "../../utils/text"

const Details = styled.div`
  p {
    line-height: var(--line-height-4);
    color: var(--color-bodyfont);
    @media (min-width: 768px) {
      margin-right: ${props =>
        (!props.rtl && props.haveChildren) ? "var(--spacing-7)" : "0px"};
      margin-left: ${props =>
        props.rtl && props.haveChildren ? "var(--spacing-7)" : "0px"};
    }
  }
  p:last-of-type {
    margin-bottom: 0px;
  }
`
const Container = styled.div`
  display: flex;
  /* flex-flow: ${props => (props.rtl ? "row-reverse" : "row")}; */
  flex-direction: column;
  /*   & > div:first-of-type {
    margin-bottom: ${props =>
    props.haveChildren ? "var(--spacing-7)" : "0px"};
  } */
  .timeline-block-detail {
    order: 2;
  }
  & > div:not(:nth-child(2)) {
    margin-bottom: var(--spacing-7);
  }
  @media (min-width: 768px) {
    /*   & > div:first-of-type {
       margin-bottom: 0px;
    } */
    .timeline-block-detail {
      order: unset;
    }
    & > div:not(:nth-child(2)) {
      margin-bottom: 0px;
    }
    flex-direction: ${props => (props.rtl ? "row-reverse" : "row")};
  }
`
const TimeLineBlock = ({ year, build, detail, children, rtl }) => {
  const haveChildren = !!children
  return (
    <Container rtl={rtl} haveChildren={haveChildren}>
      <YearBlock year={year} build={build} rtl={rtl} reverse />
      <div className="timeline-block-detail">
        <Details className="typo-body-l" rtl={rtl} haveChildren={haveChildren}>
          {parseText(detail)}
        </Details>
      </div>
      {children}
    </Container>
  )
}

TimeLineBlock.propTypes = {}
TimeLineBlock.defaultProps = {
  rtl: false
}

export default TimeLineBlock
