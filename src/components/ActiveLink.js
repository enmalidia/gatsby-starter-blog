import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"

const StyledLinkActive = styled.span`
    color: var(--color-sea) !important;
  }
`

export default function ActiveLink({ paths, children }) {
  const [isActiveLink, setIsActiveLink] = useState(false)

  useEffect(() => {
    const pathname = document.location.pathname

    if (paths) {
      for (let i = 0; i < paths.length; i++) {
        if (pathname.indexOf(paths[i]) !== -1) {
          setIsActiveLink(true)
          break
        }
      }
    }
  })

  return isActiveLink ? (
    <StyledLinkActive>{children}</StyledLinkActive>
  ) : (
    <>{children}</>
  )
}
