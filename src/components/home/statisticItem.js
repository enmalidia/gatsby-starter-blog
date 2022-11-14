import React from "react"
import styled from "@emotion/styled"

const Value = styled.p`
  color: var(--color-white);
  margin-bottom: 0px;

  /* Headings DESKTOP/Heading XL */
  line-height: var(--line-height-11);
  /* identical to box height, or 121% */
`

const Description = styled.p`
/*   font-family: Untitled Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px; */
  color: var(--color-white);
  margin-bottom: 0px;
  margin-top: var(--spacing-2);
  line-height: var(--line-height-4);

  @media (min-width: 576px) {
    font-weight: normal;
  }
`
const Container = styled.div`
  align-items: center;
`

const StatisticItem = ({ value, description }) => {
  return (
      <Container>
        <div>
          <Value className="typo-heading-xl">{value}</Value>
        </div>
        <div>
          <Description className="typo-body-l">{description}</Description>
        </div>
      </Container>
  )
}

StatisticItem.propTypes = {}

export default StatisticItem
