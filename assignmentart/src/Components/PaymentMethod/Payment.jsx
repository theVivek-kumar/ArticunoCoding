import React from 'react'
import '../LoginForm/LoginForm.css';
import '../PaymentMethod/Payment.css';
function Payment() {
  return (
    <>
    <div className='payment-style '>
      <p className='info-container secondry-heading'> Payment Method
        </p> 
        <div className='margine-top'>
        <div className='flex-row-img'>
           
            <div className='Payment-img-styl gray'><img  src="./Images/paypal.svg" alt="" /> </div> 
            <div className='Payment-img-styl'>
            <img className='img-styl' src="./Images/mastercard.svg" alt="" /></div>
            <div  className='Payment-img-styl'><img className='img-styl' src="./Images/visa-credit-card.png" alt="" /></div>
           
        </div>
        <div className='flex-row-img'>
            <div  className='Payment-img-styl'><img className='img-styl' src="./Images/discover-network.png" alt="" /></div>
            <div  className='Payment-img-styl'><img className='img-styl'src="./Images/payment.png" alt="" /></div>
            <div  className='Payment-img-styl'><img className='img-styl'src="./Images/ideal.png" alt="" /></div>
        </div>
        </div>
        <p className='info-container secondry-heading'> Dilivery Method
        </p> 
        <div className='margine-top'>
        <div className='flex-row-img'>
           
             
            <div className='Payment-img-styl flex'>
            <img className='img-styl' src="./Images/mastercard.svg" alt="" /> <p className='font-size'>$20.00</p></div>
            <div  className='Payment-img-styl flex'><img className='img-styl' src="./Images/visa-credit-card.png" alt="" /> <p className='font-size'>$10.00</p></div>
           
        </div>
        <div className='flex-row-img'>
          
            <div  className='Payment-img-styl flex gray'><img className='img-styl'src="./Images/payment.png" alt="" /><p className='font-size'>$20.00</p></div>
            <div  className='Payment-img-styl flex'><img className='img-styl'src="./Images/fedex.png" alt="" /><p className='font-size'>$15.00</p></div>
        </div>
        </div>
       
       
    </div>
    </>
  )
}

export default Payment