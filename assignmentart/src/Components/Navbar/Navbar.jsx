import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';

function Navbar() {
  return (
    <div className='navbar-section-nv'>

       <div className='logo-name-class-header'>
        <img className='logo-img' src='./Images/logo.png'/>
        <div className='header-logo-name'><span style={{color: "#FFC300"}}>E -</span> <p>Shop</p></div>

    </div>
    <div className='flex-section'>
    <div className='navbar-mid-section'>
        <div >
            Man
        </div>
        <div>
            Women
        </div>
        <div>
            Kids
        </div>
    </div>
    </div>
    <div className='navbar-icon-section'>
        <div>
            <AiOutlineSearch/>
        </div>
        <div>
            <AiOutlineShoppingCart/>
        </div>
        <div>
            <AiOutlineUser/>
        </div>
    </div>
    </div>
 
  )
}

export default Navbar