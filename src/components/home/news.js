import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

import NewsItem from "./newsItem"
import NewsItemVideo from "./newsItemVideo"

const Container = styled.div`
  background-color: #ffffff;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
`

const ItemsContainer = styled.div`
  /* height: 480px; */
  display: flex;
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 50px;
`
const HeaderText = styled.p`
  font-family: Futura Std;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 39px;
  color: #002554;
  text-align: left;

  @media (min-width: 576px) {
    font-size: 32px;
    line-height: 40px;
  }
`

const MultiContainerReverse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-flow: column-reverse;
  > div {
    margin-top: 0.75rem;
  }
  @media (min-width: 786px) {
    flex-flow: column;
    > div {
      margin-top: 0;
    }

    > div:last-child {
      margin-top: 1.5rem;
    }
  }
`

const MultiContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    margin-top: 0.75rem;
  }

  @media (min-width: 786px) {
    > div {
      margin-top: 0;
    }
    > div:last-child {
      margin-top: 1.5rem;
    }
  }
`

const ButtonMore = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  background: var(--color-sea);
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Untitled Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  justify-content: center;
  color: var(--color-white);
  cursor: pointer;
  transition: background-color .6s ease-out;
  &:hover {
    background-color: var(--color-ashford);
  }
`
const HeaderButton = styled(ButtonMore)`
  display: none;
  @media (min-width: 576px) {
    display: flex;
  }
`

const BottomButton = styled(ButtonMore)`
  margin-top: 2rem;
  @media (min-width: 576px) {
    display: none;
  }
`

const News = ({title, buttonText}) => {
  const data = useStaticQuery(graphql`
    query {
      news1: file(relativePath: { eq: "news1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, width: 500)
        }
      }
      news2: file(relativePath: { eq: "news2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, width: 350)
        }
      }
      news3: file(relativePath: { eq: "news3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, width: 350)
        }
      }
      newsVideo1: file(relativePath: { eq: "news-v1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, width: 350)
        }
      }
      newsVideoMob1: file(relativePath: { eq: "news-v-mobile1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, width: 350)
        }
      }
      newsVideo2: file(relativePath: { eq: "news-v2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, width: 350)
        }
      }
      newsVideoMob2: file(relativePath: { eq: "news-v-mobile2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, width: 350)
        }
      }
    }
  `)

  return (
    <Container className="container-fluid">
      <div className="container">
        <HeaderContainer>
          <HeaderText>{title}</HeaderText>
          <HeaderButton>{buttonText}</HeaderButton>
        </HeaderContainer>

        <ItemsContainer className="row">
          <div
            className="col-12 col-md-6"
            style={{
              display: "flex",
            }}
          >
            <NewsItem image={data.news1} />
          </div>
          <MultiContainer
            className="col-12
col-md-3"
          >
            <NewsItem image={data.news2} />
            <NewsItemVideo
              image={data.newsVideo1}
              imageMobile={data.newsVideoMob1}
            />
          </MultiContainer>
          <MultiContainerReverse
            className="col-12
col-md-3"
          >
            <NewsItemVideo
              image={data.newsVideo2}
              imageMobile={data.newsVideoMob2}
            />
            <NewsItem image={data.news3} />
          </MultiContainerReverse>
        </ItemsContainer>
        <BottomButton>{buttonText}</BottomButton>
      </div>
    </Container>
  )
}

News.propTypes = {}

export default News
