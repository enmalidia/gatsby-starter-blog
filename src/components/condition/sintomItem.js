import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import RightArrow from "../../images/right-arrow.svg"
const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: var( --spacing-4);
  background: var(--color-background);
  border-radius: 4px;

  margin: 0px 0px;
`

const Arrow = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 14px;
`

const Text = styled.p`
  font-style: normal;
  line-height: var(--line-height-4);
  margin-bottom: 0px;
`
const SintomItem = ({ text }) => {
  return (
    <Item>
      <Arrow src={RightArrow} />
      <Text className="typo-body-l">{text}</Text>
    </Item>
  )
}

SintomItem.propTypes = {}

export default SintomItem
