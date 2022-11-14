import React, { useEffect, useState } from "react"
import { validateFields } from "../../utils/Validation"
import styled from "@emotion/styled"
import classnames from "classnames"
import Cleave from "cleave.js/react"

const Button = styled.div`
  background-color: var(--color-sea);
  border: 2px solid var(--color-sea);
  box-sizing: border-box;
  border-radius: 4px;
  margin: var(--spacing-6) 0px 0px 0px;
  padding: 8px 16px;
  display: flex;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  & > label {
    pointer-events: none;
    line-height: 20px;
    text-align: center;
    color: var(--color-white);
    margin: 0px 0px;
  }
  transition: background-color 0.6s ease-out, border-color 0.6s ease-out;

  :hover:not(.disabled) {
    background-color: var(--color-ashford);
    border-color: var(--color-ashford);
  }
  &.disabled {
    cursor: not-allowed;
  }
`

const FieldsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: var(--spacing-3);
  grid-column-gap: var(--spacing-3);
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const initalFormState = {
  firstname: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  lastname: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  email: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  birthday: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  phone: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  gender: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  address: {
    value: "",
    validateOnChange: false,
    error: "",
  },
  plan: {
    value: "",
    validateOnChange: false,
    error: "",
  },
}

const Form = styled.form`
  label {
    font-family: var(--font-family-secondary);
    font-style: normal;
    font-weight: normal;
    font-size: var(--font-size-3);
    line-height: var(--font-size-6);
    color: var(--color-bodyfont);
    margin-bottom: var(--spacing-1);
  }
  input, select {
    height: 40px;
  }
  input,
  textarea {
    font-family: var(--font-family-secondary);
    font-style: normal;
    font-weight: normal;
    font-size: var(--font-size-3);
    line-height: var(--font-size-6);
    color: var(--color-lightfont);

    background: var(--color-white);
    border: 1px solid var(--color-border);
    box-sizing: border-box;
    border-radius: 2px;
    transition: ease all 0.6s;

    &:hover {
      border: 1px solid var(--color-lightfont);
    }

    &:focus-visible,
    &:focus {
      border: 1px solid var(--color-sea) !important;
      outline: 0 !important;
      box-shadow: none !important;
    }
  }

  select {
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
    }

    &:focus-visible,
    &:focus {
      border: 1px solid var(--color-sea) !important;
      outline: 0 !important;
      box-shadow: none !important;
    }
  }
`

