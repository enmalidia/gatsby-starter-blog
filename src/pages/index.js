import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  const jobs = data.allPrismicJob.nodes
  
  return (
    <Layout location={location} title={siteTitle}>
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                {jobs.map(job => {
                return(  
                <div key={job.id} className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <GatsbyImage
                            image={getImage(job.data.job_image)}
                            /* alt={job.data.job_image.alt} */
                            height={50}
                            width={50}
                            />
                            <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{job.data.job_title.text}</h2>
                            <p className="mt-1 text-gray-500 text-sm">{job.data.working_hours.text}</p>
                            <p className="leading-relaxed">{job.data.position_requirements.text}</p>
                            <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                )})}
            </div>
        </section>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
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
