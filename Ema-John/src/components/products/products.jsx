import React from 'react';
import './products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const products = (props) => {
  
  
  const {name,img,stock,price,seller} = props.product;
    return <>
    <div className='products'>
        <div className='image'>
          <img src={img}></img>
        </div>
        <div className='product-info'>
            <h3 className='info'>{name}</h3>
            <h5>by: <b>{seller}</b> </h5>
            <h2>${price}</h2>
            <p>only <b>{stock}</b> left in stock. Order soon..</p>
            <button onClick={() => props.handle(props.product)} className='order-button'><FontAwesomeIcon icon={faCartShopping} /> add to cart</button>


              
        </div>
        </div>
    
    </>;
};

export default products;