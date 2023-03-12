import ProductsData from './ProductData'
import React, { useState } from 'react'
import { Button, Card, CardImg } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { ADD } from '../Redux/actions/action'

const Products = () => {
  const [data,setData] = useState(ProductsData)

  const dispatch = useDispatch()
  const send = (e) => {
    dispatch(ADD(e))
  }

  return (
    <div className='container mt-3'>
      <h1 className='head'>CHOOSE YOURS</h1>
      <div className='allCards row' >
        {data.map((el,id)=>{
          return(
            <>
                <Card className='cardStyle mx-2 mt-4 card_style' >
      <Card.Img variant="top" src={el.img} className='mt-3 cardImg' />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          Price: ${el.price}
        </Card.Text>
       
        <Button variant="primary" className='cardButton' onClick={() => send(el)}>Add to Cart</Button>
      </Card.Body>
    </Card>  
            </>
          )
        })}
 
  
  
      </div>
    </div>
  )
}

export default Products
