import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import {
  Container1440,
  ContainerServiceTextInfoBlock,
} from "../generalStyledComponents"
import ServiceTextInfoBlock from "./serviceTextInfoBlock"

const Container = styled.div`
  background-color: ${props =>
    props.color ? `var(--color-${props.color})` : "var(--color-background)"};
`

const OneColumnTextInfoSection = ({
  list,
  header,
  title,
  description,
  details,
  color,
  dark,
  children,
  anchorName,
}) => {
  return (
    <Container className="container-fluid p-0" color={color} id={anchorName}>
      <Container1440>
        <ContainerServiceTextInfoBlock>
          <ServiceTextInfoBlock
            list={list}
            header={header}
            title={title}
            description={description}
            details={details}
            dark={dark}
          />
          {children}
        </ContainerServiceTextInfoBlock>
      </Container1440>
    </Container>
  )
}
OneColumnTextInfoSection.defaultProps = {
  list: [],
  header: "",
  title: "",
  description: "",
  details: "",
  color: false,
  dark: false,
  anchorName: "",
}

OneColumnTextInfoSection.propTypes = {}

export default OneColumnTextInfoSection
