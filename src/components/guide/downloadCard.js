import React from "react"
import styled from "@emotion/styled"
import DocList from "../admission/docList"
import { GatsbyImage } from "gatsby-plugin-image"

const Container = styled.div`
  background: var(--color-white);
  padding: var(--spacing-4);
  box-shadow: 0px 0px 30px rgba(112, 144, 176, 0.2);
  border-radius: 8px;
  width: 100%;

  .img-container {
    height: 348px;
    border-radius: 2px;

    @media (min-width: 768px) {
      height: 316px;
      padding: var(--spacing-6);
    }
  }
`

const Title = styled.p`
  line-height: 32px;
  color: var(--color-bodyfont);
  margin: 0px 0px;
  padding-bottom: var(--spacing-2);
  padding-top: var(--spacing-7);
`

const Description = styled.p`
  line-height: 24px;
  color: var(--color-bodyfont);
  margin: 0px 0px;
  padding-bottom: var(--spacing-6);
`
/* const list = [{ title: "guiapaciente.pdf", id: 1, url: "" }] */
const DownloadCard = ({
  image,
  title,
  description,
  docs,
  downloadText,
  button,
}) => {
  return (
    <Container>
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        style={{
          gridArea: "1/1",
        }}
        layout="fullWidth"
        alt=""
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
        className="img-container"
      />
      <Title className="typo-heading-m">{title}</Title>
      <Description className="typo-body-l">{description}</Description>
      <DocList list={docs} downloadText={downloadText} backcolor="background" />
    </Container>
  )
}

DownloadCard.propTypes = {}

export default DownloadCard
