import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { Container1440 } from "../components/generalStyledComponents"
import styled from "@emotion/styled"
import SocialIcon from "../components/condition/socialIcon"
import Sms from "../images/sms.svg"
import Facebook from "../images/facebook.svg"
import Linkedin from "../images/linkedin.svg"
import Twiter from "../images/twiter.svg"
import Instagram from "../images/instagram.svg"
import LeftArrow from "../images/left-arrow.svg"
import SintomList from "../components/condition/sintomList"

const LinkContainer = styled.div`
  padding-bottom: 40px;
  a,
  a:hover,
  a:visited {
    font-family: var(--font-family-secondary);
    font-style: normal;
    font-weight: normal;
    font-size: var(--font-size-2);
    line-height: var(--line-height-1);
    text-decoration-line: underline;
    color: var(--color-sea);
    margin: 0px 4px;
  }

  img {
    width: 8px;
    height: 8.01px;
    margin-right: 8px;
  }

  @media (min-width: 768px) {
    padding-bottom: var(--spacing-11);
  }
`

const LefContainer = styled.div`
  background: var(--color-background);
  /* padding-right: calc(var(--bs-gutter-x) * 0.5); */
  @media (min-width: 768px) {
    padding-right: var(--spacing-11);
  }
`
const LeftContentContainer = styled.div`
  /* height: 100%; */
  background: var(--color-background);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  padding-top: var(--spacing-6);
  padding-bottom: var(--spacing-8);

  @media (min-width: 768px) {
    padding-left: var(--spacing-16);
    padding-right: var(--spacing-11);
    padding-top: var(--spacing-7);
    padding-bottom: var(--spacing-8);
    /*  margin-right: var(--spacing-10); */
  }
`
const RightContainer = styled.div`
  @media (min-width: 768px) {
    padding-left: var(--spacing-11) !important;
  }
`

const RightContentContainer = styled.div`
  padding: var(--spacing-8) var(--spacing-4) var(--spacing-8) var(--spacing-4);

  > p:first-of-type {
    padding-top: 0px;
  }

  @media (min-width: 768px) {
    padding: var(--spacing-16) var(--spacing-16) var(--spacing-16) 0px;
  }
`

const Type = styled.p`
  font-style: normal;
  line-height: var(--line-height-1);
  text-transform: uppercase;
  color: var(--color-sea);
  margin: 0px 0px;
  padding-bottom: var(--spacing-4);
`

const Name = styled.p`
  font-style: normal;
  line-height: var(--line-height-11);
  color: var(--color-bodyfont);
  margin: 0px 0px;
  padding-bottom: var(--spacing-6);
`

const Question = styled.p`
  font-style: normal;
  line-height: var(--line-height-5);
  color: var(--color-sea);
  margin: 0px 0px;
  padding-bottom: var(--spacing-6);

  @media (min-width: 768px) {
    padding-bottom: var(--spacing-7);
  }
`
const Orientation = styled.p`
  font-style: normal;
  line-height: var(--line-height-4);
  color: var(--color-bodyfont);
  margin: 0px 0px;

  padding-bottom: 24px;
`
const Button = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: var(--spacing-2) var(--spacing-4) var(--spacing-2) 10px;
  width: fit-content;

  background: var(--color-sea);
  border: 2px solid var(--color-sea);
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0px 0px 24px 0px;

  cursor: pointer;

  img {
    width: 13.33px;
    height: 13.33px;
  }

  transition: background-color 0.6s ease-out, border-color 0.6s ease-out;

  &:hover {
    background-color: var(--color-ashford);
    border-color: var(--color-ashford);
  }
`
const ButtonText = styled.p`
  font-style: normal;
  line-height: var(--line-height-3);
  text-align: center;
  color: var(--color-white);
  margin: 0px 0px 0px var(--spacing-2);
`
const ShareMessage = styled.p`
  font-style: normal;
  line-height: var(--line-height-1);
  color: var(--color-lightfont);
  margin: 0px 0px;
  padding-bottom: var(--spacing-6);
`

const SocialContainer = styled.div`
  display: flex;
  column-gap: var(--spacing-4);
`

const TextHeader = styled.p`
  font-style: normal;
  line-height: var(--line-height-6);

  color: var(--color-sea);
  margin: 0px 0px;
  padding-bottom: var(--spacing-2);
  padding-top: var(--spacing-9);
