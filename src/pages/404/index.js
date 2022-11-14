import styled from "@emotion/styled"
import { Link } from "gatsby"
import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import pageData from "./data.json"

const Title = styled.h1`
  font-family: var(--font-family-primary);
  font-style: normal;
  font-weight: var(--font-weight-light);
  font-size: 120px;
  line-height: 130%;
  color: var(--color-bodyfont);
  margin: 0px 0px var(--spacing-2) 0px;
`

const Description = styled.p`
  line-height: var(--line-height-5);
  text-align: center;
  color: var(--color-bodyfont);
  margin: 0px 0px var(--spacing-7) 0px;
`

const Button = styled.div`
  background: var(--color-sea);
  border: 2px solid var(--color-sea);
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  line-height: var(--line-height-3);
  text-align: center;
  color: var(--color-white);
  padding: var(--spacing-2) var(--spacing-4);
  width: fit-content;
  transition: background-color 0.6s ease-out, border-color 0.6s ease-out;

  :hover:not(.disabled) {
    background-color: var(--color-ashford);
    border-color: var(--color-ashford);
  }
`

const Container = styled.div`
  background: var(--color-background);
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ContentContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: var(--spacing-4);
  a {
    text-decoration: none;
  }
`
const NotFoundPage = () => {
  const { title, description, buttonText } = pageData
  return (
    <Layout>
      <Seo title="404: No encontrado" />
      <Container>
        <ContentContainer>
          <Title>{title}</Title>
          <Description className="typo-heading-s">{description}</Description>
          <Link to="/">
            <Button className="typo-body-m">{buttonText}</Button>
          </Link>
        </ContentContainer>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
