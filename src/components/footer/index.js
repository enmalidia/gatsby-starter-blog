import React from "react"
import PropTypes from "prop-types"
import { v4 as uuidv4 } from "uuid"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import styled from "@emotion/styled"
import data from "../../data/footer/data.json"

import FooterContact from "./footerContact"
import { Container1440 } from "../generalStyledComponents"
import FooterList from "./footerList"
import FooterEnd from "./footerEnd"

const FooterContainer = styled.div`
  width: 100%;
  background-color: var(--color-navy);
`

const FooterListClean = styled(FooterList)`
  margin: 0px;
  padding: 0px;
  border: none !important;
  width: 100%;
`
const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
const Col = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  & > div {
    margin-bottom: var(--spacing-7);
  }
  & > div:not(:first-of-type) {
    margin-top: var(--spacing-7);
  }
`
const FooterContent = styled(Container1440)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: var(--spacing-8) var(--spacing-4) 0px var(--spacing-4);
  @media (min-width: 576px) {
    padding: var(--spacing-11) var(--spacing-10) 0px var(--spacing-10);
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 800px) {
  }

  @media (min-width: 992px) {
    padding: var(--spacing-11) var(--spacing-16) 0px var(--spacing-16);
  }
`
const FooterContactCustom = styled(FooterContact)`
  width: ${props => (props.maxWidth ? "100%" : "fit-content")};
  @media (min-width: 576px) {
    margin-right: var(--spacing-7);
  }
`

const ExpandableFooterList = styled(FooterList)`
  width: ${props => (props.maxWidth ? "100%" : "fit-content")};
`
const Footer = props => {
  const breakpoints = useBreakpoint()

  const { sectionOneList, sectionTwoList, contact, copyright, policies, rates } = data

  const smMenus = () => {
    return (
      <Col>
        <FooterContactCustom {...contact} />
        <FooterListClean {...sectionOneList} />
        <FooterListClean {...sectionTwoList} />
      </Col>
    )
  }

  const mdMenus = () => {
    return (
      <Col>
        <Row>
          <FooterContactCustom {...contact} maxWidth />
          <ExpandableFooterList {...sectionTwoList} maxWidth />
        </Row>
        <Row>
          <FooterListClean splitPoint={10} {...sectionOneList} />
        </Row>
      </Col>
    )
  }

  const lgMenus = () => {
    return (
      <Row>
        <FooterContactCustom {...contact} />
        <FooterList splitPoint={10} {...sectionOneList} />
        <FooterList {...sectionTwoList} />
      </Row>
    )
  }
  return (
    <footer>
      <FooterContainer>
        <FooterContent>
          {!breakpoints.md && lgMenus()}
          {breakpoints.md && breakpoints.bssm && mdMenus()}
          {!breakpoints.bssm && smMenus()}
        </FooterContent>
        <FooterEnd copyright={copyright} policies={policies} rates={rates} />
      </FooterContainer>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
