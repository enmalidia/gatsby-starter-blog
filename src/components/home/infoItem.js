import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import rightArrowNavy from "../../images/right-arrow-navy.svg"

const Container = styled.li`
  font-family: Untitled Sans;
  font-style: normal;
  /*font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  // color: #27364B;
  margin-bottom: 0px;
  margin-top: var(--spacing-2);
  line-height: var(--line-height-4);

  @media (min-width: 576px) {
    font-weight: normal;
  }
`
const SubInfoContainer = styled.li`
  font-family: Untitled Sans;
  font-style: normal;
  /*font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #27364B;
  margin-bottom: 0px;
  margin-top: var(--spacing-2);
  line-height: var(--line-height-4);

  @media (min-width: 576px) {
    font-weight: normal;
  }
`
const SubContainer = styled.ul`
  margin-bottom: 12px;
  color: #27364b;
  li {
    list-style: none;
    padding-left: 1.5rem;
    background-image: url(${rightArrowNavy});
    background-position: 0px 5.5px;
    background-size: 12px;
    background-repeat: no-repeat;
    margin-top: 12px;
  }
`
const SubList = ({ list }) => {
  return (
    <SubContainer>
      {list?.map(item => (
        <SubInfoItem value={item.value} key={item.key} />
      ))}
    </SubContainer>
  )
}

const SubInfoItem = ({ value }) => {
  return (
    <SubInfoContainer>
      <span>{value}</span>
    </SubInfoContainer>
  )
}

const InfoItem = ({ value, sublist }) => {
  return (
    <Container>
      <span>{value}</span>
      {sublist && <SubList list={sublist} />}
    </Container>
  )
}

InfoItem.propTypes = {}

export default InfoItem
