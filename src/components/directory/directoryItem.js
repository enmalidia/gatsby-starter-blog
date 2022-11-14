import React from "react"
import styled from "@emotion/styled"
import Phone from "../../images/phone.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-4);
  width: 100%;
  min-height: 100px;
  height: 100%;
  background: var(--color-white);
  border: 1px solid #cbd4e1;
  box-sizing: border-box;
  box-shadow: 0px 0px 30px rgba(112, 144, 176, 0.2);
  border-radius: 6px;

  @media (min-width: 992px) {
    /* width: 389.33px; */
    padding: var(--spacing-4);
  }
`
const TextContainer = styled.div`
  flex-grow: 1;
`
const Title = styled.p`
  line-height: var(--line-height-5);
  color: var(--color-bodyfont);
  margin: 4px 0px;
  padding-bottom: 4px;
  word-break: break-all;

  @media (min-width: 400px) {
    word-break: break-word;
  }
`

const PhoneContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: var(--spacing-6);

  img {
    width: 13.3px;
    height: 13.25px;
  }

  p {
    line-height: var(--line-height-3);
    color: var(--color-sea);
    margin: 0px 0px;
    padding-left: var(--spacing-2);
  }

  a:hover,
  a:link,
  a:visited,
  a:active {
    color: var(--color-sea);
    text-decoration: none;
  }

  @media (min-width: 576px) {
    padding-top: var(--spacing-4);
  }
`

const Description = styled.p`
  line-height: var(--line-height-3);
  color: var(--color-lightfont);
  margin: 4px 0px;
  word-break: break-all;

  @media (min-width: 400px) {
    word-break: break-word;
  }
`
const DirectoryItem = ({ title, category, keyId, phone, value }) => {
  return (
    <Container>
      <TextContainer>
        <Title className="typo-heading-s">{title}</Title>
        <Description className="typo-body-m">{category}</Description>
      </TextContainer>
      <PhoneContainer>
        <img src={Phone} />
        <p className="typo-body-m">
          <a className="gtm-action gtm-action-phone" href={`tel:${value}`}>{phone}</a>
        </p>
      </PhoneContainer>
    </Container>
  )
}

DirectoryItem.propTypes = {}

export default DirectoryItem
