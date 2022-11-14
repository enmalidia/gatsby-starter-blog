import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Container1440 } from "../generalStyledComponents"
import ServiceTextInfoBlock from "../services/serviceTextInfoBlock"

const Container = styled.div`
  background-color: ${props =>
    props.color ? `var(--color-${props.color})` : "var(--color-background)"};
`

const ContentContainer = styled(Container1440)`
  padding: var(--spacing-8) var(--spacing-4);
  @media (min-width: 576px) {
    padding: var(--spacing-11);
  }
  @media (min-width: 1024px) {
    padding: var(--spacing-16-esp1);
  }
`

const ContainerText = styled.div`
  max-width: 800px;
`
const OneColumnLeftText = ({
  header,
  title,
  description,
  details,
  dark,
  color,
}) => {
  return (
    <Container className="container-fluid p-0" color={color}>
      <ContentContainer>
        <ContainerText>
          <ServiceTextInfoBlock
            header={header}
            title={title}
            description={description}
            details={details}
            dark={dark}
          />
        </ContainerText>
      </ContentContainer>
    </Container>
  )
}

OneColumnLeftText.propTypes = {}

export default OneColumnLeftText
