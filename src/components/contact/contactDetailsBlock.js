import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import { useBreakpoint } from "gatsby-plugin-breakpoints"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Container1440 } from "../generalStyledComponents"
import ContactDetail from "./contactDetail"
import SocialIcon from "../condition/socialIcon"

import Facebook from "../../images/facebook.svg"
import Linkedin from "../../images/linkedin.svg"
import Twiter from "../../images/twiter.svg"
import Instagram from "../../images/instagram.svg"
import AttentionDetails from "../services/attentionDetails"

const Container = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  display: grid;

  background-color: var(--color-background);

  @media (min-width: 576px) {
    /* padding-top: var(--spacing-11); */
    padding-bottom: var(--spacing-16);
  }
`

const ContentContainer = styled.div`
  padding: 0px var(--spacing-4) 0px var(--spacing-4);
  & > div:not(:last-of-type) {
    margin-bottom: var(--spacing-7);
  }
  @media (min-width: 576px) {
    /* padding-bottom: var(--spacing-10);
    padding-top: var(--spacing-10); */
    /*  padding-left: ${props => (props.rtl ? "var(--spacing-10)" : "0px")};
    padding-right: ${props => (props.rtl ? "0px" : "var(--spacing-10)")}; */
  }
  @media (min-width: 992px) {
    padding-bottom: 0px;
    padding-top: 0px;
    padding-left: ${props => (props.rtl ? "var(--spacing-10)" : "0px")};
    padding-right: ${props => (props.rtl ? "0px" : "var(--spacing-10)")};
  }
  @media (min-width: 1024px) {
    padding-left: ${props => (props.rtl ? "var(--spacing-16)" : "0px")};
    padding-right: ${props => (props.rtl ? "0px" : "var(--spacing-16)")};
  }
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Row = styled.div`
  width: 100%;
  flex-flow: ${props => (props.reverse ? "column-reverse" : "wrap")};
  @media (min-width: 768px) {
    flex-flow: wrap;
  }
`
const Grid = styled.div`
  display: grid;
  max-height: 340px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding-right: var(--spacing-10);
    padding-left: var(--spacing-10);
    max-height: 100%;
    height: 100%;
    .gatsby-image-wrapper {
      border-radius: 6px;
    }
    .gatsby-image-wrapper div:first-of-type {
      padding-top: unset !important;
    }
  }

  @media (min-width: 992px) {
    display: grid;
    padding-right: var(--spacing-16);
    padding-left: var(--spacing-16);
  }
`

const BackContainer = styled.div`
  grid-area: 1/1;
  display: flex;
`

const FrontContainer = styled(Container1440)`
  grid-area: 1/1;
  display: flex;
`

const Subsection = styled.div`
  width: 50%;
`

const MultiDetailContainer = styled.div`
  & > div {
    padding-top: var(--spacing-6);
  }

  @media (min-width: 576px) {
    & > div:last-of-type {
      padding-left: var(--spacing-4);
    }

    & > div:first-of-type {
      padding-right: var(--spacing-4);
    }
  }

  @media (min-width: 768px) {
    & > div:last-of-type {
      padding-left: 0px;
    }

    & > div:first-of-type {
      padding-right: 0px;
    }
  }

  @media (min-width: 992px) {
    & > div {
      padding-top: var(--spacing-4);
    }
    & > div:last-of-type {
      padding-left: var(--spacing-4);
    }

    & > div:first-of-type {
      padding-right: var(--spacing-4);
    }
  }
`
const SingleDetailContainer = styled.div`
  & > div {
    padding-top: var(--spacing-6);
  }

  @media (min-width: 992px) {
    & > div {
      padding-top: var(--spacing-4);
    }
  }
`
const SectionTitle = styled.p`
  line-height: 32px;
  color: var(--color-sea);
  margin: 0px 0px;
`
const SocialContainer = styled.div`
  display: flex;
  margin-right: calc(var(--spacing-4) * -1);
  margin-top: var(--spacing-4);
  margin-bottom: var(--spacing-7);

  & > div {
    margin-right: var(--spacing-4);
  }

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`
const ContainerMap = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 520px;
  /* padding-top: 100%; */ /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
