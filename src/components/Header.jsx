import React from 'react';
import logo from '../images/logo.png';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';


import Shop from './Shop/Shop'


const Header = (props) => {
    const head = props.header;
    
    return ( <>
        <div className='header'>
           <img src={logo} type='image/png'></img>
        </div>
        <div className='Nav'>
        <ul className='list'>
            <li><a href='/shop'>Shop</a></li>
            <li><a href='/review'>Order Review</a></li>
            <li><a href='/manage'>Manage Inventory here</a></li>
        </ul>
        
        <div className='inputBox'>

        <input type='text' placeholder='type here to search'></input>
    
        </div>
        <div className='cart-details'>
            
        <FaShoppingCart className='Cart-logo'/>
        <p className='cart-number'>{head.length}</p>
        
        
        </div>
        </div>
        
    
    </>
    );
};

export default Header;