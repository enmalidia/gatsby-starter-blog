import React, { useMemo } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Container = styled.div`
  border-left: 1px solid var(--color-sea-transparent);
  padding: 0px var(--spacing-7) 0px var(--spacing-7);

  @media (min-width: 992px) {
    padding: 0px 0px 0px var(--spacing-7);
  }
`
const Header = styled.p`
  line-height: var(--line-height-5);
  color: var(--color-sea);
  margin: 0px 0px var(--spacing-4) 0px;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  width: 100%;

  & > ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    width: 100%;

    & > li:not(:first-of-type) {
      margin-top: var(--spacing-2);
    }
  }
  & > ul:not(:first-of-type) {
    margin-left: var(--spacing-7);
  }
`

const LinkWrapper = styled.div`
  width: fit-content;

  a {
    text-decoration: none !important;
    label {
      cursor: pointer;
      line-height: var(--line-height-3);
      color: var(--color-white);
      margin: 0px 0px;
      transition: 0.6s ease-out color;
      &:hover {
        color: var(--color-sea);
      }
    }
  }
`

const FooterList = ({ splitPoint, items, header, className }) => {
  const sublists = useMemo(() => {
    let count = splitPoint || items.length
    let matrix = []
    let tempArray = []
    for (let index = 0; index < items.length; index++) {
      if (index < count) {
        tempArray.push({ ...items[index] })
        if (index === items.length - 1) {
          matrix.push(tempArray)
        }
      } else {
        count += splitPoint
        matrix.push(tempArray)
        tempArray = []
        tempArray.push({ ...items[index] })

        if (index === items.length - 1) {
          matrix.push(tempArray)
        }
      }
    }
    return matrix
  },[items,splitPoint])

  const printList = (items, key) => {
    if (!items) {
      return null
    }
    return (
      <ul key={key}>
        {items.map(({ id, link, title }) => {
          return (
            <li key={id}>
              <LinkWrapper>
                <Link to={link}>
                  <label className="typo-body-m">{title}</label>
                </Link>
              </LinkWrapper>
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <Container className={className}>
      <Header className="typo-heading-s">{header}</Header>
      <ListContainer>
        {sublists.map((list, index) => {
          return printList(list, index)
        })}
      </ListContainer>
    </Container>
  )
}

export default FooterList
