import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Clock from "../../images/clock.svg"

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`

const Title = styled.p`
  line-height: var(--line-height-5);
  color: var(--color-sea);
  margin: 0px 0px;
  padding-bottom: var(--spacing-4);
`
const ScheduleContainer = styled.div`
display: flex;
align-items: flex-start;
padding: var(--spacing-4);
background: var(--color-background);
border-radius: 4px;
`

const Details = styled.p`
line-height: 24px;

color: var(--color-darkfont);
margin: 0px 0px 0px var(--spacing-3);
`

const ClockImg = styled.img`
width: 20px;
height: 20px;
`
const AdmissionSchedule = ({title, details}) => {
  return (
    <Container>
      <Title className="typo-heading-s">{title}</Title>
      <ScheduleContainer>
        <ClockImg src={Clock} />
        <Details className="typo-body-l">{details}</Details>
      </ScheduleContainer>
    </Container>
  )
}

AdmissionSchedule.propTypes = {}

export default AdmissionSchedule
