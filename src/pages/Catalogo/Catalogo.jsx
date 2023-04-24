import "./Catalogo.css";
import React, {useState} from "react";
import CarouselFadeExample from "../../components/Carrucel/CarouselFadeExample";
import CardProduct from "../../components/Cards/CardProduct";
import Products from '../../Products.json'
import { Link, useHistory } from "react-router-dom";
import ProductUni from "../../components/ProductUni";





function Catalogo() {
  return (
    <>
    <div className="conteinerCatalogo">
        <CarouselFadeExample></CarouselFadeExample>

        <div className="conteinerCards">
      {Products.map((Products) => (
          <Link to={{ pathname: `/product/${Products.id}`, 
          state: { Products } 
          }}>
            <CardProduct 
          key={Products.id}
          image={Products.image}
          name={Products.name}
          value={Products.value} />
          </Link>
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
  
          {/* {Products.map(Products => (
            <CardProduct     
            key={Products.id}
            image={Products.image}
            name={Products.name}
            value={Products.value}
            />
            ))} */}
  {/* ))} */}