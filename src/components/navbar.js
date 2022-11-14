import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import "./navbar.scss"
import Logo from "../images/ashford-logo.svg"
import data from "../data/navbar/data.json"
import SearchBar from "./searchBar"
import PlusCloseIcon from "./plus-close/PlusCloseIcon"
import SocialIcon from "../components/condition/socialIcon"
import Facebook from "../images/facebook.svg"
import Linkedin from "../images/linkedin.svg"
import Twiter from "../images/twiter.svg"
import Instagram from "../images/instagram.svg"
import BarCloseIcon from "./bar-close/BarCloseIcon"
import ActiveLink from "./ActiveLink"
import medicalSquareFull from "../images/medical-square-full.svg"

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" }
}

const ExactNavLink = props => <Link getProps={isActive} {...props} />
const MobileButton = styled.button`
  border: 0px;
  & svg {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
`
const LiSearch = styled.li`
  display: none !important;

  @media (min-width: 992px) {
    display: flex !important;
  }
`

const MobileButtonsContainer = styled.div`
  display: flex;
  & > *:focus {
    box-shadow: none !important;
  }
`

const SocialContainer = styled.div`
  display: flex;
  margin-right: calc(var(--spacing-4) * -1);
  margin-top: var(--spacing-9);
  & > div {
    margin-right: var(--spacing-4);
  }
`

const EnouncedTitle = styled.p`
  line-height: --line-height-8;
`
const EnouncedParagraph = styled.p`
  line-height: --line-height-3;
`

const NavLogo = styled.img`
  width: 104px;
  height: 40px;
`

const NavLink = styled.a`
  text-decoration: none;
  color: #27364b;
  :hover {
    color: var(--color-sea);
  }
`

const MedIcon = styled.img`
  display: none;
  margin-top: calc(var(--spacing-1) * -0.4);
  margin-right: calc(var(--spacing-1) * 1.375);
  height: 15px;
  width: 15px;

  @media (min-width: 992px) {
    display: block;
  }
`
const Frame = styled.div`
  display: flex;
  height: 36px;
  align-items: center;
`

