import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import UilCheckCircle from "@iconscout/react-unicons/icons/uil-check-circle"
import { Link } from 'gatsby'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #c3d4e6;
  box-sizing: border-box;
  box-shadow: 0px 0px 30px rgba(112, 144, 176, 0.2);
  border-radius: 6px;
  margin: 8px;
  width: 100%;

  @media (min-width: 576px) {
    width: auto;
  }
`
const LinkText = styled(Link)`
  font-family: Untitled Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  
  margin: 0;
  padding-left: 18px;
  text-align: left;

  &:hover, &:link, &:visited, &:active {
    color: #002554;
    text-decoration: none;
  }


`
const ServicesItem = ({ name, link }) => {
  return (
    <Container>
      <UilCheckCircle size={25}  color="#3eb1c8"/>
      <LinkText to={link}>{name}</LinkText>
    </Container>
  )
}

ServicesItem.propTypes = {}

export default ServicesItem
