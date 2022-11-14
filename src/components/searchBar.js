import React from "react"
import UilSearch from "@iconscout/react-unicons/icons/uil-search"
import UilCancel from "@iconscout/react-unicons/icons/uil-multiply"
import styled from "@emotion/styled"
import UilMultiply from "@iconscout/react-unicons/icons/uil-multiply"
import { navigate } from "gatsby"
import { globalHistory } from "@reach/router"

const Form = styled.form`
  display: flex;
  align-items: center;
  padding: ${props =>
    props.isTablet
      ? "var(--spacing-2) 0px var(--spacing-2) 0px"
      : "var(--spacing-2)"};
  height: fit-content;
  border: -10px;
  transition: all ease 0.8s;
  & svg:first-of-type {
    width: ${props => (props.isTablet ? "25px !important" : "18px")};
    /* height: ${props => (props.isMobile ? "25px !important" : "18px")}; */
    transition: all ease 0.6s;
  }
  & > div {
    display: flex;
    align-items: center;
    width: 0px;
    overflow: hidden;
    transition: all ease 0.6s;
    svg {
      width: ${props => (props.isTablet ? "20px !important" : "13px")};
      height: ${props => (props.isTablet ? "20px !important" : "13px")};
    }
  }

  & input {
    box-sizing: border-box;
    margin: 0px 10px;
    padding: 0px;
    border: 0px;
    height: fit-content;
    width: 100%;

    &:focus-visible {
      outline: 0px;
    }
  }

  &.active {
    border: 1px solid var(--color-sea);
    box-sizing: border-box;
    border-radius: 2px;
    padding: var(--spacing-2);
    & svg:first-of-type {
      width: ${props => (props.isTablet ? "20px !important" : "13px")};
      /* height: ${props => (props.isMobile ? "20px !important" : "13px")}; */
      /* width: 13px; */
    }
    & > div {
      width: ${props => (props.isMobile ? "65vw" : "190px")};
      /* width: 190px; */
    }
  }
`
const SearchBar = ({ searchText, isMobile, isTablet }) => {
  const isBrowser = () => typeof window !== "undefined"
  const { search } = isBrowser() ? window.location : ""
  const query = new URLSearchParams(search).get("s")
  const [searchQuery, setSearchQuery] = React.useState(query || "")
  const [active, setActive] = React.useState(false)
  const currentForm = React.createRef()
  const path = globalHistory.location.pathname

  const handleSearchClick = event => {
    event.preventDefault()
    if (active) {
      if (!path.startsWith("/resultados")) {
        navigate(`/resultados?s=${encodeURI(searchQuery)}`, { replace: true })
      } else {
        currentForm.current.submit()
      }
    } else {
      setActive(true)
    }
  }

  const handleFormSubmit = event => {
    if (active) {
      if (!path.startsWith("/resultados")) {
        event.preventDefault()
        navigate(`/resultados?s=${encodeURI(searchQuery)}`, { replace: true })
      }
    } else {
      event.preventDefault()
    }
  }
  const handleCancelClick = event => {
    setActive(false)
    setSearchQuery("")
  }
  return (
    <Form
      isMobile={isMobile}
      isTablet={isTablet}
      role="search"
      action="/resultados"
      method="get"
      autoComplete="off"
      className={active ? "active" : ""}
      onSubmit={handleFormSubmit}
      ref={currentForm}
    >
      <UilSearch
        color="#01426A"
        size={18}
        className="animated-icon"
        onClick={handleSearchClick}
      />

      <div>
        <input
          value={searchQuery}
          onInput={e => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          placeholder={searchText}
          name="s"
        />
        <UilMultiply
          color="#01426A"
          size={13}
          className="animated-icon"
          onClick={handleCancelClick}
        />
      </div>
    </Form>
  )
}

export default SearchBar
