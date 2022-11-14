import React, { useEffect, useRef, useState } from "react"
import classNames from "classnames"
import styled from "@emotion/styled"

const SelectStyled = styled.button`
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //background-image: none;

  font-family: var(--font-family-secondary);
  font-style: normal;
  font-weight: normal;
  font-size: var(--font-size-3);
  line-height: var(--font-size-6);
  color: var(--color-lightfont);

  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  box-sizing: border-box;
  border-radius: 2px;
  transition: ease all 0.6s;

  &:hover {
    border: 1px solid var(--color-lightfont);
    color: var(--color-lightfont);
    background-color: var(--color-white);
  }

  &:focus-visible,
  &:focus {
    color: var(--color-lightfont);
    background-color: var(--color-white);
    border: 1px solid var(--color-sea) !important;
    outline: 0 !important;
    box-shadow: none !important;
  }
  &::after {
      content: none !important;
  }
`

const CustomSelect = ({ options, className, onChange, onBlur, name }) => {
  const [selectedOption, setSelectedOption] = useState(options[0])
  const dropdownRef = useRef(null)
  useEffect(() => {
    dropdownRef.current.addEventListener("hidden.bs.dropdown", updateView)

    return () => {
      dropdownRef.current.removeEventListener("hidden.bs.dropdown", updateView)
    }
  }, [])

  const updateView = () => {
    const event = new CustomEvent("event", {
      bubbles: true,
      cancelable: true,
      composed: false,
      detail: {
        name: name,
        value: selectedOption.value,
      },
    })
    onBlur(event)
  }
  const onOptionClick = (evt, value) => {
    evt.preventDefault()
    const tempSelected = options.find(option => option.value === value)
    setSelectedOption(tempSelected || options[0])
    const event = new CustomEvent("event", {
      bubbles: true,
      cancelable: true,
      composed: false,
      detail: {
        name: name,
        value: tempSelected.value,
      },
    })
    onChange(event)
  }
  if (!selectedOption) {
    return null
  }
  return (
    <div class="dropdown">
      <SelectStyled
        className={classNames(
          "btn btn-secondary dropdown-toggle form-select",
          className
        )}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedOption.text}
      </SelectStyled>
      <ul
        className="dropdown-menu"
        ref={dropdownRef}
        aria-labelledby="dropdownMenuButton1"
      >
        {options.map(({ text, value }) => {
          return (
            <li key={value} onClick={evt => onOptionClick(evt, value)}>
              <a
                className={classNames("dropdown-item", {
                  active: selectedOption.value === value,
                })}
                href="#"
              >
                {text}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CustomSelect
