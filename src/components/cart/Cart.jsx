import React from 'react';
import './Cart.css';



const cart = (props) => {
    const cart = props.cart;
    let total = 0
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total  > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    };
    const tax = total / 10 ;
    const beforeTax = total + shipping;
    const grandTotal = beforeTax + tax;


    const format = (num) =>{
        const precision = num.toFixed(2);
        return Number(precision)
    }



    return (
        <div className='cart'> 
           <h2>Order Summary</h2>
           <h4>Items Ordered : {cart.length}</h4>
           <h4>Items :  <span>$ {total}</span>          </h4>
           <h5>Shipping & handling :               <span>$ {format(shipping)}</span>    </h5>
           <h3>Total before Tax :                  <span>$ {format(beforeTax)}</span>   </h3>
           <h4>Tax & VAT :                         <span>$ {format(tax)}</span>  </h4>
           <p className='total'>Order Total:       <span>$ {format(grandTotal)}</span>  </p>
           <button>Review your order</button>

           
        </div>
    );
};

export default cart;