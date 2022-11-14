import React from "react"
import styled from "@emotion/styled"
import Doc from "../../images/doc.svg"
const Container = styled.div`
  background: ${props =>
    props.backcolor ? `var(--color-${props.backcolor})` : `var(--color-white)`};
  border-radius: var(--spacing-1);
  padding: var(--spacing-1);
  & > div:last-of-type {
    border-bottom: 0px;
  }
`
const DocContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: var(--spacing-4) 0px;
  border-bottom: 1px solid var(--color-border);
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }

  p {
    margin-bottom: var(--spacing-4);
  }

  @media (min-width: 400px) {
    margin: 0px var(--spacing-4);

  }
`

const DocImg = styled.img`
  width: 16px;
  height: 20px;
`
const Title = styled.p`
  padding-left: var(--spacing-2);
  padding-right: var(--spacing-4);
  margin: 0px 0px;
  line-height: 24px;
  color: var(--color-ashford);
`

const Button = styled.div`
  background-color: var(--color-sea);
  border: 2px solid var(--color-sea);
  box-sizing: border-box;
  border-radius: 4px;
  margin: 0px 0px;
  padding: 8px 16px;
  display: flex;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  label {
    pointer-events: none;
    line-height: 20px;
    text-align: center;
    color: var(--color-white);
    margin: 0px 0px;
  }
  transition: background-color 0.6s ease-out, border-color 0.6s ease-out;

  :hover {
    background-color: var(--color-ashford);
    border-color: var(--color-ashford);
  }
`

const TextContainer = styled.div`
  display: flex;
`
const DocList = ({ list, backcolor, downloadText }) => {
  return (
    <Container backcolor={backcolor}>
      {list.map(({ title, id, url }) => (
        <DocContainer key={id}>
          <TextContainer>
            <DocImg src={Doc} />
            <Title className="typo-body-l">{title}</Title>
          </TextContainer>
          <a className="gtm-action gtm-action-download" href={url} download>
            <Button>
              <label className="typo-body-m">{downloadText}</label>
            </Button>
          </a>
        </DocContainer>
      ))}
    </Container>
  )
}

DocList.propTypes = {}

export default DocList
