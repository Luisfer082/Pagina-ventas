import "./Catalogo.css";
import React, {useState} from "react";
import CarouselFadeExample from "../../components/Carrucel/CarouselFadeExample";
import CardProduct from "../../components/Cards/CardProduct";
import Products from '../../Products.json'



function Catalogo() {
  return (
    <>
    <div className="conteinerCatalogo">
        <CarouselFadeExample></CarouselFadeExample>

        <div className="conteinerCards">
        {Products.map(Products => (
          <CardProduct
          key={Products.id}
          image={Products.image}
          name={Products.name}
          value={Products.value}
          />
          ))}

          </div>
    </div>
    </>
  );
}

export default Catalogo;




//  {DatosCatalogo.map(DatosCatalogo =>(
// <Card>
//   key={DatosCatalogo.id}
//   image={DatosCatalogo.image}
//   name={DatosCatalogo.name}
//   valor={DatosCatalogo.valor}

// </Card> 
  {/* ))} */}