import React from 'react'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout"
import Seo from "../../components/seo"


const Empleo = ({data}) => {
    const jobs = data.allPrismicJob.nodes

    return (
        <Layout>
        <Seo title="Empleo" />
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                {jobs.map(job => {
                return(  
                <div key={job.id} className="">
                    <div className="">
                        <div className="">
                            <GatsbyImage
                            image={getImage(job.data.job_image)}
                            /* alt={job.data.job_image.alt} */
                            height={50}
                            width={50}
                            />
                        </div>
                        <div className="">
                            <h2 className="">{job.data.job_title.text}</h2>
                            <p className="">{job.data.working_hours.text}</p>
                            <p className="">{job.data.position_requirements.text}</p>
                        </div>
                    </div>
                </div>
                )})}
            </div>
        </section>
        </Layout>
    )
}

export default Empleo

export const pageQuery = graphql`
  {
    allPrismicJob {
      nodes {
        data {
          job_image {
            gatsbyImageData(width: 200, height: 200, placeholder: BLURRED)
            alt
            url
          }
          job_title {
            text
          }
          working_hours {
            text
          }
          position_requirements {
            text
          }
        }
      }
    }
  }
`
