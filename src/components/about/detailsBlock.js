import React from "react"
import PropTypes from "prop-types"
import ServiceTextInfoBlockList from "../services/serviceTextInfoBlockList"
import styled from "@emotion/styled"
import { parseText } from "../../utils/text"
const Header = styled.p`
  line-height: var(--line-height-5);
  color: var(--color-sea);
  margin: 0px 0px var(--spacing-4) 0px;
`

const Detail = styled.div`
  p {
    line-height: var(--line-height-4);
    color: var(--color-bodyfont);
    /* margin: 0px 0px; */
  }
`
const DetailsBlock = ({ header, list, text }) => {
  return (
    <div>
      <Header className="typo-heading-m-mobile">{header}</Header>
      {list && <ServiceTextInfoBlockList list={list} />}
      {text && <Detail className="typo-body-l">{parseText(text)}</Detail>}
    </div>
  )
}

DetailsBlock.propTypes = {}

export default DetailsBlock