`

const TextDetail = styled.p`
  font-style: normal;
  line-height: var(--line-height-4);
  color: var(--color-bodyfont);
  margin: 0px 0px;
`

const ListContainer = styled.div`
  padding-top: var(--spacing-6);
`

const Container = styled.div`
  display: grid;
`
const BackContainer = styled.div`
  grid-area: 1/1;
  display: flex;
`

const FrontContainer = styled(Container1440)`
  grid-area: 1/1;
  display: flex;

  @media (min-width: 768px) {
    .row-container {
      margin-right: 0px;
    }
  }
`

const Subsection = styled.div`
  width: 50%;
`

const SubsectionLeft = styled(Subsection)`
  @media (min-width: 768px) {
    padding-right: var(--spacing-11);
    div {
      background-color: var(--color-background);
      height: 100%;
    }
  }
`

const ConditionView = ({ condition }) => {
  return (
    <Layout>
      <Seo title={`Condition: ${condition.name}`} />
      <Container>
        <BackContainer>
          <SubsectionLeft>
            <div></div>
          </SubsectionLeft>
          <Subsection></Subsection>
        </BackContainer>

        <FrontContainer>
          <div className="row g-0 row-container">
            <LefContainer className="col-12 col-md-6">
              <LeftContentContainer className="sticky-top">
                <LinkContainer>
                  <img src={LeftArrow} />
                  <Link to="/condiciones">Volver al listado</Link>
                </LinkContainer>
                <Type className="typo-label-s">{condition.category}</Type>
                <Name className="typo-heading-xl">{condition.name}</Name>
                <Orientation className="typo-body-l">
                  {condition.orientation}
                </Orientation>
                {/*<Button>
                  <img src={Sms} />
                  <ButtonText className="typo-mody-m">
                    Solicita una cita con un medico
                  </ButtonText>
                </Button>*/}
                <ShareMessage className="typo-label-l">
                  Comparte o envía a quien necesites:
                </ShareMessage>
                <SocialContainer>
                  <SocialIcon href="https://es-la.facebook.com/ashfordhospitalpr/">
                    <img src={Facebook} />
                  </SocialIcon>
                  <SocialIcon href="https://www.linkedin.com/company/ashfordhospital/?originalSubdomain=pr">
                    <img src={Linkedin} />
                  </SocialIcon>
                  <SocialIcon href="https://twitter.com/ashfordpr">
                    <img src={Twiter} />
                  </SocialIcon>
                  <SocialIcon href="https://www.instagram.com/ashfordhospitalpr/?hl=es">
                    <img src={Instagram} />
                  </SocialIcon>
                </SocialContainer>
              </LeftContentContainer>
            </LefContainer>
            <RightContainer className="col-12 col-md-6">
              <RightContentContainer>
                <TextHeader className="typo-header-m">Causas</TextHeader>
                <TextDetail className="typo-body-l">
                  {condition.cause}
                </TextDetail>

                <TextHeader className="typo-header-m">Síntomas</TextHeader>
                <TextDetail className="typo-body-l">
                  {condition.sintoms}
                </TextDetail>
                <ListContainer>
                  <SintomList list={condition.sintomList} />
                </ListContainer>

                {condition.riskList && (
                  <>
                    <TextHeader className="typo-header-m">
                      Factores de riesgo
                    </TextHeader>
                    <ListContainer>
                      <SintomList list={condition.riskList} />
                    </ListContainer>
                  </>
                )}

                <TextHeader className="typo-header-m">
                  Pruebas y exámenes
                </TextHeader>
                {condition.testExams && (
                  <>
                    <TextDetail className="typo-body-l">
                      {condition.testExams}
                    </TextDetail>
                  </>
                )}

                {condition.examList && (
                  <>
                    <ListContainer>
                      <SintomList list={condition.examList} />
                    </ListContainer>
                  </>
                )}

                <TextHeader className="typo-header-m">Tratamientos</TextHeader>
                <TextDetail className="typo-body-l">
                  {condition.treatment}
                </TextDetail>
              </RightContentContainer>{" "}
            </RightContainer>
          </div>
        </FrontContainer>
      </Container>
    </Layout>
  )
}

ConditionView.propTypes = {}

export default ConditionView
