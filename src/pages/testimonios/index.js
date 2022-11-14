import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from "swiper"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Container1440 } from "../../components/generalStyledComponents"
import styled from "@emotion/styled"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../../css/storySlider.scss"

import LeftArrow from "../../images/arrow-left-flat.svg"
import RightArrow from "../../images/arrow-right-flat.svg"
import DirectorImg from "../../images/director.png"
import WorkerCard from "../../components/workerCard"
import pageData from "./data.json"

const LefContainer = styled.div``
const LeftContentContainer = styled.div`
  background: var(--color-sea);
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  padding-top: var(--spacing-8);
  padding-bottom: var(--spacing-8);

  @media (min-width: 768px) {
    padding-left: var(--spacing-11);
    padding-right: var(--spacing-11);
    padding-top: var(--spacing-16);
    padding-bottom: var(--spacing-16);
  }

  @media (min-width: 992px) {
    padding-left: var(--spacing-16);
    padding-right: var(--spacing-11);
    padding-top: var(--spacing-16);
    padding-bottom: var(--spacing-16);
  }
`
const RightContainer = styled.div``
const RightContentContainer = styled.div`
  height: 100%;
  background-color: var(--color-no-gray);
  padding: var(--spacing-8) 0px;
  width: 100vw;

  @media (min-width: 768px) {
    padding: var(--spacing-16) var(--spacing-16) 0px var(--spacing-11);
    width: 100%;
  }
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
`
const Subsection = styled.div`
  width: 50%;
  background-color: var(--color-no-gray);
`
const SubsectionLeft = styled(Subsection)`
  background-color: var(--color-sea);
`
const Row = styled.div`
  width: 100%;
`
const Type = styled.p`
  font-style: normal;
  line-height: var(--line-height-1);
  text-transform: uppercase;
  color: var(--color-ashford);
  margin: 0px 0px;
  padding-bottom: var(--spacing-7);
`
const Phrase = styled.p`
  font: var(--typo-heading-l);
  font-style: italic;
  font-weight: normal;
  line-height: var(--line-height-9);
  color: var(--color-white);
  margin: 0px 0px;
  padding-bottom: 32px;
`
const Title = styled.p`
  font-style: normal;
  line-height: var(--line-height-8);
  color: var(--color-bodyfont);

  margin: 0px 0px;
  padding-bottom: 8px;
`
const Description = styled.p`
  /* Headings DESKTOP/Heading S */

  font-style: normal;
  line-height: var(--line-height-5);
  color: var(--color-sea);
  margin: 0px 0px;
  padding-bottom: 24px;
`
const Details = styled.p`
  font-style: normal;
  line-height: var(--line-height-4);
  color: var(--color-bodyfont);
  margin: 0px 0px;
`
const SwiperItem = styled.div``

const Button = styled.a`
  background-color: var(--color-sea);
  border: 2px solid var(--color-sea);
  box-sizing: border-box;
  border-radius: 4px;
  margin: 32px 0px 0px 0px;
  padding: 8px 16px;
  display: flex;
  width: fit-content;
  height: fit-content;
  cursor: pointer;

  transition: background-color 0.6s ease-out, border-color 0.6s ease-out;
  :visited,
  :link,
  :active,
  :hover {
    color: var(--color-white);
    text-decoration: none;
  }

  :hover {
    background-color: var(--color-ashford);
    border-color: var(--color-ashford);
  }
`

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

const extractPageNumber = (hash) => {
  if(hash && typeof hash === 'string') {
    return +hash.replace('#','');
  }

  return 0;
}

const StoryView = ({ location }) => {
 
  const { items } = pageData

  const formatNumber = num => {
    return num.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })
  }
  return (
    <Layout>
      <Seo title={`Story:`} />
      <Container>
        <BackContainer>
          <SubsectionLeft></SubsectionLeft>
          <Subsection></Subsection>
        </BackContainer>

        <FrontContainer>
          <Row className="row g-0 ">
            <LefContainer className="col-12 col-md-5 col-xl-4">
              <LeftContentContainer>
                <Type className="typo-label-s">{pageData.title}</Type>
                <Phrase>“{pageData.phrase}”</Phrase>
                <WorkerCard
                  name="Lcda. Itza Soto"
                  job="Directora Ejecutiva"
                  image={DirectorImg}
                />
              </LeftContentContainer>
            </LefContainer>
            <RightContainer className="col-12 col-md-7 col-xl-8">
              <RightContentContainer>
                <Swiper
                   onSwiper={(swiper) => swiper.slideTo(extractPageNumber(location.hash))}
                  pagination={{
                    type: "fraction",
                    el: ".pag",
                    formatFractionCurrent: formatNumber,
                    formatFractionTotal: formatNumber,
                  }}
                  navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                  }}
                  slidesPerView={"auto"}
                  spaceBetween={32}
                  className="storyPageSwiper"
                  breakpoints={{
                    756: {
                      spaceBetween: 48,
                    },
                  }}
                >
                  {items.map(
                    ({
                      title,
                      description,
                      details,
                      buttonText,
                      link,
                      key,
                    }) => (
                      <SwiperSlide key={key}>
                        <SwiperItem>
                          <Title className="typo-heading-l">{title}</Title>
                          <Description className="typo-heading-s">
                            {description}
                          </Description>
                          <Details className="typo-body-l">“{details}”</Details>
                          <Button href={link} target="_blank">
                            {buttonText}
                          </Button>
                        </SwiperItem>
                      </SwiperSlide>
                    )
                  )}
                  <div slot="container-end" className="pagination-container">
                    <div>
                      <div className="pag"></div>
                    </div>
                    <div className="arrow-container">
                      <div className="prev">
                        <img src={LeftArrow} alt=""/>
                      </div>
                      <div className="next">
                        <img src={RightArrow} alt=""/>
                      </div>
                    </div>
                  </div>
                </Swiper>
              </RightContentContainer>
            </RightContainer>
          </Row>
        </FrontContainer>
      </Container>
    </Layout>
  )
}

StoryView.propTypes = {}

export default StoryView
