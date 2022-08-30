import React, { useState } from 'react'
import '../LoginForm/LoginForm.css';
import toast, { Toaster } from 'react-hot-toast';
function LoginForm() {
  const [ login , setlogin]=useState(false)
  function LoginHandler(){
    setlogin(login=>!login)
    toast(login? 'You are login.' : " you are log out",{
     
      duration: 3000,
      position: 'top-center',
    
      // Styling
      style: {},
      className: '',
    
      // Custom Icon
      icon: '👏',
    
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  }


// const notify = () => toast('Here is your toast.');

// const App = () => {
//   return (
//     <div>
//       <button onClick={notify}>Make me a toast</button>
//       <Toaster />
//     </div>
//   );
// };
  

  return (
   <>
  
    <div className='Login-container-flex-flow'>
    
    
    <div className='login-btn btn'>
        <button onClick={LoginHandler} className='btn-login'>{login ? 'LOG OUT':"LOG IN"   }</button>
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
     
       <Toaster />  
   </form> 
   </div>
    </>
  )
}

export default LoginForm