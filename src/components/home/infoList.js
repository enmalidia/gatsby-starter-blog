import React from "react"
import PropTypes from "prop-types"
import InfoItem from "./infoItem"
import styled from "@emotion/styled"
import rightArrow from "../../images/right-arrow.svg"
import rightArrowNavy from "../../images/right-arrow-navy.svg"

const Container = styled.ul`
  padding-left: 6px;
  margin-bottom: 0px;
  color: #27364b;
  li {
    list-style: none;
    padding-left: 1.5rem;
    background-image: url(${rightArrow});
    background-position: 0px 5.5px;
    background-size: 12px;
    background-repeat: no-repeat;
    margin-bottom: 12px;
    line-height: 24px;

    font-family: Untitled Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: var(--spacing-2);
    line-height: var(--line-height-4);

    @media (min-width: 576px) {
      font-weight: normal;
    }
    @media (min-width: 768px) {
      padding-left: 1.5rem;
    }
  }
  @media (min-width: 768px) {
    padding-left: 32px;
    margin-left: 24px;
    margin-bottom: 16px;
  }
`
const SubContainer = styled.ul`
  margin-bottom: 12px;
  color: #27364b;
  margin-left: 0;
  padding-left: 0;
  li {
    marging-left: -12px;
    list-style: none;
    padding-left: 1.5rem;
    background-image: url(${rightArrowNavy});
    background-position: 0px 5.5px;
    background-size: 12px;
    background-repeat: no-repeat;
    margin-top: 12px;
  }
`
const PhoneLink = styled.a`
  &:hover,
  &:link,
  &:visited,
  &:active {
    color: var(--color-sea);
    text-decoration: none;
  }
  cursor: pointer;
`
const Paragraph = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
`

const InfoList = ({ list }) => {
  return (
    <Container>
      <li>
        Recibirás un <strong>enlace por mensaje de texto</strong> para acceder
        el portal de pago
      </li>
      <li>
        <strong>
          Si no ha recibido una URL o link a través de un mensaje de texto
        </strong>{" "}
        del Hospital Ashford, por favor llame al teléfono:
        <SubContainer>
          <li>
            <Paragraph>
              Pacientes de Medicare, MCSClassic, Humana Gold, MMM, PMC, TSA,
              TRICARE, CHAMPVA, HMO
            </Paragraph>
            <Paragraph>
              <PhoneLink href="tel:787 721 2160">787 721 2160</PhoneLink> ext.{" "}
              <strong>6612, 6608, 6783, 6745</strong>
            </Paragraph>
          </li>
          <li>
            <Paragraph>Pacientes planes Comerciales:</Paragraph>
            <Paragraph>
              <PhoneLink href="tel:787 721 2160">787 721 2160</PhoneLink> ext.{" "}
              <strong>1002, 1073, 1071, 6706, 6546, 2167, 6707</strong>
            </Paragraph>
          </li>
        </SubContainer>
      </li>
      <li>
        <strong>Para su seguridad</strong> el portal le solicitara verificar su
        identidad proveyendo su nombre y apellido; 4 últimos dígitos de su SSN o
        DOB y número de zipcode.
      </li>
      <li>
        Una vez verificada su identidad, tendrá{" "}
        <strong>acceso a sus facturas</strong> para revisarlas
      </li>
      <li>
        <strong>Proceda al pago</strong> utilizando su tarjeta de crédito o
        débito, Visa/Master Card y/o cuenta de ahorro corriente.
      </li>
    </Container>
  )
}

// const InfoList = ({list}) => {

//   return <Container>
//       { list?.map(item => <InfoItem value={item.value} sublist={item?.sublist} key={item.key}/>)}
//   </Container>
// }

InfoList.propTypes = {}

export default InfoList
