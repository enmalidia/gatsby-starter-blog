import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  & > p:last-of-type {
    margin-bottom: 0px;
  }
`
const Separator = styled.span`
  display: block;
`

export const parseText = text => {
  if (!text || typeof text === "undefined") {
    return ""
  }
  const currentText = text
  const newText = currentText.split("\n").map((str, index) => {
    return <p key={index}>{replaceR(str)}</p>
  })

  function replaceR(text) {
    const lines = text.split("\r")
    const lineCount = lines.length
    if (lineCount > 0) {
      return lines.map((line, index) => {
        if (index < lineCount - 1) {
          return (
            <>
              {line}
              <br />
            </>
          )
        } else {
          return <>{line}</>
        }
      })
    } else {
      return ""
    }
  }
  return <Container>{newText}</Container>
}

export const parseTextWithoutStyle = text => {
  const textArrTemp = text.split("\n")

  return textArrTemp.length > 1
    ? textArrTemp.map(item => <Separator>{item}</Separator>)
    : text
}