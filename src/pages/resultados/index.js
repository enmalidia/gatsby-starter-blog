import * as React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { useFlexSearch } from "react-use-flexsearch"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import pageData from "./data.json"
import { Container1440 } from "../../components/generalStyledComponents"
import ResultCard from "../../components/results/resultCard"
import pluralize from "pluralize"

const Container = styled.div`
  background-color: var(--color-background);
`
const ContentContainer = styled(Container1440)`
  padding: var(--spacing-8) var(--spacing-4) var(--spacing-8) var(--spacing-4);

  @media (min-width: 992px) {
    padding: var(--spacing-8) var(--spacing-10) var(--spacing-10)
      var(--spacing-10);
  }

  @media (min-width: 1440px) {
    padding: var(--spacing-8) var(--spacing-16) var(--spacing-16)
      var(--spacing-16);
  }
`

const SearchDetail = styled.div`
  border-bottom: 1px solid var(--color-border);
  padding-bottom: var(--spacing-8);
  margin-bottom: var(--spacing-8);
`
const Title = styled.p`
  line-height: var(--line-height-4);

  color: var(--color-bodyfont);
  margin: 0px 0px;
`

const SearchTerm = styled.p`
  line-height: var(--line-height-6);
  color: var(--color-bodyfont);
  margin: 0px 0px;
`

const ResultNumber = styled.p`
  line-height: var(--line-height-4);
  color: var(--color-bodyfont);
  margin: 0px 0px var(--spacing-8) 0px;
`

const ResultsContainer = styled.div`
  & > div:not(:last-of-type) {
    margin-bottom: var(--spacing-11);
  }
`
const Loading = styled.div`
  display: flex;
  padding: var(--spacing-6) 0px;
  justify-content: center;
  align-items: center;

  h1 {
    line-height: var(--line-height-6);
    color: var(--color-bodyfont);
    margin: 0px 0px;
  }
`
const unFlattenResults = results =>
  results.map(page => {
    const { id, title, path } = page
    return { id, title, path }
  })

const ResultPage = ({
  data: {
    localSearchPages: { index, store },
    allPages: { nodes },
  },
}) => {
  const [searchQuery, setSearchQuery] = React.useState(null)
  const [ready, setReady] = React.useState(false)

  const { searchText, showText, resultsText, linkText, loadingText } = pageData

  React.useEffect(() => {
    const isBrowser = () => typeof window !== "undefined"
    const { search } = isBrowser() ? window.location : ""
    const query = new URLSearchParams(search).get("s")
    setSearchQuery(query || "")
  }, [])

  React.useEffect(() => {
    if (searchQuery !== null) {
      setReady(true)
    }
  }, [searchQuery])

  const results = useFlexSearch(searchQuery, index, store)
  const pages = searchQuery ? unFlattenResults(results) : nodes
  const searchResultText = pluralize(resultsText, pages.length, true)

  return (
    <Layout>
      <Seo title="Result" />
      <Container>
        <ContentContainer>
          {ready ? (
            <>
              <SearchDetail>
                <Title className="typo-body-l">{searchText}</Title>
                <SearchTerm className="typo-heading-m">
                  {searchQuery}
                </SearchTerm>
              </SearchDetail>
              <ResultNumber className="typo-body-l">
                {showText} {searchResultText}
              </ResultNumber>
              <ResultsContainer>
                {pages.map(({ id, title, path }) => (
                  <ResultCard
                    key={id}
                    path={path}
                    title={title}
                    linkText={linkText}
                  />
                ))}
              </ResultsContainer>
            </>
          ) : (
            <Loading>
              <h1 className="typo-heading-m">{loadingText}</h1>
            </Loading>
          )}
        </ContentContainer>
      </Container>
    </Layout>
  )
}

export default ResultPage

export const pageQuery = graphql`
  query {
    localSearchPages {
      index
      store
    }
    allPages {
      nodes {
        id
        title
        path
      }
    }
  }
`
