import * as React from "react"
import OneColumnLeftText from "../../components/conditions/oneColumnLeftText"
import OrderBlock from "../../components/directory/orderBlock"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import pageData from "./data.json"

const DirectoryPage = () => {
  const [cards, setCards] = React.useState([])
  const [keys, setKeys] = React.useState([])

  React.useEffect(() => {
    const items = [...pageData.cards]
    const tempKey = new Map()
    items.sort(function (a, b) {
      return a.title.localeCompare(b.title, ["en", "es"], {
        ignorePunctuation: true,
      })
    })

    items.forEach(({ title }) => {
      const initial = toSimpleChar(title.charAt(0))
      if (!tempKey.has(initial)) {
        tempKey.set(initial, initial)
      }
    })
    let finalKeys = [
      {
        key: "Todas",
        id: "All",
      },
    ]
    for (const [key, value] of tempKey) {
      finalKeys.push({ key, id: value })
    }
    setKeys(finalKeys)
    setCards(items)
  }, [])

  const toSimpleChar = char => {
    let returnValue;
    switch (char) {
      case "Á":
        returnValue = "A"
      break;

      case "Í":
        returnValue = "I"
      break;

      case "É":
        returnValue = "E"
      break;

      case "Ó":
        returnValue = "O"
      break;

      case "Ú":
        returnValue = "U"
      break;

      default:
        returnValue = char
    }
    return returnValue;
  }
  
  return (
    <Layout>
      <Seo title="Services" />
      <OneColumnLeftText
        header={pageData.header}
        title={pageData.title}
        description={pageData.description}
        details={pageData.details}
        color={"ashford"}
        dark
      />
      <OrderBlock keys={keys} categories={pageData.categories} cards={cards} />
    </Layout>
  )
}

export default DirectoryPage
