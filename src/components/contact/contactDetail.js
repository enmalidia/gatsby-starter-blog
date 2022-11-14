import React from "react"
import styled from "@emotion/styled"
import Clock from "../../images/clock.svg"
import Location from "../../images/location.svg"
import Mail from "../../images/email.svg"
import Phone from "../../images/phone.svg"

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`

const Title = styled.p`
  line-height: var(--line-height-4);
  color: var(--color-navy);
  margin: 0px 0px;
  padding-bottom: var(--spacing-4);
`
const ContactContainer = styled.div`
display: flex;
align-items: flex-start;
padding: var(--spacing-4);
background: var(--color-white);
border-radius: 4px;
margin-top: ${props => props.noTitle ? 'var(--spacing-7)' : '0px'};
`

const Details = styled.p`
line-height: var(--line-height-4);

color: var(--color-bodyfont);
margin: 0px 0px 0px var(--spacing-3);
`

const ClockImg = styled.img`
width: 20px;
height: 20px;
`
const LocationImg = styled.img`
width: 16px;
height: 20px;
`
const MailImg = styled.img`
width: 20px;
height: 11px;
`
const PhoneImg = styled.img`
width: 20px;
height: 20px;
`
const ContactDetail = ({title, detail, type}) => {
  const hasTitle = !!title
  return (
    <Container>
      {title && <Title className="typo-body-l">{title}</Title>}
      <ContactContainer noTitle={!hasTitle}>
        {type === "clock" && <ClockImg src={Clock} />}
        {type === "email" && <MailImg src={Mail} />}
        {type === "location" && <LocationImg src={Location} />}
        {type === "phone" && <PhoneImg src={Phone} />}
        <Details className="typo-body-l">{detail}</Details>
      </ContactContainer>
    </Container>
  )
}

ContactDetail.propTypes = {}
ContactDetail.defaultProps = {
  type: "clock"
}
export default ContactDetail
