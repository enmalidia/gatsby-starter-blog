import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"

import { Container1440 } from "../generalStyledComponents"
const Copyright = styled.p`
  line-height: var(--line-height-1);
  color: var(--color-border);
  margin: 0px 0px;
  display: flex;
  align-items: center;
`

const Policy = styled.p`
  margin: 0px 0px;
  a {
    line-height: var(--line-height-4);
    text-decoration-line: underline;
    color: var(--color-white);

    transition: 0.6s ease-out color;
    &:hover {
      color: var(--color-sea);
    }
  }
`

const Container = styled(Container1440)`
  display: flex;
  flex-direction: column-reverse;
  /* align-items: center; */
  padding: var(--spacing-6) var(--spacing-4) var(--spacing-6) var(--spacing-4);
  & > p:first-of-type {
    margin-top: var(--spacing-6);
  }

  @media (min-width: 576px) {
    padding: var(--spacing-8) var(--spacing-10) var(--spacing-6)
      var(--spacing-10);
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    & > p:first-of-type {
      margin-top: 0px;
    }
  }

  @media (min-width: 1440px) {
    padding: var(--spacing-10) var(--spacing-16) var(--spacing-6)
      var(--spacing-16);
  }
`

const PoliciesContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  p:first-of-type {
    margin-bottom: var(--spacing-2);
  }
  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    p:first-of-type {
      margin-right: var(--spacing-7);
      margin-bottom: 0px;
    }
  }
`

const Rates = styled.a`
  display: inline-flex;
  line-height: var(--line-height-4);
  margin-bottom: var(--spacing-2);
  &:hover,
  &:link,
  &:visited,
  &:active {
    color: var(--color-white);
  }

  @media (min-width: 992px) {
    margin: 0 var(--spacing-7) 0 0;
    line-height: var(--line-height-1);
  }
`

const FooterEnd = ({ copyright, policies, rates }) => {
  return (
    <Container>
      <Copyright className="typo-body-s">{copyright}</Copyright>
      <PoliciesContainer>
        <Rates className="typo-body-s" href={rates.link} download>
          {rates.title}
        </Rates>
        {policies.map(({ id, title, link, document }) => (
          <Policy className="typo-body-s" key={id}>
            {document ? (
              <a className="gtm-action gtm-action-download" href={link} download>
                {title}
              </a>
            ) : (
              <Link to={link} className="typo-body-s">
                {title}{" "}
              </Link>
            )}
          </Policy>
        ))}
      </PoliciesContainer>
    </Container>
  )
}

export default FooterEnd
