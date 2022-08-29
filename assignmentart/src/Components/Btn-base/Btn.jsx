import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import '../Btn-base/btn.css';
import '../ShippingComp/Shipping.css'
function Btn() {
  return (
  <>
  <div className='container-shipping margine' >
  <div className='flex-row-cls'>
    <div>
    <button className='back-btn'>
        <AiOutlineArrowLeft/><p>Back</p>
       </button>
    </div>
    <div>
        <div className='flex-btn-flow'>
            <button className='btn-secondaty'>
             CONTINUE SHOPPING
            </button>
            <button className='btn-primary'>
             PROCEED PAYMENT
            </button>
        </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default Btn