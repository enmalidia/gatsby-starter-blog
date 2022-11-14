import React from "react"
import PropTypes from "prop-types"
import WorkerTeamCard from "./workerTeamCard"
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  /* border-bottom: 1px solid var(--color-border); */
  padding-bottom: var(--spacing-7);
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    padding-bottom: var(--spacing-11);
  }
`
const NameSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: var(--spacing-3);
`
const RightSection = styled.div`
  overflow: hidden;
  width: 100%;
`
const LeftSection = styled.div`
  width: 100%;
  padding-bottom: var(--spacing-7);
  @media (min-width: 768px) {
    /* width: 316px; */
    width: fit-content;
    padding-bottom: 0px;
  }
`
const WorkerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* justify-content: space-between; */
  & > div {
    margin-bottom: var(--spacing-4);
    max-width: 343px;
    width: 100%;
  }

  @media (min-width: 450px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: initial;
    margin-right: calc(var(--spacing-7) * -1);
    margin-bottom: calc(var(--spacing-7) * -1);

    & > div {
      margin-right: var(--spacing-7);
      margin-bottom: var(--spacing-7);
      max-width: 200px;
      width: 100%;
    }

    @media (min-width: 992px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: initial;
      margin-right: calc(var(--spacing-7) * -1);
      margin-bottom: calc(var(--spacing-7) * -1);

      & > div {
        margin-right: var(--spacing-7);
        margin-bottom: var(--spacing-7);
        max-width: 278.67px;
        width: 100%;
      }
    }
  }
`

const Separator = styled.div`
  border-bottom: 2px solid var(--color-ashford);
  width: 55px;
  height: 0px;
  margin-left: var(--spacing-7);
  margin-right: var(--spacing-7);
`

const TeamName = styled.p`
  line-height: 28px;
  color: var(--color-bodyfont);
  margin: 0px 0px;
  white-space: nowrap;
`
const TeamWorkers = ({ name, workers }) => {
  return (
    <Container>
      <LeftSection>
        <NameSection>
          <TeamName className="typo-heading-m">{name}</TeamName>
          <Separator></Separator>
        </NameSection>
      </LeftSection>
      <RightSection>
        <WorkerLayout>
          {workers.map(worker => (
            <WorkerTeamCard {...worker} key={worker.id} />
          ))}
        </WorkerLayout>
      </RightSection>
    </Container>
  )
}

TeamWorkers.propTypes = {}

export default TeamWorkers
