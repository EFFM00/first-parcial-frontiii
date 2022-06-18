import React from 'react';
import { H1, Header, P } from "./style/CabeceraStyle";
import styled from 'styled-components';
// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)


export const Span = styled.span`
    background-color: white;
    color: black;
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    text-align: center;
    border-radius: 25px;
`

export default function Cabecera(props) {

  return (
    <Header>
      <H1>CARRITO DE COMPRAS</H1>
      <P>Cantidad de productos: <Span>{props.comprados}</Span></P>
    </Header>
  )
}
