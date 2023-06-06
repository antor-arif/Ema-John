import React, { useState } from 'react';
import Data from '../../fakeData/products.json';
import './Shop.css';
import Product from '../products/products';

function Shop (){
    const first20 = Data.slice(20,40);
     const [Products, setProducts] = useState(first20);


     const handleAddCart = (product) => {
          console.log('Product added',product)
          
     }
    return <>
        <div className='shop-container'>
            <div className='product-container'>
               
                {
                    Products.map( (pd) => <Product handle={handleAddCart} product={pd}></Product>)
                }
                
                
            </div >
                
            <div className='cart-container'>
             <h3>This is cart</h3>
            </div>


       </div>
    </>
}

export default Shop;