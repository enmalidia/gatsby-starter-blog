import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { v4 as uuidv4 } from "uuid"


const Header = styled.p`
  font-family: Futura Std;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #8994a7;

  @media (min-width: 576px) {
    font-size: 24px;
    line-height: 30px;
  }
`

const NodeItem = styled.li`
  font-family: Untitled Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 175%;
  cursor: pointer;
  color: #FFFFFF;

  @media (min-width: 576px) {
    font-size: 14px;
    line-height: 175%;
  }
`

const NodeItemUl = styled.ul`
  list-style: none;
  padding: 0;
`

const NodeSubItemUl = styled.ul`
  list-style: disc;
`
const Menu = styled.div`
padding-top: 1.5rem;
`
const FooterMenu = ({ menu }) => {
  const { header, items } = menu

  const subItemList = subItems => {
    return (
      <NodeSubItemUl>
        {subItems.map(item => (
          <NodeItem key={uuidv4()}>{item.value}</NodeItem>
        ))}
      </NodeSubItemUl>
    )
  }
  const itemList = items.map(({ value, action, subitems }) => (
    <NodeItem key={uuidv4()}>
      {value}
      {subitems && subItemList(subitems)}
    </NodeItem>
  ))

  return (
    <Menu>
      <Header>{header}</Header>
      <NodeItemUl>{itemList}</NodeItemUl>
    </Menu>
  )
}

FooterMenu.propTypes = {}

export default FooterMenu
