import React from "react"
import styled from "@emotion/styled"
import logo from "../../images/ashford-logo-white.svg"
import rightArrow from "../../images/right-arrow.svg"
import SocialIcon from "../condition/socialIcon"

import facebook from "../../images/facebook.svg"
import linkedin from "../../images/linkedin.svg"
import twiter from "../../images/twiter.svg"
import instagram from "../../images/instagram.svg"
import { Link } from "gatsby"
import { parseTextWithoutStyle } from "../../utils/text"

const Logo = styled.img`
  width: 147px;
  height: 56px;
`

const Arrow = styled.img`
  width: 12px;
  height: 12px;
`
const Header = styled.p`
  line-height: var(--line-height-5);
  margin: var(--spacing-8) 0 0 0;
  color: var(--color-white);
`

const Address = styled.p`
  line-height: var(--line-height-3);
  color: var(--color-white);
`
const LinkWrapper = styled.div`
  width: fit-content;
  &:hover {
    a > div > label {
      margin-right: var(--spacing-5);
    }
  }
`
const LinkContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: fit-content;

  line-height: var(--line-height-5);
  color: var(--color-sea);
  cursor: pointer;
  & > * {
    pointer-events: none;
  }
  label {
    margin-right: var(--spacing-3);
    transition: 0.3s ease-out all;
  }
`
const LinksContainer = styled.div`
  margin-top: var(--spacing-10);

  & > div:not(:last-of-type) {
    margin-bottom: var(--spacing-2);
  }

  a {
    text-decoration: none !important;
  }
`

const SocialContainer = styled.div`
  display: flex;
  margin-right: calc(var(--spacing-4) * -1);
  margin-top: var(--spacing-7);

  & > div {
    margin-right: var(--spacing-4);
  }

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`

const FooterContact = ({ className, name, links, address, social }) => {
  return (
    <div className={className}>
      <Logo src={logo} />
      <Header className="typo-heading-s">{name}</Header>
      <Address className="typo-body-m">
        {parseTextWithoutStyle(address)}
      </Address>
      <LinksContainer>
        {links.map(({ title, link, id }) => {
          return (
            <LinkWrapper key={id}>
              {id !== 4 ? (
                <Link to={link}>
                  <LinkContent>
                    <label className="typo-heading-s">{title}</label>
                    <Arrow src={rightArrow} />
                  </LinkContent>
                </Link>
              ) : (
                <a href={link} target="_blank" rel="noreferrer">
                  <LinkContent>
                    <label className="typo-heading-s">{title}</label>
                    <Arrow src={rightArrow} />
                  </LinkContent>
                </a>
              )}
            </LinkWrapper>
          )
        })}
      </LinksContainer>
      <SocialContainer>
        <SocialIcon color="border" href={social.facebook}>
          <img src={facebook} alt=""/>
        </SocialIcon>
        <SocialIcon color="border" href={social.linkedin}>
          <img src={linkedin} alt=""/>
        </SocialIcon>
        <SocialIcon color="border" href={social.twiter}>
          <img src={twiter} alt=""/>
        </SocialIcon>
        <SocialIcon color="border" href={social.instagram}>
          <img src={instagram} alt=""/>
        </SocialIcon>
      </SocialContainer>
    </div>
  )
}

export default FooterContact
