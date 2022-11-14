import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Information from "../components/home/information"
import Support from "../components/home/support"
import Interest from "../components/home/interest"
import Stories from "../components/home/stories"
import Speciality from "../components/home/speciality"
import News from "../components/home/news"
import InfoPayments from "../components/home/infoPayments"
import Services from "../components/home/services"
// Import Swiper React components
import pageData from "../data/home/data.json"

// Import Swiper styles
import "swiper/css"
import Marquee from '../components/Marquee'

const IndexPage = () => {
  const supportRef = React.useRef(null)
  const { information, support, interest, payments, stories, speciality, news, services } = pageData

  const handleScroll = () => {
    supportRef.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <Layout>
      <Marquee />
      <Seo title="Home" />
      <Information {...information} scrollAction={handleScroll} />
      <Support {...support} ref={supportRef} />
      <Speciality {...speciality}/>
      <Interest {...interest} />
      <Stories {...stories}/>
      {/* <News {...news} /> */}
      <InfoPayments {...payments} color={'white'} />
      <Services {...services}/>
    </Layout>
  )
}

export default IndexPage
