import './Styles/MainNav.css'
import { AiOutlineSearch } from 'react-icons/ai' 
import { IoCartOutline } from 'react-icons/io5' 
import { CgProfile } from 'react-icons/cg'
import logo from '../assets/images/swift-buy logo.png'
import {Link} from 'react-router-dom'
// import { useRef, useState } from "react";
import { useSelector } from "react-redux";

function MainNav() {

  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <div>
          <img src={logo} className='logo' alt="" />
        </div>
        <div className='navbar-search'>
          <input type="text"   placeholder='Search Products' />
        < AiOutlineSearch className='search-icon' />
        </div>
      </div>
      <div className='navbar-right'>
        <div className='navbar-right-links'>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <Link to='/products' >Products</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-right-icons'>
          <div className='navbar-right-icons-cart'>
             <Link to="/checkout"> <IoCartOutline className='cart-icon' /></Link>
              <span className="cart-counter">{cartTotalQuantity}</span>
          </div>
          <div className='navbar-right-icons-user'>
           <Link to="/profile">   <CgProfile className='user-icon' /> </Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default MainNav
