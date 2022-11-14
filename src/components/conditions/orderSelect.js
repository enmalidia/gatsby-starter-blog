import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
`

const Label = styled.label`
  width: max-content;
  //width: 100%;
  margin-bottom: 0px !important;
  //max-width: fit-content;
  margin-right: var(--spacing-4);

  @media (min-width: 992px) {
    margin-right: var(--spacing-4);
    margin-left: var(--spacing-4);
  }
`

const Select = styled.select`
  width: 100%;

  option {
    line-height: var(--line-height-3);
  }

  @media (min-width: 576px) {
    width: auto !important;
  }
`
const OrderSelect = ({ list, selectedOption, onChange }) => {
  const handleOnChange = evt => {
    onChange(evt.target.value)
  }
  return (
    <Container>
      <Label htmlFor="orderSelect" className="form-label">
        Ordenar por:
      </Label>
      <Select
        className="form-select selectpicker"
        id="orderSelect"
        aria-label="Default select example"
        onChange={handleOnChange}
      >
        {list.map(({ name, id }) => {
          if (id === selectedOption) {
            return (
              <option key={id} value={id} defaultValue className="typo-body-m">
                {name}
              </option>
            )
          } else {
            return (
              <option key={id} value={id} className="typo-body-m">
                {name}
              </option>
            )
          }
        })}
      </Select>
    </Container>
  )
}

OrderSelect.propTypes = {}

export default OrderSelect
