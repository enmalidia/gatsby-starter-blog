import React from "react"
import styled from "@emotion/styled"
import ArrowRight from "../../images/right-arrow.svg"
import { Link } from "gatsby"


const LinkContainer = styled.div`
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

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    width: 100%;
  }

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

const ArrowContainer = styled.div`
  //width: 100%;
  text-align: right;

  img {
    width: 16px;
    height: 16px;
  }

  @media (min-width: 992px) {
    text-align: center;
    height: 32px;
    width: 32px;
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
const ConditionItem = ({ title, category, keyId, slug }) => {
  return (
    <LinkContainer>
      <Link to={slug}>
        {/*<Container>*/}
          <TextContainer>
            <Title className="typo-heading-s">{title}</Title>
            <Description className="typo-body-m">{category}</Description>
          </TextContainer>
          <ArrowContainer>
            <img src={ArrowRight} alt=""/>
          </ArrowContainer>
        {/*</Container>*/}
      </Link>
    </LinkContainer>
  )
}

ConditionItem.propTypes = {}

export default ConditionItem
