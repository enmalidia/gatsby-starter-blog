import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { Container1440 } from "../../components/generalStyledComponents"
import ContactDetailsBlock from "../../components/contact/contactDetailsBlock"
import pageData from "./data.json"

const Header = styled.p`
  color: var(--color-sea);
  margin-bottom: var(--spacing-4);
  text-transform: uppercase;
`

const Title = styled.p`
  color: $var(--color-bodyfont);
  margin-bottom: 0px;
`

const Description = styled.p`
  color: var(--color-sea);
`

const ContentContainer = styled(Container1440)`
  padding: var(--spacing-8) var(--spacing-4) var(--spacing-8) var(--spacing-4);

  @media (min-width: 992px) {
    padding: var(--spacing-10) var(--spacing-10) var(--spacing-8)
      var(--spacing-10);
  }

  @media (min-width: 1440px) {
    padding: var(--spacing-16) var(--spacing-16) var(--spacing-12)
      var(--spacing-16);
  }
`

const Container = styled.div`
  background-color: var(--color-background);
`
const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      hands: file(relativePath: { eq: "about/hands.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Contact" />
      <Container>
        <ContentContainer>
          <Header className="typo-label-s">{pageData.header}</Header>
          <Title className="typo-heading-xl">{pageData.title}</Title>
        </ContentContainer>
        <ContactDetailsBlock
          contact={pageData.contact}
          social={pageData.social}
          image={data.hands}
          reverse
        />
      </Container>
    </Layout>
  )
}
export default ContactPage
