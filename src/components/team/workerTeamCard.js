import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import Logo from "../../images/team/logo-no-photo.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: 4px;
  height: 445px;

  & > .team-worker-img-container {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    flex-grow: 1;
  }
`

const TextContainer = styled.div`
  margin: var(--spacing-4);
`
const Name = styled.p`
  line-height: var(--line-height-4);
  color: var(--color-ashford);
  margin: 0px 0px;
`

const Job = styled.p`
  line-height: var(--line-height-1);

  color: var(--color-lightfont);
  margin: 0px 0px var(--spacing-2) 0px;
`
const Email = styled.p`
  /* Text/Body S */
  font-size: 0px;
  margin: 0px 0px;
  & > a {
    line-height: var(--line-height-1);
    text-decoration: none;
    color: var(--color-sea);
    margin: 0px 0px;
    cursor: pointer;
    transition: 0.6s ease-out color;
    &:hover {
      color: var(--color-ashford);
    }
  }
`

const NoImage = styled.div`
  background-color: var(--color-sand);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border-radius: 4px;

  & > img {
    width: 130px;
    height: 59px;
  }
`
const WorkerTeamCard = ({ name, job, img, emails }) => {
  return (
    <Container>
      <TextContainer>
        <Job className="typo-body-s">{job}</Job>
        <Name className="typo-body-l">{name}</Name>
        {emails.map((email, index) => (
          <Email key={index}>
            <a href={`mailto:${email}`} className="typo-body-s gtm-action gtm-action-email">
              {email}
            </a>
          </Email>
        ))}
      </TextContainer>
      {!!img ? (
        <GatsbyImage
          image={img.childImageSharp.gatsbyImageData}
          alt={name}
          layout="constrained"
          className="team-worker-img-container"
        />
      ) : (
        <NoImage>
          <img src={Logo} />
        </NoImage>
      )}
    </Container>
  )
}
WorkerTeamCard.propTypes = {}

export default WorkerTeamCard
