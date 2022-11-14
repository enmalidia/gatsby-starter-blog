import React from "react"
import { default as FastMarquee } from "react-fast-marquee"
import styled from "@emotion/styled"

const StyledMarquee = styled.div`
  line-height: var(--line-height-3);
  color: var(--color-white);
  padding: var(--spacing-4) 0;
  background-color: var(--color-sea);
  & *,
  & div:after,
  & div:before {
    background: transparent !important;
  }
`

export default function Marquee() {
  return (
    <StyledMarquee className="typo-body-m">
      <FastMarquee>
        Desde el 1 de Octubre el nuevo sistema de pagos Paga Fácil está
        disponible para hacer pagos de los balances del hospital, recibirás
        mensaje de texto con enlace para pagar.
      </FastMarquee>
    </StyledMarquee>
  )
}
