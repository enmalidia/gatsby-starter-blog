import React from "react"
import styled from "@emotion/styled"
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

const Container = styled.div`
  padding: var(--spacing-7) 0 0 0;

  @media (min-width: 992px) {
    padding: var(--spacing-8) 0 0 0;
  }
`

const Header = styled.h3`
  color: var(--color-sea);
  line-height: var(--line-height-5);
  margin-bottom: var(--spacing-4);
`

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: var(
    --color-${({ bgColor }) => (bgColor ? bgColor : "background")}
  );
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const Text = styled.p`
  line-height: var(--line-height-3);
  margin: 0;
  width: calc(100% - 96px);
`
const Button = styled.a`
  display: flex;
  margin-top: 16px;
  margin-left: 96px;
  text-decoration: none;
  font-family: "Untitled Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;

  background-color: var(--color-sea);
  border: 2px solid var(--color-sea);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 16px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;

  transition: background-color 0.6s ease-out, border-color 0.6s ease-out;

  :hover {
    text-decoration: none;
    color: #ffffff;
    background-color: var(--color-ashford);
    border-color: var(--color-ashford);
  }

  @media (min-width: 992px) {
    display: none;
  }
`

export default function QR({
  image,
  imageAlt,
  header,
  text,
  bgColor,
  url,
  download,
}) {
  const imageStyles = { marginRight: "16px", width: 80, height: 80 }
  return (
    <Container>
      <Header className="typo-heading-s">{header}</Header>
      <Content bgColor={bgColor}>
        <div>
          <Row>
            <a href={url} target="_blank" rel="noreferrer">
              <img src={image} style={imageStyles} alt={imageAlt} />
            </a>
            <Text className="typo-body-m">{text}</Text>
          </Row>
          <Button href={url} target="_blank" rel="noreferrer">
            {download ? "Descargar" : "Solicita cita online"}
          </Button>
        </div>
      </Content>
    </Container>
  )
}

QR.propTypes = {
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string,
  bgColor: PropTypes.string,
}

QR.defaultProps = {
  header: "Solicitar cita online",
  text: "En tu teléfono, abre la app de la cámara. Apunta la cámara hacia el código QR. Presiona el banner que aparece en tu teléfono y sigue las instrucciones en pantalla para completar el proceso de acceso.",
  bgColor: "background",
}
