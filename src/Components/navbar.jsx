import React from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './navbar.css'
import Logo from '../assets/car.jpg'

export const Navbar = () => {

  return (
    <div className='navbar'>
     <div className='leftSide'>
            <img src={Logo} />
            </div>
        <div className='Links'>
            <Link to='/shop'> SHOP </Link>
            <Link to='/cart'> 
               <ShoppingCart size={32} />
            </Link> 
        </div>
        </div>
   
  )
}




