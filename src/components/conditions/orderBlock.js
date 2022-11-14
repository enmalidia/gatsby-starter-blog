import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Container1440 } from "../generalStyledComponents"
import KeyList from "./keyList"
import ConditionItem from "./conditionItem"
import CardList from "./cardList"
/* import Selector from "./selector" */
import OrderSelect from "./orderSelect"

const Container = styled.div`
  background: #eaeaea;
`
const ContentContainer = styled(Container1440)`
  padding-left: var(--spacing-4);
  padding-right: var(--spacing-4);
  padding-bottom: var(--spacing-8);
  padding-top: var(--spacing-6);

  @media (min-width: 992px) {
    padding-left: var(--spacing-16-esp1);
    padding-right: var(--spacing-16-esp1);
    padding-bottom: var(--spacing-15);
    padding-top: var(--spacing-8);
  }
`

const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  > div:last-of-type {
    padding-top: var(--spacing-6);
  }

  @media (min-width: 992px) {
    flex-direction: row;
    > div:last-of-type {
      padding-top: 0px;
    }
  }
`
const OrderBlock = ({cards, categories, keys}) => {
  const [activeKey, setActiveKey] = useState("All")
  const [activeOrder, setActiveOrder] = useState("All")
  const [cardList, setCardList] = useState(cards)
  const [keyList, setKeyList] = useState(keys)

  useEffect(() => {
    setKeyList(keys)
  }, [keys])
  
  useEffect(() => {
    let tempList = cards
    if (activeKey !== "All") {
      tempList = tempList.filter(({ keyId }) => keyId === activeKey)
    }
    if (activeOrder !== "All") {
      tempList = tempList.filter(({ catId }) => catId === activeOrder)
    }
    setCardList(tempList)
  }, [activeKey, activeOrder, cards])

  const onClickKey = keyId => {
    setActiveKey(keyId)
  }

  const onChangeOrder = order => {
    setActiveOrder(order)
  }

  return (
    <Container>
      <ContentContainer>
        <OrderContainer>
          <KeyList list={keyList} activeKey={activeKey} onClickKey={onClickKey} />
          <OrderSelect
            list={categories}
            selectedOption={activeOrder}
            onChange={onChangeOrder}
          />
        </OrderContainer>

        <CardList list={cardList} />
      </ContentContainer>
    </Container>
  )
}

OrderBlock.propTypes = {}

export default OrderBlock
