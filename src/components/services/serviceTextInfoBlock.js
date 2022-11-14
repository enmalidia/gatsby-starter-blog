import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import ServiceTextInfoBlockList from "./serviceTextInfoBlockList"
import { parseText } from "../../utils/text"

const Header = styled.p`
  color: var(--color-sea);
  margin-bottom: var(--spacing-4);
  text-transform: uppercase;
`

const Title = styled.p`
  color: ${props =>
    props.dark ? "var(--color-white)" : "var(--color-bodyfont)"};
  margin-bottom: var(--spacing-2);
`

const Description = styled.p`
  color: var(--color-sea);
  margin-bottom: var(--spacing-7);
`

const Details = styled.div`
  margin-bottom: ${props => (props.list ? "var(--spacing-7)" : "0px")};
  @media (min-width: 576px) {
    margin-bottom: ${props => (props.list ? "var(--spacing-9)" : "0px")};
  }
  & > div p {
    color: ${props =>
      props.dark ? "var(--color-white)" : "var(--color-bodyfont)"};
      margin-bottom: var(--spacing-7);
  }

  & > div p:last-of-type {
    margin-bottom: 0px;
  }
`
const ServiceTextInfoBlock = ({
  dark,
  cardType,
  list,
  listTitle,
  header,
  title,
  description,
  details,
}) => {
  const validList = list && list.length

  return (
    <div>
     {header && <Header className="typo-label-s">{header}</Header>} 
      {title && <Title className="typo-heading-xl" dark={dark}>
        {title}
      </Title>}
      {description && <Description className="typo-heading-s">{description}</Description>}
      {details && <Details className="typo-body-l" dark={dark} list={validList}>
        {parseText(details)}
      </Details>}
      {list && <ServiceTextInfoBlockList dark={dark} list={list} title={listTitle}/>}
    </div>
  )
}
ServiceTextInfoBlock.defaultProps = {
  dark: false,
  list: [],
  cardType: "",
}
ServiceTextInfoBlock.propTypes = {}

export default ServiceTextInfoBlock
