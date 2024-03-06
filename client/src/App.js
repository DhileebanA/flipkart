import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Header/Navbar/navbar';
import { Signup } from './Components/Header/Signup/signup';
import { Login } from './Components/Header/Login/login';

function App() {
  return (
  <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Navbar/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/login' element={<Login/>}/>
</Routes>
</BrowserRouter>
  </>
  );
}

export default App;
