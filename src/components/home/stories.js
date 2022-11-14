import React from "react"
import styled from "@emotion/styled"
import { Pagination } from "swiper"
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import {Container1440} from "../generalStyledComponents"
import "swiper/css"
import "swiper/css/pagination"

import StoryItem from "./storyItem"

const Container = styled.div`
  background: linear-gradient(180deg, var(--color-ashford) 50%, #ffffff 50%);
  display: flex;
  flex-direction: column;
  text-align: center;

  .swiper-slide {
    display: flex;
    justify-content: center;
    /* width: fit-content !important; */
  }
  .swiper-pagination-bullets {
    bottom: 28px !important; 
    pointer-events: none;
  }
 .swiper-pagination-bullet {
      pointer-events: all;
      background-color: #c3d4e6 !important;
      opacity: 1 !important;
      &-active {
        background-color: var(--color-ashford) !important;
      }
    }
`

const SwiperContainer = styled(Container1440)`
  padding: 0px var(--spacing-4) 0px var(--spacing-4);
  @media (min-width: 768px) {
    padding: var(--spacing-8) var(--spacing-8);
  }
  @media (min-width: 992px) {
    padding: 0px var(--spacing-16) 0px var(--spacing-16);
  }
`

const Stories = ({ items }) => {
  const data = useStaticQuery(graphql`
    query {
      story1: file(relativePath: { eq: "home/story1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      story2: file(relativePath: { eq: "home/story2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      story3: file(relativePath: { eq: "home/story3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
      story4: file(relativePath: { eq: "home/story4.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)

  const itemsWithImg = items.map((item, index) => {
    item.image = data[`story${index + 1}`]
    return item
  })
  return (
    <Container>
      <SwiperContainer>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true, el: ".pag" }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1320: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {itemsWithImg.map(({ image, author, key, buttonText, type, buttonLink }) => {
            return (
              <SwiperSlide key={key}>
                <StoryItem
                  image={image}
                  author={author}
                  buttonText={buttonText}
                  buttonLink={buttonLink}
                  type={type}
                />
              </SwiperSlide>
            )
          })}
          <div slot="container-end" className="pagination-container">
            <div className="pag"></div>
          </div>
        </Swiper>
      </SwiperContainer>
    </Container>
  )
}

Stories.propTypes = {}

export default Stories
