import React from 'react'
import '../LoginForm/LoginForm.css'
function Payment() {
  return (
    <>
    <div className='payment-style '>
      <p className='info-container secondry-heading'> Payment Method
        </p>  
        <div className='flex-row'>
           
            <div className='Payment-img-styl'><img  src="./Images/paypal.svg" alt="" /> </div> 
            <img className='Payment-img-styl' src="./Images/mastercard.svg" alt="" />
            <img className='Payment-img-styl' src="./Images/visa-credit-card.png" alt="" />
           
        </div>
        <div className='flex-row'>
            <img  src="./Images/discover-network.png" alt="" />
            <img src="./Images/payment.png" alt="" />
            <img src="./Images/ideal.png" alt="" />
        </div>
       
    </div>
    </>
  )
}

export default Payment