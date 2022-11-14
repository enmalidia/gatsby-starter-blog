import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
const Container = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: ${props =>
    props.color ? `var(--color-${props.color})` : "var(--color-frost)"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > a {
    font-size: 0px;
  }
`

const SocialIcon = ({ children, color, href }) => {
  return (
    <Container color={color}>
      <a className="gtm-action gtm-action-social" href={href ? href : "#"} target="_blank">
        {children}
      </a>
    </Container>
  )
}

SocialIcon.propTypes = {}

export default SocialIcon
