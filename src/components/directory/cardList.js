import React from "react"
import styled from "@emotion/styled"
import DirectoryItem from "./directoryItem"
import Fade from "react-reveal/Fade"

const Container = styled.div`
  /* justify-content: left; */
  column-gap: var(--spacing-2);
  row-gap: var(--spacing-2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* flex-wrap: wrap; */
  padding-top: var(--spacing-6);

  & > * {
    align-self: stretch;
  }

  @media (min-width: 992px) {
    padding-top: var(--spacing-8);
    column-gap: var(--spacing-4);
    row-gap: var(--spacing-4);
    grid-template-columns: repeat(3, 1fr);
  }
`
const CardList = ({ list }) => {
  return (
    <Container>
      {list.map(({ title, category, url, phone, keyId, value }) => (
        <Fade bottom>
          <DirectoryItem
            title={title}
            category={category}
            keyId={keyId}
            key={title}
            phone={phone}
            value={value}
          />
        </Fade>
      ))}
    </Container>
  )
}

CardList.propTypes = {}

export default CardList
