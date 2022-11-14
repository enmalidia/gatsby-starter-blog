import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Key from "./key"

const Container = styled.div`
  display: flex;
  row-gap: 8px;
  column-gap: 8px;
  flex-wrap: wrap;
`

const KeyList = ({ list, activeKey, onClickKey }) => {
  return (
    <Container>
      {list.map(({ key, id }) => (
        <Key
          text={key}
          keyId={id}
          key={id}
          active={id === activeKey}
          onClickKey={onClickKey}
        />
      ))}
    </Container>
  )
}

KeyList.propTypes = {}

export default KeyList
