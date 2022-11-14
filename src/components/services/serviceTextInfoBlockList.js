import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import UilArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right"
import Arrow from "../../images/right-arrow.svg"
import { Link } from "gatsby"

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  li {
    margin-bottom: var(--spacing-3);
  }
`

// const list = ["text1", "text2", "text3", "text4", "text5", "text6", "text7"]
const Item = styled.li`
  display: flex;
  align-items: baseline;
`

const CountItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 6px;
  text-align: center;
  background-color: var(--color-sea);
  color: var(--color-frost);
`

const Text = styled.span`
  color: ${props =>
    props.dark ? "var(--color-white)" : "var(--color-bodyfont)"};
  margin-left: var(--spacing-2);
`
const ArrowContainer = styled.div`
  display: flex;
`
const ArrowImg = styled.img`
  width: 12px;
  height: 12px;
`

const Title = styled.p`
  /* Headings DESKTOP/Heading S */
  line-height: 28px;
  /* $bodyfont */
  color: ${props =>
    props.dark ? "var(--color-white)" : "var(--color-bodyfont)"};
  margin-bottom: var(--spacing-3);
`

const StyledLink = styled(Link)`
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    font: var(--typo-body-l);
    color: ${props =>
      props.dark ? "var(--color-white)" : "var(--color-bodyfont)"};
    margin-left: var(--spacing-2);
  }
`

const ServiceTextInfoBlockList = ({ title, list, dark }) => {
  const aditionalList = () => {
    return (
      <div>
        {title && (
          <Title dark={dark} className="typo-heading-s">
            {title}
          </Title>
        )}
        <div className={`row row-cols-1 row-cols-md-${list.length}`}>
          {list.map((col, index) => (
            <div key={index} className="col">
              <List>
                {col.map(({ count = null, id, text, href }) => (
                  <Item key={id}>
                    <ArrowContainer>
                      {count !== null ? (
                        <CountItem className="typo-body-l">{count}</CountItem>
                      ) : (
                        <ArrowImg src={Arrow} />
                      )}
                    </ArrowContainer>

                    <Text dark={dark} className="typo-body-l">
                      {href ? <StyledLink to={href}>{text}</StyledLink> : text}
                    </Text>
                  </Item>
                ))}
              </List>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return <div>{aditionalList()}</div>
}
ServiceTextInfoBlockList.defaultProps = {
  dark: false,
  list: [],
}
ServiceTextInfoBlockList.propTypes = {}

export default ServiceTextInfoBlockList
