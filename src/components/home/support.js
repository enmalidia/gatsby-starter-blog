import React from "react"
import SupportItem from "./supportItem"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"

import IconEsp from "../../images/esp-icon.svg"
import IconAdn from "../../images/adn-icon.svg"
import IconDoc from "../../images/doc-icon.svg"
import IconHum from "../../images/human-icon.svg"

const Container = styled.div`
  background-color: #f4f4f7;
  padding: var(--spacing-11) var(--spacing-4) var(--spacing-9) var(--spacing-4);
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (min-width: 576px) {
    padding-top: var(--spacing-16);
  }
`
const ItemsContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;

  & > div {
    margin: 8px 0px;

    @media (min-width: 576px) {
      margin: 8px;
    }
  }
  & > div > div {
    height: 100%;
  }
`

const HeaderText = styled.p`
  /* Headings MOBILE/Heading L */

  font-family: Futura Std;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #002554;
  margin: 0;

  @media (min-width: 576px) {
    font-size: 32px;
    line-height: 40px;
    text-align: center;
  }
`

const Support = React.forwardRef(({ items, title }, ref) => {
  const images = [IconEsp, IconDoc, IconAdn, IconHum]

  const itemWithImg = items.map((item, index) => {
    item.image = images[index]
    return item
  })

  return (
    <Container ref={ref}>
      <HeaderText>{title}</HeaderText>

      <ItemsContainer>
        {itemWithImg.map((item, index) => (
          <Fade key={item.key} bottom delay={(index + 1) * 100}>
            <SupportItem
              key={item.key}
              info={item.info}
              actionText={item.actionText}
              image={item.image}
            />
          </Fade>
        ))}
      </ItemsContainer>
    </Container>
  )
})

export default Support
