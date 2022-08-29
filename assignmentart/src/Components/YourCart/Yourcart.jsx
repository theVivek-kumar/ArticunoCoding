import React from 'react'
import {BsTruck  } from 'react-icons/bs';
import '../YourCart/YourCart.css';
function Yourcart() {
  return (
    <>
    <div>
        <div className='info-container secondry-heading'>
        <p>
            Your Cart
        </p>
        </div>
        <div className='flex-row list-tab'>
            <div className='image'>
            <img src="/Images/man.png" alt="image" className="sq-img" />
            </div>
            <div className='text'>
                <p>T-Shirt</p>
                <p>Summer Vibes</p>
                <p>#261311</p>
            </div>
            <div>
                <p>
                   $89.99 
                </p>
            </div>
        </div>
        <div className='flex-row list-tab'>
            <div >
            <img src="/Images/man.png" alt="image" className="sq-img" />
            </div>
            <div className='text'>
                <p>T-Shirt</p>
                <p>Summer Vibes</p>
                <p>#261311</p>
            </div>
            <div>
                <p>
                   $89.99 
                </p>
            </div>
        </div>
        <div>
            <p>Total price</p>
            <p>$ 154.89</p>
        </div>
        <div className='fles-row'>
            <div><BsTruck/>
            <p>You are $30.02 away 
                </p>
                <p>from shipping</p></div>
            
        </div>
    </div>

    </>
  )
}

export default Yourcart