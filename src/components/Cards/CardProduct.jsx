import React from 'react'
import './Card.css'  
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

export function CardProduct(props) {
    return(
      <CardGroup className='cardSize'>
      <Card key={props.id}>
        <Card.Img variant="top" src={props.image}/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.value}
          </Card.Text>
            <Button variant="outline-secondary">Agregar al carrito</Button>{' '}
        </Card.Body>
      </Card>
      </CardGroup>





    //   <Card style={{ width: '18rem' }} className='cardProduct' key={props.id}>
    //   <Card.Img variant="top" src={props.image} />
    //   <Card.Body>
    //     <Card.Title>{props.name}</Card.Title>
    //     <Card.Text>{props.value}</Card.Text>
    //   </Card.Body>
    // </Card>





        // <div className='card'>
        //     <div key={props.id} className='productCard'>
        //         <img src={props.image} alt='product-img' className='cardImage'></img>


        //         <div className='productCard__content'>
        //             <h3 className='productName'>{props.name}</h3>
        //             <h4>{props.value}</h4>
        //         </div>
        //     </div>
        // </div>
    )
}
export default CardProduct