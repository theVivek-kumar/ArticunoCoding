import React from 'react';
// import { Toast } from '../Toast/Toast';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import '../Btn-base/btn.css';
import '../ShippingComp/Shipping.css'
function Btn() {
  const handlePay = (e) => {
    e.preventDefault();

    var options = {
      key: "rzp_test_gya6abqDZ5NINZ",
      key_secret: "jqkjgTT2WXGxtaTsk4hVC4RW",
      amount:  1540.00,
      currency: "INR",
      name: "Articuno Coding LLP",
      description: " WE offer high end solutions for your business",
      handler: function (response) {
          alert(response.razorpay_payment_id);
        //Toast({ type: "success", msg: "Payment Successful🎉" });
     
      },
      prefill: {
        name: "vivek kumar",
        email: "adarsh@gmail.com",
        contact: "6398087779",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: '#7ad0a7',
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };
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
            <button onClick={ handlePay} className='btn-primary'>
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