`

/* Then style the iframe to fit in the container div with full height and width */
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`
const AttentionDetailsTitle = styled.p`
  line-height: var(--line-height-6);
  color: var(--color-sea);
  margin: 0px;
`
const AttentionDetailsCustom = styled(AttentionDetails)`
  width: 100%;
`
const ContactDetailsBlock = ({
  reverse,
  contact,
  social,
  rtl,
  image,
  extraPadding,
}) => {
  const { header, ...details } = contact
  const breakpoints = useBreakpoint()
  return (
    <Container>
      <BackContainer>
        <Subsection>
          {breakpoints.bsmd && !rtl ? (
            <Grid extraPadding={extraPadding} rtl={rtl}>
              <ContainerMap>
                <Iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.6288777161967!2d-66.0673487483928!3d18.455152104158802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036f46663f7843%3A0x723eb05ffbe83d92!2sAshford%20Hospital!5e0!3m2!1ses-419!2sus!4v1644620663410!5m2!1ses-419!2sus"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                ></Iframe>
              </ContainerMap>
            </Grid>
          ) : null}
        </Subsection>
        <Subsection>
          {breakpoints.bsmd && rtl ? (
            <Grid extraPadding={extraPadding} rtl={rtl}>
              <ContainerMap>
                <Iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.6288777161967!2d-66.0673487483928!3d18.455152104158802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036f46663f7843%3A0x723eb05ffbe83d92!2sAshford%20Hospital!5e0!3m2!1ses-419!2sus!4v1644620663410!5m2!1ses-419!2sus"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                ></Iframe>
              </ContainerMap>
            </Grid>
          ) : null}
        </Subsection>
      </BackContainer>
      <FrontContainer>
        <Row className="row g-0" reverse={reverse}>
          {rtl ? (
            <Col className="col-12 col-md-6">
              <ContentContainer rtl={rtl}>
                <AttentionDetailsTitle className="typo-heading-m">
                  {header}
                </AttentionDetailsTitle>
                <AttentionDetailsCustom {...details} itemColor="white" />

                <SocialContainer>
                  <SocialIcon href={social.networks.facebook}>
                    <img src={Facebook} />
                  </SocialIcon>
                  <SocialIcon href={social.networks.linkedin}>
                    <img src={Linkedin} />
                  </SocialIcon>
                  <SocialIcon href={social.networks.twiter}>
                    <img src={Twiter} />
                  </SocialIcon>
                  <SocialIcon href={social.networks.instagram}>
                    <img src={Instagram} />
                  </SocialIcon>
                </SocialContainer>
              </ContentContainer>
            </Col>
          ) : (
            <Col className="col-12 col-md-6">
              {!breakpoints.bsmd && (
                <Grid extraPadding={extraPadding} rtl={rtl}>
                  <ContainerMap>
                    <Iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.6288777161967!2d-66.0673487483928!3d18.455152104158802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036f46663f7843%3A0x723eb05ffbe83d92!2sAshford%20Hospital!5e0!3m2!1ses-419!2sus!4v1644620663410!5m2!1ses-419!2sus"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      loading="lazy"
                    ></Iframe>
                  </ContainerMap>
                </Grid>
              )}
            </Col>
          )}
          {rtl ? (
            <Col className="col-12 col-md-6">
              {!breakpoints.bsmd && (
                <Grid extraPadding={extraPadding} rtl={rtl}>
                  <ContainerMap>
                    <Iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.6288777161967!2d-66.0673487483928!3d18.455152104158802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036f46663f7843%3A0x723eb05ffbe83d92!2sAshford%20Hospital!5e0!3m2!1ses-419!2sus!4v1644620663410!5m2!1ses-419!2sus"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      loading="lazy"
                    ></Iframe>
                  </ContainerMap>
                </Grid>
              )}
            </Col>
          ) : (
            <Col className="col-12 col-md-6">
              <ContentContainer rtl={rtl}>
                <AttentionDetailsTitle className="typo-heading-m">
                  {header}
                </AttentionDetailsTitle>
                <AttentionDetailsCustom {...details} itemColor="white" />

                <SectionTitle className="typo-heading-m">
                  {social.title}
                </SectionTitle>
                <SocialContainer>
                  <SocialIcon href={social.networks.facebook}>
                    <img src={Facebook} />
                  </SocialIcon>
                  <SocialIcon href={social.networks.linkedin}>
                    <img src={Linkedin} />
                  </SocialIcon>
                  <SocialIcon href={social.networks.twiter}>
                    <img src={Twiter} />
                  </SocialIcon>
                  <SocialIcon href={social.networks.instagram}>
                    <img src={Instagram} />
                  </SocialIcon>
                </SocialContainer>
              </ContentContainer>
            </Col>
          )}
        </Row>
      </FrontContainer>
    </Container>
  )
}
ContactDetailsBlock.defaultProps = {
  reverse: false,
  rtl: false,
  items: [],
  extraPadding: false,
}
ContactDetailsBlock.propTypes = {}

export default ContactDetailsBlock
