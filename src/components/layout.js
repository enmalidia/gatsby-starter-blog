/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import CookieConsent from 'react-cookie-consent';

import "./layout.scss"
import Navbar from "./navbar"
import Footer from "./footer"
import styled from "@emotion/styled"
import { detect } from "detect-browser"

const Container = styled.div`
  position: absolute;
  height: var(--height-without-navbar);
  margin-top: var(--height-navbar);
  overflow-y: auto;
`

const Layout = ({ children }) => {
  const [blurEffect, setBlurEffect] = React.useState(false)
  const [isSafary, setIsSafary] = React.useState(false)
  const browser = detect()

  const handleBlurEffect = isOpen => {
    setBlurEffect(isOpen)
  }

  React.useEffect(() => {
    if (browser && browser.name === "safari") {
      setIsSafary(true)
    }
  })

  const ButtonConsents = (props) => {
    const { onClick } = props
    return (
      <button className="button-cookies-consent" onClick={onClick}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:"10px", marginBottom:"3px"}}>
          <path d="M8.81301 4.86016L5.95301 7.72683L4.85301 6.62683C4.79325 6.55704 4.7197 6.50036 4.63699 6.46035C4.55428 6.42033 4.46419 6.39784 4.37238 6.3943C4.28057 6.39075 4.18901 6.40622 4.10346 6.43974C4.01791 6.47325 3.94021 6.52409 3.87524 6.58906C3.81027 6.65403 3.75944 6.73173 3.72592 6.81728C3.6924 6.90283 3.67693 6.99439 3.68048 7.0862C3.68402 7.17801 3.70651 7.2681 3.74653 7.35081C3.78654 7.43352 3.84322 7.50707 3.91301 7.56683L5.47968 9.14016C5.54197 9.20195 5.61585 9.25083 5.69707 9.28401C5.7783 9.31719 5.86527 9.334 5.95301 9.3335C6.1279 9.33276 6.2955 9.26333 6.41968 9.14016L9.75301 5.80683C9.8155 5.74485 9.86509 5.67112 9.89894 5.58988C9.93279 5.50864 9.95021 5.4215 9.95021 5.3335C9.95021 5.24549 9.93279 5.15835 9.89894 5.07711C9.86509 4.99587 9.8155 4.92214 9.75301 4.86016C9.6281 4.736 9.45914 4.6663 9.28301 4.6663C9.10689 4.6663 8.93792 4.736 8.81301 4.86016ZM6.99968 0.333496C5.68114 0.333496 4.3922 0.724489 3.29588 1.45703C2.19955 2.18957 1.34506 3.23077 0.840481 4.44894C0.335896 5.66711 0.203874 7.00756 0.461109 8.30076C0.718344 9.59397 1.35328 10.7819 2.28563 11.7142C3.21798 12.6466 4.40587 13.2815 5.69908 13.5387C6.99228 13.796 8.33273 13.6639 9.5509 13.1594C10.7691 12.6548 11.8103 11.8003 12.5428 10.704C13.2754 9.60764 13.6663 8.31871 13.6663 7.00016C13.6663 6.12468 13.4939 5.25778 13.1589 4.44894C12.8238 3.6401 12.3328 2.90517 11.7137 2.28612C11.0947 1.66706 10.3597 1.176 9.5509 0.840966C8.74206 0.505935 7.87516 0.333496 6.99968 0.333496V0.333496ZM6.99968 12.3335C5.94484 12.3335 4.9137 12.0207 4.03664 11.4347C3.15957 10.8486 2.47599 10.0157 2.07232 9.04114C1.66865 8.0666 1.56304 6.99425 1.76882 5.95968C1.97461 4.92512 2.48256 3.97481 3.22844 3.22893C3.97432 2.48305 4.92463 1.9751 5.9592 1.76931C6.99376 1.56352 8.06612 1.66914 9.04066 2.07281C10.0152 2.47647 10.8481 3.16006 11.4342 4.03712C12.0202 4.91418 12.333 5.94533 12.333 7.00016C12.333 8.41465 11.7711 9.77121 10.7709 10.7714C9.77072 11.7716 8.41417 12.3335 6.99968 12.3335V12.3335Z" fill="#EFF3F8"/>
        </svg>
        Aceptar y cerrar
      </button>
    )
  }

  return (
    <Container
      className={`container-fluid p-0 ${isSafary ? " safari-fix" : ""}`}
    >
      {blurEffect && <div className="background-effect"></div>}
      <Navbar siteTitle={`Title`} handleBlurEffect={handleBlurEffect} />
      <div className={`container-fluid p-0 ${blurEffect ? "blur-effect" : ""}`}>
        <main>{children}</main>
      </div>
      <Footer />
      <CookieConsent
        debug={false}
        location="bottom"
        ButtonComponent={(events)=>ButtonConsents(events)}
        containerClasses="cookies-consent"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
        >
        Utilizamos cookies para garantizar que obtengas la mejor experiencia en nuestro sitio web.  
        <Link to="/privacidad" className="links-cookies-consent"> Política de cookies</Link>
      </CookieConsent>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
