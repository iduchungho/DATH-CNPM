import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarTop from './component/Navbar'
import Home from './component/Home'
import {LoginPage, RegisterPage}  from './component/Login'

function App() {
  return (
    <>
    <Router>
      <NavbarTop/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<LoginPage/>}/>
        <Route path='/register' element = {<RegisterPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
