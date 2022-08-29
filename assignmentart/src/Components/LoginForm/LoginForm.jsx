import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import '../LoginForm/LoginForm.css';
function LoginForm() {
  return (
   <>
    <div className='Login-container-flex-flow'>
        <p className='info-container'>
            Shipping and payment
        </p>
    
    <div className='login-btn btn'>
        <button className='btn-login'>LOG IN</button>
        <button className='btn-Sigin'>SIGN UP</button>
    </div>
    <div className='info-container secondry-heading'>
        <p> Shipping Information</p>
    </div>
    <form>
       <div>
    <input
         
          type="email"
          className="signup-input"
          placeholder="Email"
        />
         <input
         
         type="text"
         className="signup-input"
         placeholder="Address"
       />
       </div> 
       <div>
       <input
         
         type="text"
         className="signup-input"
         placeholder="First name"
       />
        <input
         
         type="text"
         className="signup-input"
         placeholder="city"
       />

       </div>
       <div>
       <input
         
         type="text"
         className="signup-input"
         placeholder="Last name"
       />
          <input
         
         type="text"
         className="signup-input"
         placeholder="Postal Code / ZIP"
       />

       </div>
       <div>
       <input
         
         type="number"
         className="signup-input"
         placeholder="Phone number"
         />
         <input
         type="drop box"
         className="signup-input"
         placeholder="Poland"
       />

       </div>
       <p>
        <AiOutlineArrowLeft/>Back
       </p>
        
   </form> 
   </div>
    </>
  )
}

export default LoginForm