import React from "react"
import PropTypes from "prop-types"
import StatisticItem from "./statisticItem"
import styled from "@emotion/styled"

const Container = styled.div`
/* columns: 2 auto; */
/* & > div:not(:last-of-type) {
  margin-bottom: var(--spacing-7);
} */

display: grid;
grid-row-gap: var(--spacing-7);
grid-column-gap: var(--spacing-9);

/* @media (min-width: 576px) { */
  grid-template-columns: repeat(2, 1fr);
/* } */
`
const StatisticList = ({list}) => {

  return <Container>
      { list?.map(item => <StatisticItem value={item.value} description={item.description} key={item.key}/>)}
  </Container>
}

StatisticList.propTypes = {}

export default StatisticList