const FieldFullWidth = styled.div`
  width: 100%;
  margin-top: var(--spacing-3);
`
const AdmissionForm = ({ planList, genderList, submitText, ...formLabels }) => {

  const [fields, setFields] = useState(initalFormState)
  const [submitCalled, setSubmitCalled] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [validPlan, setValidPlan] = useState([])
  const [validGender, setValidGender] = useState([])

  useEffect(() => {
    if (!planList || !genderList) {
      return
    }
    const validPlanTemp = planList.reduce((stack, item) => {
      if (item.id !== -1) {
        stack.push(item.text)
      }
      return stack
    }, [])
    const validGenderTemp = genderList.reduce((stack, item) => {
      if (item.id !== -1) {
        stack.push(item.value)
      }
      return stack
    }, [])

    setValidGender([...validGenderTemp])
    setValidPlan([...validPlanTemp])
  }, [planList, genderList])

  const { firstname, lastname, email, birthday, phone, gender, address, plan } =
    fields

  const submit = async () => {
    let data = new FormData()
    data.append("firstname", firstname.value)
    data.append("lastname", lastname.value)
    data.append("email", email.value)
    data.append("birthday", birthday.value)
    data.append("phone", phone.value)
    data.append("gender", gender.value)
    data.append("address", address.value)
    data.append("plan", plan.value)

    fetch("https://formspree.io/f/mrgjqywk", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => {
        try {
          if (response.status === 200 && response.ok) {
            setFields({ ...initalFormState })
            setSubmitCalled(false)
            alert("Your message was sent successfully")
          } else {
            alert("ERROR, try again later!")
          }
        } catch (error) {
          alert("ERROR, try again later!")
        } finally {
          setSubmitting(false)
        }
      })
      .catch(error => {
        alert("ERROR, try again later!")
        setSubmitting(false)
      })
  }

  const handleBlur = (validationFunc, evt, options) => {
    const field = evt?.target?.name || evt?.detail?.name
    if (fields[field]["validateOnChange"] === false && submitCalled === false) {
      setFields({
        ...fields,
        [field]: {
          ...fields[field],
          validateOnChange: true,
          error: validationFunc
            ? validationFunc(fields[field].value, options)
            : "",
        },
      })
    }
    return
  }

  const handleChange = (validationFunc, evt, options) => {
    
    const field = evt?.target?.name || evt?.detail?.name
    const fieldVal = evt?.target?.value || evt?.detail?.value
    setFields({
      ...fields,
      [field]: {
        ...fields[field],
        value: fieldVal,
        error:
          fields[field]["validateOnChange"] && validationFunc
            ? validationFunc(fieldVal, options)
            : "",
      },
    })
  }

  const handleFormSubmit = evt => {
    evt.preventDefault()
    if (submitting) {
      return
    }
    const firstnameError = validateFields.validateFirstName(firstname.value)
    const emailError = validateFields.validateEmail(email.value)
    const birthdayError = validateFields.validateBirthday(birthday.value)
    const lastnameError = validateFields.validateLastName(lastname.value)

    const phoneError = validateFields.validatePhone(phone.value)
    const addressError = validateFields.validateAddress(address.value)
    const genderError = validateFields.validateGender(gender.value, validGender)
    const planError = validateFields.validatePlan(plan.value, validPlan)
    if (
      [
        firstnameError,
        emailError,
        lastnameError,
        birthdayError,
        planError,
        phoneError,
        addressError,
        genderError,
      ].every(e => e === false)
    ) {
      setSubmitting(true)
      submit()
    } else {
      setFields({
        ...fields,
        firstname: {
          ...fields.firstname,
          validateOnChange: true,
          error: firstnameError,
        },
        email: {
          ...fields.email,
          validateOnChange: true,
          error: emailError,
        },
        birthday: {
          ...fields.birthday,
          validateOnChange: true,
          error: birthdayError,
        },
        lastname: {
          ...fields.lastname,
          validateOnChange: true,
          error: lastnameError,
        },
        phone: {
          ...fields.phone,
          validateOnChange: true,
          error: phoneError,
        },
        address: {
          ...fields.address,
          validateOnChange: true,
          error: addressError,
        },
        gender: {
          ...fields.gender,
          validateOnChange: true,
          error: genderError,
        },
        plan: {
          ...fields.plan,
          validateOnChange: true,
          error: planError,
        },
      })
    }
  }
  return (
    <Form>
      <FieldsContainer>
        <div>
          <label htmlFor="name" className="form-label">
            {formLabels.firstName}
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstname.value}
            placeholder={formLabels.firstName}
            className={classnames(
              "form-control",
              { "is-valid": firstname.error === false },
              { "is-invalid": firstname.error }
            )}
            onChange={evt =>
              handleChange(validateFields.validateFirstName, evt)
            }
            onBlur={evt => handleBlur(validateFields.validateFirstName, evt)}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="form-label">
            {formLabels.lastName}
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastname.value}
            placeholder={formLabels.lastName}
            className={classnames(
              "form-control",
              { "is-valid": lastname.error === false },
              { "is-invalid": lastname.error }
            )}
            onChange={evt => handleChange(validateFields.validateLastName, evt)}
            onBlur={evt => handleBlur(validateFields.validateLastName, evt)}
          />
        </div>
        <div>
          <label htmlFor="birthday" className="form-label">
            {formLabels.birthday}
          </label>
          <Cleave
            placeholder="MM/DD/AAAA"
            delimiter="-"
            options={{ date: true, datePattern: ["m", "d", "Y"] }}
            id="birthday"
            name="birthday"
            value={birthday.value}
            className={classnames(
              "form-control",
              { "is-valid": birthday.error === false },
              { "is-invalid": birthday.error }
            )}
            onChange={evt => handleChange(validateFields.validateBirthday, evt)}
            onBlur={evt => handleBlur(validateFields.validateBirthday, evt)}
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            {formLabels.email}
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email.value}
            placeholder={formLabels.email}
            className={classnames(
              "form-control",
              { "is-valid": email.error === false },
              { "is-invalid": email.error }
            )}
            onChange={evt => handleChange(validateFields.validateEmail, evt)}
            onBlur={evt => handleBlur(validateFields.validateEmail, evt)}
          />
        </div>
        <div>
          <label htmlFor="phone" className="form-label">
            {formLabels.phone}
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone.value}
            placeholder={formLabels.phone}
            className={classnames(
              "form-control",
              { "is-valid": phone.error === false },
              { "is-invalid": phone.error }
            )}
            onChange={evt => handleChange(validateFields.validatePhone, evt)}
            onBlur={evt => handleBlur(validateFields.validatePhone, evt)}
          />
        </div>
        <div>
          <label htmlFor="gender" className="form-label">
            {formLabels.gender}
          </label>
          <select
            id="gender"
            name="gender"
            value={gender.value}
            placeholder={formLabels.gender}
            className={classnames(
              "form-select",
              { "is-valid": gender.error === false },
              { "is-invalid": gender.error }
            )}
            onChange={evt =>
              handleChange(validateFields.validateGender, evt, validGender)
            }
            onBlur={evt =>
              handleBlur(validateFields.validateGender, evt, validGender)
            }
          >
            {genderList.map(({ id, text, value }) => (
              <option key={id} value={value}>
                {text}
              </option>
            ))}
          </select>
        </div>
      </FieldsContainer>
      <FieldFullWidth>
        <div>
          <label htmlFor="plan" className="form-label">
            {formLabels.plan}
          </label>
                    <select
            id="plan"
            name="plan"
            value={plan.value}
            className={classnames(
              "form-select",
              { "is-valid": plan.error === false },
              { "is-invalid": plan.error }
            )}
            placeholder={formLabels.plan}
            onChange={evt =>
              handleChange(validateFields.validatePlan, evt, validPlan)
            }
            onBlur={evt =>
              handleBlur(validateFields.validatePlan, evt, validPlan)
            }
          >
            {planList.map(({ id, text, value }) => (
              <option key={id} value={value}>
                {text}
              </option>
            ))}
          </select>
        </div>
      </FieldFullWidth>
      <FieldFullWidth>
        <div>
          <label htmlFor="address" className="form-label">
            {formLabels.address}
          </label>
          <textarea
            type="text"
            id="address"
            name="address"
            value={address.value}
            placeholder={formLabels.address}
            className={classnames(
              "form-control",
              { "is-valid": address.error === false },
              { "is-invalid": address.error }
            )}
            onChange={evt => handleChange(validateFields.validateAddress, evt)}
            onBlur={evt => handleBlur(validateFields.validateAddress, evt)}
          />
        </div>
      </FieldFullWidth>
      <Button
        className={classnames({ disabled: submitting })}
        onClick={handleFormSubmit}
        onMouseDown={() => setSubmitCalled(true)}
      >
        <label className="typo-body-m">{submitText}</label>
      </Button>
    </Form>
  )
}

export default AdmissionForm
