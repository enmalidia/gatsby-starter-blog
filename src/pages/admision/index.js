import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import SideImageFullEightBlock from "../../components/services/sideImageFullEightBlock"
import SideImageAllPaddingBlock from "../../components/services/sideImageAllPaddingBlock"
import AdmissionSchedule from "../../components/admission/admissionSchedule"
import AdmissionTwoColumnReq from "../../components/admission/admissionTwoColumnReq"
import AttentionDetails from "../../components/services/attentionDetails"
import pageData from "./data.json"
import AdmissionForm from "../../components/admission/admissionForm"
import InfoPayments from "../../components/home/infoPayments"
import indexPageData from "../../data/home/data.json"

const Details = styled.p`
  /* Headings DESKTOP/Heading S */
  line-height: 28px;
  color: var(--color-sea);
  margin: var(--spacing-7) 0px 0px 0px;
  /*     @media (min-width: 576px) {
      margin-bottom: var(--spacing-9);
    } */
`

const ExtraDetails = styled.p`
  line-height: var(--line-height-4);
  margin-top: var(--spacing-7);
`

const ContainerDetails = styled.div`
  @media (max-width: 576px) {
    & > div > p:first-of-type {
      margin-top: var(--spacing-9);
    }
  }
`

const ContactNote = styled.p`
  line-height: var(--line-height-1);
  margin-top: 8px;
`

const FormContainer = styled.div`
  margin-top: var(--spacing-7);
`

const AdmissionPage = () => {

  const { payments } = indexPageData


  const resources = useStaticQuery(graphql`
    query {
      adm1: file(relativePath: { eq: "admission/adm1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      adm2: file(relativePath: { eq: "admission/adm2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Admission" />
      <SideImageFullEightBlock
        header={pageData.header}
        title={pageData.title}
        //details={pageData.details[0]}
        image={resources.adm1}
        rtl
        reverse
      >
        <Details className="typo-heading-s">{pageData.details[0]}</Details>
        <ExtraDetails className="typo-body-l">
          {pageData.extradetails}
        </ExtraDetails>
        <ContainerDetails>
          <AttentionDetails
            list={pageData.contact.list}
            header={pageData.contact.header}
            itemColor="background"
          />
        </ContainerDetails>
        <ContactNote className="typo-body-s">
          {pageData.contactNote}
        </ContactNote>
      </SideImageFullEightBlock>

      <AdmissionTwoColumnReq
        reqList={pageData.requirements}
        title={pageData.requirementsTitle}
        notes={pageData.notes}
        docList={pageData.docs}
        buttonText={pageData.buttonText}
        downloadText={pageData.downloadText}
      />

      <SideImageAllPaddingBlock
        header={pageData.formSection.header}
        title={pageData.formSection.title}
        description={pageData.formSection.description}
        details={pageData.formSection.details}
        image={resources.adm2}
      >
        <FormContainer>
          <AdmissionForm {...pageData.formSection.form} />
        </FormContainer>
      </SideImageAllPaddingBlock>
      <InfoPayments {...payments} color={'#F6F8FC'}/>
    </Layout>
  )
}

export default AdmissionPage
