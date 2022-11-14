import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.div`
  background-color: ${props =>
    props.active ? "var(--color-sea)" : "var(--color-white)"};
  border: 1px solid
    ${props => (props.active ? "var(--color-sea)" : "var(--color-white)")};
  box-sizing: border-box;
  box-shadow: 0px 0px 30px rgba(112, 144, 176, 0.2);
  border-radius: 4px;
  font-style: normal;
  font-weight: normal;
  line-height: var(--line-height-3);
  color: ${props =>
    props.active ? "var(--color-white)" : "var(--color-bodyfont)"};
  height: 40px;
  min-width: 40px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 8px;
  cursor: pointer;
  transition: background-color 0.6s ease-out, border 0.6s ease-out, color 0.6s ease-out;

  &:hover {
    background-color: var(--color-sea);
    border:1px solid var(--color-sea);
    color: var(--color-white);
  }

  @media (min-width: 576px) {
    height: 28px;
    min-width: 28px;
    padding: 0px ${props => (props.manyLetters ? "8px" : "0px")};
  }
`
const Key = ({ text, keyId, active, onClickKey }) => {
  const moreThanOneLetter = text.length > 1
  return (
    <Container
      className="typo-body-m"
      active={active}
      onClick={() => onClickKey(keyId)}
      manyLetters={moreThanOneLetter}
    >
      {text}
    </Container>
  )
}

Key.propTypes = {}

export default Key
