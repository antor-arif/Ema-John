import React from 'react';
import logo from '../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    
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
        <h3><FontAwesomeIcon icon={faCartShopping} /></h3>
        
        

        </div>
        
    </div>
    </>
    );
};

export default Header;