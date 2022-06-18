
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import React, { useState } from 'react';
import { Div, H3, P, DivPosition, StockH5 } from "./style/ProductStyle";
import styled from 'styled-components';

const ButtonC = styled.button`
border: none;
padding: 1.5rem 2.5rem;
border-radius: 0.4rem;
color: ${(props) => (props.disabled ? "white": "black")};
background-color: ${(props) => (!props.disabled ? "#bc0099": "gray")};
cursor: pointer;
`;

export default function Product({ product, setComprados }) {
  const [producto, setProducto] = useState(product.stock);
  const [comprarBtn, setComprarBtn] = useState("Comprar");
  const [state, setState] = useState(false);
  
  

  const comprar = () => {
    if(producto >= 1){
      setProducto(prevProducto => prevProducto > 1 ? prevProducto - 1 : "agotado");
      if(producto === 1) {
        setComprarBtn(()=> "Sin stock");
        setState(() => true);
      }
      setComprados(prevComprados => prevComprados + 1);
      console.log(producto);
    } 

  }
  return (
    <Div key={product.id} className="productCard">
        <H3>{product.producto.nombre}</H3>
        <P>{product.producto.descripcion}</P>
        <DivPosition>
          <StockH5>En stock: <span>{producto}</span></StockH5>
          <ButtonC onClick={()=>comprar()} disabled={state}>{comprarBtn}</ButtonC>  
        </DivPosition>
    </Div>
  )
}


  
  

  // const comprar = () => {
  //   if(producto > 1){
  //     setProducto(prevProducto => prevProducto > 1 ? prevProducto - 1 : "agotado");
  //     setComprados(prevComprados => prevComprados + 1);
  //   } else {
  //     setComprarBtn(()=> "Sin stock");
  //     return true;
  //   }
  // }

