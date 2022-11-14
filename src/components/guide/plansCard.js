import React from "react"
import styled from "@emotion/styled"
import Img1 from "../../images/guide/Seguro_MAPFRE.png"
import Img2 from "../../images/guide/Seguro_TripleS.png"
import Img3 from "../../images/guide/Seguro_AuxilioPlus.png"
import Img4 from "../../images/guide/Seguro_Tricare.png"
import Img5 from "../../images/guide/Seguro_AtlanticCare.png"
import Img6 from "../../images/guide/Seguro_MMM.png"
import Img7 from "../../images/guide/Seguro_FirstMedical.png"
import Img8 from "../../images/guide/Seguro_IntMedicalCard.png"
import Img9 from "../../images/guide/Seguro_ACAA.png"
import Img10 from "../../images/guide/Seguro_Medicare.png"
import Img11 from "../../images/guide/Seguro_MCS.png"
import Img12 from "../../images/guide/Seguro_Menonita.png"
import Img13 from "../../images/guide/Seguro_PanLifeInsurance.png"
import Img14 from "../../images/guide/Seguro_UTM.png"
import Img15 from "../../images/guide/Seguro_Corvel.png"

const Title = styled.div`
  line-height: 32px;
  color: var(--color-sea);
  margin: 0px 0px;
  padding-bottom: var(--spacing-6);
  padding-top: var(--spacing-7);
`
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 24px;
  justify-content: center;
`

/* const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  justify-content: center;
` */
/* const ImgContainer = styled.div`
  width: 88px;
  height: 88px;

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 576px) {
    width: auto;
    height: auto;
    max-width: 196px;
    min-width: 100px;
    max-height: 100px;
  }
` */

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: auto;
  }
`

const data = [
  {
    url: "",
    id: 1,
    image: Img1,
  },
  {
    url: "",
    id: 2,
    image: Img2,
  },
  {
    url: "",
    id: 3,
    image: Img3,
  },
  {
    url: "",
    id: 4,
    image: Img4,
  },
  {
    url: "",
    id: 5,
    image: Img5,
  },
  {
    url: "",
    id: 6,
    image: Img6,
  },
  {
    url: "",
    id: 7,
    image: Img7,
  },
  {
    url: "",
    id: 8,
    image: Img8,
  },
  {
    url: "",
    id: 9,
    image: Img9,
  },
  {
    url: "",
    id: 10,
    image: Img10,
  },
  {
    url: "",
    id: 11,
    image: Img11,
  },
  {
    url: "",
    id: 12,
    image: Img12,
  },
  {
    url: "",
    id: 13,
    image: Img13,
  },
  {
    url: "",
    id: 14,
    image: Img14,
  },
  {
    url: "",
    id: 15,
    image: Img15,
  },
]
const PlansCard = ({title}) => {
  return (
    <div>
      <Title className="typo-heading-m">{title}</Title>
      <List>
        {data.map(({ image, id, url }) => (
          <ImgContainer key={id}>
            <img src={image} alt=""/>
          </ImgContainer>
        ))}
      </List>
    </div>
  )
}

PlansCard.propTypes = {}

export default PlansCard
