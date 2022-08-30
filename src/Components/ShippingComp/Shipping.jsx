import React from 'react';
import '../ShippingComp/Shipping.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BsTruck  } from 'react-icons/bs';
function Shipping() {
  return (
    <>
    <div  className='container-shipping'>
            <div className='flex-row-sp' >
            <div className='flex-row-align'>
            <p className='info-container'>
            Shipping and payment
            </p> 
        </div>
        <div  className='flex-row-sp icon'>
            <div className='icon-line'>
            <AiOutlineShoppingCart/>
            </div>
            <div className='icon-fill'>
                <BsTruck/>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Shipping