const Navbar = ({ handleBlurEffect }) => {
  const {
    servicesSpecialities,
    emergencyRoom,
    patients,
    about,
    contact,
    portalPagos,
    searchText,
    social,
  } = data
  const breakpoints = useBreakpoint()
  const [plusClose, setPlusClose] = React.useState({
    services: false,
    patients: false,
    about: false,
  })
  const [isOpenBarCloseIcon, setIsOpenBarCloseIcon] = React.useState(false)
  const buttonMainTogglerRef = React.useRef(null)
  const mainNavbarRef = React.useRef(null)

  const handleOnClickBarCloseIcon = e => {
    const classList = e.currentTarget.parentNode.classList

    if (classList) {
      if (!classList.contains("collapsed")) {
        setIsOpenBarCloseIcon(true)
      } else {
        setIsOpenBarCloseIcon(false)
      }
    }
  }

  const handlePlusClose = plusCloseId => {
    if (!breakpoints.bslg) {
      setPlusClose({
        ...{ services: false, patients: false, about: false },
        [plusCloseId]: !plusClose[plusCloseId],
      })
    }
  }

  const handleCloseMenuWhenNoNavigation = () => {
    buttonMainTogglerRef.current.classList.add("collapsed")
    buttonMainTogglerRef.current.setAttribute("aria-expanded", false)
    mainNavbarRef.current.classList.remove("show")
    handleBlurEffect(false)
    setIsOpenBarCloseIcon(false)
    handlePlusClose("")
  }

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-light`}>
      <div className="container-fluid p-0">
        <Link to="/" className="navbar-brand ps-3" href="#">
          <NavLogo src={Logo} />
        </Link>

        <MobileButtonsContainer>
          <MobileButton className="navbar-toggler mx-1" aria-label="Search">
            <SearchBar
              isMobile={!breakpoints.bssm}
              isTablet={!breakpoints.bslg}
              searchText={searchText}
            />
          </MobileButton>
          <MobileButton
            id="main-navbar-toggler"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-navbar"
            aria-controls="main-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => handlePlusClose("")}
            ref={buttonMainTogglerRef}
          >
            <BarCloseIcon
              isOpen={isOpenBarCloseIcon}
              onClick={handleOnClickBarCloseIcon}
            />
          </MobileButton>
        </MobileButtonsContainer>

        <div
          ref={mainNavbarRef}
          className="collapse navbar-collapse"
          id="main-navbar"
        >
          <ul
            className={`navbar-nav ms-auto mb-2 mb-md-0 pr-md-2 ${
              !breakpoints.bslg ? "parent" : ""
            }`}
          >
            <li
              className="nav-item dropdown has-megamenu"
              onMouseEnter={() => handleBlurEffect(true)}
              onMouseLeave={() => handleBlurEffect(false)}
            >
              <span
                className="nav-link"
                href="#"
                id="navbarDropdownMenuLinkServices"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <ActiveLink paths={["servicios", "especialidades"]}>
                  {servicesSpecialities.title}
                  {!breakpoints.bslg && (
                    <PlusCloseIcon
                      isOpen={plusClose.services}
                      onClick={() => handlePlusClose("services")}
                    />
                  )}
                </ActiveLink>
              </span>

              <div
                className="dropdown-menu megamenu container-fluid px-lg-2"
                aria-labelledby="navbarDropdownMenuLinkServices"
              >
                {breakpoints.bslg && (
                  <div className="container-enounced-title anounced-service">
                    <EnouncedTitle className="typo-heading-l">
                      Servicios y especialidades
                    </EnouncedTitle>
                    <EnouncedParagraph className="typo-body-m">
                      En el Hospital Ashford ofrecemos una gran diversidad de
                      servicios.
                    </EnouncedParagraph>
                  </div>
                )}
                <div className="menu-list menu-service">
                  {breakpoints.bslg && (
                    <ExactNavLink to="/servicios" href="#">
                      Servicios
                    </ExactNavLink>
                  )}

                  <ul>
                    {servicesSpecialities.itemsServices.map(item => (
                      <li key={item.id}>
                        <ExactNavLink
                          to={item.link}
                          className="dropdown-item"
                          href="#"
                          onClick={handleCloseMenuWhenNoNavigation}
                        >
                          {item.title}
                        </ExactNavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="menu-list menu-service">
                  {breakpoints.bslg && (
                    <ExactNavLink to="/especialidades" href="#">
                      Especialidades
                    </ExactNavLink>
                  )}
                  <ul>
                    {servicesSpecialities.itemsSpecialities.map(item => (
                      <li key={item.id}>
                        <ExactNavLink
                          to={item.link}
                          className="dropdown-item"
                          href="#"
                          onClick={handleCloseMenuWhenNoNavigation}
                        >
                          {item.title}
                        </ExactNavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item" onClick={() => handlePlusClose("")}>
              <ExactNavLink to={emergencyRoom.link}>
                {emergencyRoom.title}
              </ExactNavLink>
            </li>
            <li
              className="nav-item dropdown has-megamenu"
              onMouseEnter={() => handleBlurEffect(true)}
              onMouseLeave={() => handleBlurEffect(false)}
            >
              <span
                className="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <ActiveLink
                  paths={[
                    "condiciones",
                    "directorio",
                    "guia",
                    "admision",
                    "testimonios",
                  ]}
                >
                  {patients.title}
                  {!breakpoints.bslg && (
                    <PlusCloseIcon
                      isOpen={plusClose.patients}
                      onClick={() => handlePlusClose("patients")}
                    />
                  )}
                </ActiveLink>
              </span>
              <div
                className="dropdown-menu megamenu container-fluid px-lg-2"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {breakpoints.bslg && (
                  <div className="container-enounced-title anounced-patient">
                    <EnouncedTitle className="typo-heading-l">
                      Para pacientes
                    </EnouncedTitle>
                    <EnouncedParagraph className="typo-body-m">
                      Encuentre guias esenciales para que todo paciente este
                      informado y tenga la mejor experiencia posible en el
                      Hospital Ashford
                    </EnouncedParagraph>
                  </div>
                )}
                <div className="menu-list menu-patient">
                  {breakpoints.bslg && (
                    <ExactNavLink to="/directorio" href="#">
                      Directorios
                    </ExactNavLink>
                  )}
                  <ul>
                    {patients.itemsDirectories.map(item => (
                      <li key={item.id}>
                        <ExactNavLink
                          to={item.link}
                          className="dropdown-item"
                          href="#"
                        >
                          {item.title}
                        </ExactNavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="menu-list menu-patient">
                  {breakpoints.bslg && (
                    <ExactNavLink to="/admision" href="#">
                      Recursos
                    </ExactNavLink>
                  )}
                  <ul>
                    {patients.itemsResources.map(item => (
                      <li key={item.id}>
                        <ExactNavLink
                          to={item.link}
                          className="dropdown-item"
                          href="#"
                        >
                          {item.title}
                        </ExactNavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            {
              <li
                className="nav-item dropdown has-megamenu"
                onMouseEnter={() => handleBlurEffect(true)}
                onMouseLeave={() => handleBlurEffect(false)}
              >
                <a
                  className="nav-link "
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <ActiveLink paths={["nosotros", "equipo"]}>
                    {about.title}
                    {!breakpoints.bslg && (
                      <PlusCloseIcon
                        isOpen={plusClose.about}
                        onClick={() => handlePlusClose("about")}
                      />
                    )}
                  </ActiveLink>
                </a>

                <div
                  className="dropdown-menu megamenu container-fluid px-lg-2"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {breakpoints.bslg && (
                    <div className="container-enounced-title anounced-about">
                      <EnouncedTitle className="typo-heading-l">
                        Sobre nosotros
                      </EnouncedTitle>
                      <EnouncedParagraph className="typo-body-m">
                        El hospital Ashford cuenta con una facultad de
                        aproximadamente 250 médicos, 630 empleados, y con 175
                        camas para atender paciente en prácticamente todas las
                        especialidades.
                      </EnouncedParagraph>
                    </div>
                  )}
                  <div className="menu-list menu-about">
                    {breakpoints.bslg && (
                      <ExactNavLink to="/nosotros" href="#">
                        Sobre nosotros
                      </ExactNavLink>
                    )}
                    <ul>
                      {about.items.map(item => (
                        <li key={item.id}>
                          <ExactNavLink
                            to={item.link}
                            className="dropdown-item"
                            href="#"
                          >
                            {item.title}
                          </ExactNavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            }
            <li className="nav-item">
              <ExactNavLink to={contact.link}>{contact.title}</ExactNavLink>
            </li>

            <li className="nav-item">
              <NavLink href={portalPagos.link} target='_blank' rel="noreferrer"><Frame><MedIcon src={medicalSquareFull} alt='' />{portalPagos.title}</Frame></NavLink>
            </li>
            {!breakpoints.bslg && (
              <SocialContainer>
                <SocialIcon href={social.networks.facebook}>
                  <img src={Facebook} />
                </SocialIcon>
                <SocialIcon href={social.networks.linkedin}>
                  <img src={Linkedin} />
                </SocialIcon>
                <SocialIcon href={social.networks.twiter}>
                  <img src={Twiter} />
                </SocialIcon>
                <SocialIcon href={social.networks.instagram}>
                  <img src={Instagram} />
                </SocialIcon>
              </SocialContainer>
            )}

            <LiSearch className="nav-item nav-search">
              <SearchBar searchText={searchText} />
            </LiSearch>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
