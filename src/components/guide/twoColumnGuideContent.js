import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import { Container1440 } from "../generalStyledComponents"
import DownloadCard from "../guide/downloadCard"
import ServiceTextInfoBlock from "../services/serviceTextInfoBlock"
import WorkerCard from "../workerCard"

import WorkerImg from "../../images/director.png"
import { graphql, useStaticQuery } from "gatsby"
import PlansCard from "./plansCard"

const Container = styled(Container1440)`
  padding: var(--spacing-8) var(--spacing-4) var(--spacing-8) var(--spacing-4);
  @media (min-width: 768px) {
    padding: var(--spacing-10) var(--spacing-5) var(--spacing-10)
      var(--spacing-5);
  }
  @media (min-width: 992px) {
    padding: var(--spacing-10);
  }
  @media (min-width: 1024px) {
    padding: var(--spacing-16);
  }
`
const WorkerContainer = styled.div`
  padding: var(--spacing-7) 0px;
  border-bottom: 1px solid var(--color-border);
`

const LeftColContent = styled.div`
  position: sticky;
  top: var(--spacing-3);
  display: flex;
  justify-content: center;
  padding-top: var(--spacing-8);
  @media (min-width: 768px) {
    padding-top: 0px;
    padding-right: var(--spacing-5);
  }
  @media (min-width: 992px) {
    padding-right: var(--spacing-10);
  }
  @media (min-width: 1024px) {
    padding-right: var(--spacing-16);
  }
`
const TwoColumnGuideContent = ({
  cardTitle,
  cardDescription,
  docs,
  actionDownload,
  header,
  title,
  description,
  details,
  worker,
  planTitle,
  downloadText,
}) => {
  const imgQuery = useStaticQuery(graphql`
    query {
      guide1: file(relativePath: { eq: "guide/guide1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <Container>
      <div className="row g-0 row-cols-1 row-cols-md-2 flex-md-row-reverse">
        <div className="col">
          <ServiceTextInfoBlock
            header={header}
            title={title}
            description={description}
            details={details}
            className
          />
          <WorkerContainer>
            <WorkerCard {...worker} jobColor="lightfont" image={WorkerImg} />
          </WorkerContainer>
          <PlansCard title={planTitle} />
        </div>
        <div className="col">
          <LeftColContent>
            <DownloadCard
              title={cardTitle}
              description={cardDescription}
              docs={docs}
              button={actionDownload}
              image={imgQuery.guide1}
              downloadText={downloadText}
            />
          </LeftColContent>
        </div>
      </div>
    </Container>
  )
}

TwoColumnGuideContent.propTypes = {}

export default TwoColumnGuideContent
