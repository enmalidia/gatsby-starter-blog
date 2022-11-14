import React from "react"
import styled from "@emotion/styled"

const WorkerInfo = styled.div`
  display: flex;
  align-items: center;
`
const WorkerPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: var(--spacing-4);
`

const WorkerName = styled.p`
  line-height: var(--line-height-6);
  color: var(--color-ashford);
  margin: 0px 0px;
`
const WorkerJobTitle = styled.p`
  line-height: var(--line-height-4);
  color: ${props =>
    props.jobColor ? `var(--color-${props.jobColor});` : `var(--color-white)`};
  margin: 0px 0px;
`
const WorkerCard = ({ name, job, image, jobColor }) => {
  return (
    <WorkerInfo>
      <WorkerPhoto src={image} />
      <div>
        <WorkerName className="typo-body-l">{name}</WorkerName>
        <WorkerJobTitle className="typo-body-s" jobColor={jobColor}>{job}</WorkerJobTitle>
      </div>
    </WorkerInfo>
  )
}

WorkerCard.propTypes = {}

export default WorkerCard
