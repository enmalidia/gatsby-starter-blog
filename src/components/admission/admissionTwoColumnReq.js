import React from "react"
import styled from "@emotion/styled"
import ServiceTextInfoBlockList from "../services/serviceTextInfoBlockList"
import { Container1440 } from "../generalStyledComponents"
import Download from "../../images/download.svg"
import DocList from "./docList"

const Container = styled.div`
  background-color: var(--color-background);
`

const LeftContainer = styled.div`
  width: 100%;
  @media (min-width: 992px) {
    width: 50%;
  }
  @media (min-width: 1440px) {
    width: 55%;
  }
`

const RightContainer = styled.div`
  padding-left: 0px;
  width: 100%;
  @media (min-width: 992px) {
    width: 50%;
    padding-left: var(--spacing-10);
  }
  @media (min-width: 1100px) {
    padding-left: var(--spacing-16);
  }
  @media (min-width: 1440px) {
    width: 45%;
  }
`
const Title = styled.p`
  line-height: 28px;
  color: var(--color-sea);
  margin: 0px 0px;
  padding-top: var(--spacing-6);

  @media (min-width: 992px) {
    padding-top: 0px;
  }
`

const ListTitle = styled(Title)`
  padding-bottom: var(--spacing-6);
`

const DownloadTitle = styled(Title)`
  padding-top: 0px;
  padding-left: var(--spacing-2);
`
const DownloadTitleContainer = styled.div`
  display: flex;
  padding-bottom: var(--spacing-6);
`
const ContentContainer = styled(Container1440)`
  padding: var(--spacing-4);
  display: flex;
  display: flex;
  flex-direction: column-reverse;
  background-color: var(--color-background);
  @media (min-width: 768px) {
    padding: var(--spacing-10);
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    padding: var(--spacing-16);
  }
`
const Note = styled.p`
  /* Text/Body S */

  line-height: var(--line-height-1);
  /* identical to box height, or 133% */

  /* $lightfont */

  color: var(--color-lightfont);
  margin: var(--spacing-4) 0px 0px 0px;
`
const AdmissionTwoColumnReq = ({
  reqList,
  docList,
  notes,
  title,
  buttonText,
  downloadText,
}) => {
  const notesBlock = () => {
    if (notes) {
      return notes.map(({ text, key }) => (
        <Note className="typo-body-s" key={key}>
          {text}
        </Note>
      ))
    }
    return null
  }
  return (
    <Container>
      <ContentContainer>
        <LeftContainer>
          <ListTitle className="typo-heading-s">{title}</ListTitle>
          <ServiceTextInfoBlockList list={reqList} />
          {notesBlock()}
        </LeftContainer>
        <RightContainer>
          <DownloadTitleContainer>
            <img src={Download} alt=""/>
            <DownloadTitle>{buttonText}</DownloadTitle>
          </DownloadTitleContainer>
          <DocList list={docList} downloadText={downloadText} />
        </RightContainer>
      </ContentContainer>
    </Container>
  )
}

export default AdmissionTwoColumnReq
