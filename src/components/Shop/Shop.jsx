import React, { useState } from 'react';
import Data from '../../fakeData/products.json';
import './Shop.css';
import Product from '../products/products';
import Cart from '../cart/Cart';
import Header from '../Header';

function Shop (){
    const first20 = Data.slice(20,40);
     const [Products, setProducts] = useState(first20);
     const [cart, setCart] = useState([]);
     const [Head, setHead] =useState([]);


     const handleAddCart = (product) => {
          const newCart = [...cart,product]
          setCart(newCart);
          setHead(newCart)
          
     }
    return <>
         <Header header={Head}></Header>
        <div className='shop-container'>
            <div className='product-container'>
               
                {
                    Products.map( (pd) => <Product handle={handleAddCart} product={pd}></Product>)
                }
                
                
            </div >
                
            <div className='cart-container'>
             <Cart cart={cart}></Cart>
            </div>


       </div>
       
    </>
}

export default Shop;