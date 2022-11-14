import React from "react"
import styled from "@emotion/styled"

/* import UilStetho from "@iconscout/react-unicons/icons/uil-stethoscope"
import UilDocument from "@iconscout/react-unicons/icons/uil-file-question-alt"
import UilUser from "@iconscout/react-unicons/icons/uil-user-md"
import UilArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right" */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 48px 24px;
  max-width: 330px;
  height: 244px;
  background: #ffffff;
  border: 1px solid #CBD4E1;
  box-sizing: border-box;
  /* Shadow Card HOVER */

  box-shadow: 0px 16px 40px rgba(112, 144, 176, 0.35);
  border-radius: 6px;
  @media (min-width: 576px) {

  }
`

const Info = styled.p`
  font-family: Untitled Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #002554;
  margin: 24px 0px;

  @media (min-width: 576px) {
    font-size: 20px;
    line-height: 28px;
    // line-height: 120%;
    text-align: center;
  }
`

const Action = styled.p`
  font-family: Untitled Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #8994a7;
  /* margin: 24px 0px; */
  cursor: pointer;

  @media (min-width: 576px) {
    font-size: 14px;
    line-height: 20px;
  }
`
const SupportItem = ({ info, actionText, image }) => {
  return (
    <Container>
      <img src={image} />
      <Info>{info}</Info>
      <Action>{actionText}</Action>
    </Container>
  )
}

export default SupportItem
