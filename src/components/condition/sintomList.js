import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import SintomItem from "./sintomItem"

const SintomList = ({ list }) => {
  const List = styled.div`
    row-gap: 8px;
    display: flex;
    flex-direction: column;
  `
  return (
    <List>
      {list.map((item, index) => (
        <SintomItem text={item} key={index} />
      ))}
    </List>
  )
}

SintomList.propTypes = {}

export default SintomList
