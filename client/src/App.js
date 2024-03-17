import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signup } from './Components/Header/Signup/signup';
import { Login } from './Components/Header/Login/login';
import { Menu } from './Components/Header/Menu/menu';
import { UserMobile } from './Components/Header/Usermobile/usermobile';
import { UserFashion } from './Components/Header/Userfashion/userfashion';
import { UserElectronics } from './Components/Header/Userelectronics/userelectronics';
import { UserFurniture } from './Components/Header/Userfurniture/userfurniture';
import { Payment } from './Components/Header/Payments/payment';


function App() {
  return (
  <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Menu/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/usermobile' element={<UserMobile/>}/>
<Route path='/userfashion' element={<UserFashion/>}/>
<Route path='/userelectronics' element={<UserElectronics/>}/>
<Route path='/userfurniture' element={<UserFurniture/>}/>
<Route path='/payment' element={<Payment/>}/>
</Routes>
</BrowserRouter>
  </>
  );
}

export default App;
