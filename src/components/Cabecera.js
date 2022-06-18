import React from 'react';
import { H1, Header, P, Span } from "./style/CabeceraStyle";
// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera(props) {

  return (
    <Header>
      <H1>CARRITO DE COMPRAS</H1>
      <P>Cantidad de productos: <Span>{props.comprados}</Span></P>
    </Header>
  )
}
