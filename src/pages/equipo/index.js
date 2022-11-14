import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import { graphql } from "gatsby"
import { Container1440 } from "../../components/generalStyledComponents"
import styled from "@emotion/styled"
import TeamWorkers from "../../components/team/teamWorkers"
import pageData from "./data.json"

const ContentContainer = styled(Container1440)`
  padding: var(--spacing-8) var(--spacing-4);

  @media (min-width: 992px) {
    padding: var(--spacing-10);
  }

  @media (min-width: 1440px) {
    padding: var(--spacing-16);
  }
`
const TextContainer = styled.div``

const Header = styled.p`
  /* Labels/Label S */

  line-height: 16px;
  /* identical to box height, or 160% */

  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-sea);
  margin: 0px 0px var(--spacing-4) 0px;
`
const Teams = styled.div`
  & > div:not(:last-of-type) {
    margin-bottom: var(--spacing-7);
    border-bottom: 1px solid var(--color-border);
    @media (min-width: 768px) {
      margin-bottom: var(--spacing-11);
    }
  }
`
const Title = styled.p`
  /* Headings DESKTOP/Heading XL */

  font-family: Futura Std;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 58px;

  color: var(--color-bodyfont);

  margin: 0px 0px;
  margin-bottom: var(--spacing-11);

  @media (min-width: 768px) {
    margin-bottom: var(--spacing-16-esp1);
  }
`

const Container = styled.div`
  background-color: var(--color-background);
`
const TeamPage = ({ data }) => {
  const [teams, setTeams] = React.useState([])

  React.useEffect(() => {
    const newTeams = JSON.parse(JSON.stringify(pageData.teams))
    newTeams.map(team => {
      team.workers = team.workers.map(worker => {
        worker.img = data[worker.img]
        return worker
      })
      return team
    })
    setTeams(newTeams)
  }, [pageData.teams])

  return (
    <Layout>
      <Seo title="Equipo" />
      <Container>
        <ContentContainer>
          <TextContainer>
            <Header className="typo-label-s">{pageData.header}</Header>
            <Title className="typo-heading-xl">{pageData.title}</Title>
            <Teams>
              {teams.map(team => (
                <TeamWorkers {...team} key={team.id} />
              ))}
            </Teams>
          </TextContainer>
        </ContentContainer>
      </Container>
    </Layout>
  )
}
export default TeamPage
export const pageQuery = graphql`
  query {
    noimage: file(relativePath: { eq: "team/no-image.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    eje1: file(relativePath: { eq: "team/eje1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    eje2: file(relativePath: { eq: "team/eje2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    eje3: file(relativePath: { eq: "team/eje3.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    eje4: file(relativePath: { eq: "team/eje4.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    eje5: file(relativePath: { eq: "team/eje5.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    eje6: file(relativePath: { eq: "team/eje6.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    eje7: file(relativePath: { eq: "team/eje7.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    eje8: file(relativePath: { eq: "team/eje8.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    eje10: file(relativePath: { eq: "team/eje10.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    eje11: file(relativePath: { eq: "team/eje11.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    eje12: file(relativePath: { eq: "team/eje12.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    eje13: file(relativePath: { eq: "team/eje13.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun1: file(relativePath: { eq: "team/jun1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun2: file(relativePath: { eq: "team/jun2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun3: file(relativePath: { eq: "team/jun3.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun4: file(relativePath: { eq: "team/jun4.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun5: file(relativePath: { eq: "team/jun5.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun6: file(relativePath: { eq: "team/jun6.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun7: file(relativePath: { eq: "team/jun7.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun8: file(relativePath: { eq: "team/jun8.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun9: file(relativePath: { eq: "team/jun9.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun10: file(relativePath: { eq: "team/jun10.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun11: file(relativePath: { eq: "team/jun11.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun12: file(relativePath: { eq: "team/jun12.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun13: file(relativePath: { eq: "team/jun13.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun14: file(relativePath: { eq: "team/jun14.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun15: file(relativePath: { eq: "team/jun15.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun16: file(relativePath: { eq: "team/jun16.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun17: file(relativePath: { eq: "team/jun17.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun18: file(relativePath: { eq: "team/jun18.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun19: file(relativePath: { eq: "team/jun19.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun20: file(relativePath: { eq: "team/jun20.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun21: file(relativePath: { eq: "team/jun21.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun22: file(relativePath: { eq: "team/jun22.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jun23: file(relativePath: { eq: "team/jun23.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
