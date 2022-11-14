import React from "react"
import styled from "@emotion/styled"
import {
  Container1440,
  ContainerServiceTextInfoBlock,
} from "../generalStyledComponents"
import ServiceTextInfoBlock from "./serviceTextInfoBlock"
import ServiceTextInfoBlockList from "./serviceTextInfoBlockList"

const Container = styled(ContainerServiceTextInfoBlock)`
  background-color: ${props =>
    props.color ? `var(--color-${props.color})` : "var(--color-background)"};
`

const ListCol = styled.div`
  padding-top: var(--spacing-7);

  @media (min-width: 768px) {
    padding-top: unset;
    padding-left: var(--spacing-10);
  }
`

const TextCol = styled.div`
  @media (min-width: 768px) {
    padding-right: var(--spacing-10);
  }
`
const TwoColumnTextInfoSection = ({
  list,
  listTitle,
  header,
  title,
  description,
  details,
  color,
  children,
  anchorName,
}) => {
  return (
    <Container className="container-fluid" color={color} id={anchorName}>
      <Container1440>
        <div className="row">
        <ServiceTextInfoBlock
              header={header}
              title={title}
            />
        </div>
        <div className="row row-cols-1 row-cols-md-2">
          <TextCol className="col">
            <ServiceTextInfoBlock
              description={description}
              details={details}
            />
          </TextCol>
          <ListCol className="col">
            <ServiceTextInfoBlockList list={list} title={listTitle} />
          </ListCol>
        </div>
        {children && <div className="row">{children}</div>}
      </Container1440>
    </Container>
  )
}
TwoColumnTextInfoSection.defaultProps = {
  list: [],
  header: "",
  title: "",
  description: "",
  details: "",
  color: false,
  anchorName: ''
}

TwoColumnTextInfoSection.propTypes = {}

export default TwoColumnTextInfoSection
