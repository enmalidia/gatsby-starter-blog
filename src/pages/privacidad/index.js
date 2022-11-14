import styled from "@emotion/styled"
import * as React from "react"
import { Container1440 } from "../../components/generalStyledComponents"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import pageData from "./data.json"

const ContentContainer = styled(Container1440)`
  padding: var(--spacing-8) var(--spacing-4) var(--spacing-8) var(--spacing-4);

  @media (min-width: 992px) {
    padding: var(--spacing-10) var(--spacing-10) var(--spacing-10)
      var(--spacing-10);
  }

  @media (min-width: 1440px) {
    padding: var(--spacing-11) var(--spacing-16) var(--spacing-11)
      var(--spacing-16);
  }
`

const Container = styled.div`
  background-color: var(--color-background);
`

const Title = styled.p`
  line-height: var(--line-height-11);
  color: var(--color-bodyfont);
  padding-bottom: var(--spacing-8);
  margin: 0px 0px var(--spacing-8) 0px;
  border-bottom: 1px solid var(--color-border);
`

const InnerHtmlText = styled.div`
  font: var(--font-weight-regular) var(--font-size-4)
    var(--font-family-secondary) var(--color-bodyfont);
  a {
    text-decoration: none;
    color: var(--color-sea);
    cursor: pointer;
    transition: 0.6s ease-out color;
    &:hover {
      color: var(--color-navy);
    }
  }
  & > h2 {
    /* Headings DESKTOP/Heading M */

    font: var(--typo-heading-m);
    letter-spacing: var(--letter-spacing-regular);
    line-height: var(--line-height-6);
    margin: var(--spacing-7) 0px var(--spacing-4) 0px;
  }
`

const PrivacyPage = () => {
  return (
    <Layout>
      <Seo title="Privacy policy" />
      <Container>
        <ContentContainer>
          <Title className="typo-heading-xl">Política de privacidad</Title>
          <InnerHtmlText
            dangerouslySetInnerHTML={{ __html: pageData["content"] }}
          ></InnerHtmlText>
        </ContentContainer>
      </Container>
    </Layout>
  )
}

export default PrivacyPage
