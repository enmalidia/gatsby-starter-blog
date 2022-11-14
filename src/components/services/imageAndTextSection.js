import React from "react"
import PropTypes from "prop-types"
import { Container1440 } from "../generalStyledComponents"
import styled from "@emotion/styled"

const Container = styled.div`
display: grid;
`
const BackContainer = styled.div`
grid-area: 1/1;
display: flex;
`

const FrontContainer = styled(Container1440)`
grid-area: 1/1;
display: flex;
`

const Subsection = styled.div`
width: 50%;
`
const ImageAndTextSection = props => {
  return (
    <Container>
      <BackContainer>
        <Subsection>50lef</Subsection>
        <Subsection>50right</Subsection>
      </BackContainer>

      <FrontContainer>
        <Subsection>50lef</Subsection>
        <Subsection>50right</Subsection>
      </FrontContainer>
    </Container>
  )
}

ImageAndTextSection.propTypes = {}

export default ImageAndTextSection
