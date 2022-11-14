import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import ConditionView from "../../views/conditionView"
const Condition = props => {
  const { condition } = props.data
  return (
    <div>
      <ConditionView condition={condition} />
    </div>
  )
}

Condition.propTypes = {}

export default Condition

export const query = graphql`
  query($id: String!) {
    condition(id: { eq: $id }) {
      category
      name
      cause
      orientation
      sintoms
      sintomList
      riskList
      testExams
      examList
      treatment
      meta {
        id
        slug
      }
    }
  }
`