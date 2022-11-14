import React from "react"
import styled from "@emotion/styled"
import ClockImg from "../../images/clock.svg"
import LocationImg from "../../images/location.svg"
import PhoneImg from "../../images/contact-phone.svg"
import EmailImg from "../../images/fast-mail.svg"
import { parseText } from "../../utils/text"
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Header = styled.p`
  /* Headings DESKTOP/Heading S */
  line-height: var(--line-height-5);
  color: var(--color-sea);
  margin: var(--spacing-7) 0px 0px 0px;
`
const ListContainer = styled.div`
  overflow: hidden;
  margin-top: var(--spacing-4);
`
const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: calc(var(--spacing-4) * -1);
  margin-left: calc(var(--spacing-4) * -1);
  /*   & > div:not(:first-of-type) {
    margin-top:var(--spacing-4);
    margin-left: var(--spacing-4);
  } */
  & > div {
    margin-top: var(--spacing-4);
    margin-left: var(--spacing-4);
  }

  @media (min-width: 576px) {
    flex-direction: ${props => (props.typeList ? "row" : "column")};
    flex-wrap: ${props => (props.typeList ? "wrap" : "no-wrap")};
    /* & > div {
      margin-left: 0px;
    } */
  }
`
const Item = styled.div`
  display: flex;
  padding: var(--spacing-4);
  /* $background */

  background: ${props =>
    props.itemColor ? `var(--color-${props.itemColor})` : "transparent"};
  border-radius: 4px;
  ${({ isCentered }) => isCentered ? "align-items: center;" : 'align-items: start;'}
`
const Image = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`
const Text = styled.div`
  & > div p {
    color: ${props =>
      props.color ? `var(--color-${props.color})` : "var(--color-bodyfont)"};
  }

  & a {
    &:hover,
    &:link,
    &:visited,
    &:active {
      color: ${props =>
        props.color ? `var(--color-${props.color})` : "var(--color-darkfont)"};
      text-decoration: none;
    }
  }
`

const Note = styled.p`
  /* Text/Body S */

  line-height: var(--line-height-1);
  /* identical to box height, or 133% */

  /* $lightfont */

  color: var(--color-lightfont);
  margin: var(--spacing-4) 0px 0px 0px;
`
const AttentionDetails = ({
  header,
  itemColor,
  note,
  typeList,
  color,
  className,
  list,
}) => {
  const iconImage = {
    email: EmailImg,
    phone: PhoneImg,
    hours: ClockImg,
    location: LocationImg,
    fax: PhoneImg,
  }

  const listItems = list.length
    ? list.map(item => (
        <Item
          key={item.id}
          itemColor={itemColor}
          isCentered={
            item.isCentered ? true : item.isCentered
          }
        >
          {iconImage[item.type] && <Image src={iconImage[item.type]} />}
          <Text color={color} className="typo-body-m">
            {item.type === "email" ? (
              <a className="gtm-action gtm-action-email" href={`mailto:${item.value}`}>{parseText(item.text)}</a>
            ) : item.type === "phone" ? (
              <a className="gtm-action gtm-action-phone" href={`tel:${item.value}`}>{parseText(item.text)}</a>
            ) : (
              parseText(item.text)
            )}
          </Text>
        </Item>
      ))
    : null

  return (
    <Container className={className}>
      {header && <Header className="typo-heading-s">{header}</Header>}
      <ListContainer>
        <List typeList={typeList}>{listItems}</List>
      </ListContainer>
      {note && <Note className="typo-body-s">{note}</Note>}
    </Container>
  )
}

export default AttentionDetails
