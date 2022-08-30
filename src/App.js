
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import './Components/Navbar/Navbar.css';
import LoginForm from './Components/LoginForm/LoginForm';
import Payment from './Components/PaymentMethod/Payment';
import Yourcart from './Components/YourCart/Yourcart';
import Shipping from './Components/ShippingComp/Shipping';
import Btn from './Components/Btn-base/Btn';
function App() {
  return (
    <>
    <Navbar/>
    <div className='shipping-style'>   <Shipping/></div>
    <div className='main-container'>
      <div className='flex-row-main'>
    <LoginForm/>
    <Payment/>
    <Yourcart/>
    </div>
    </div>
    <Btn/>
    
    </>
  );
}

export default App;
