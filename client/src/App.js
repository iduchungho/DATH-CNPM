import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarTop, { NavbarBottom } from './component/Navbar'
import Home from './component/Home'
import PayComponent from './component/Pay';
import Tutorial from './component/Tutorial';
import { LoginPage, RegisterPage } from './component/Login'
import FoodForm from './component/uploadFood';
function App() {
  return (
    <>
      <Router>
        <NavbarTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/pay' element={<PayComponent />} />
          <Route path='/tutorial' element={<Tutorial />} />
          <Route path = '/uploadFood' element = {<FoodForm />}/>
        </Routes>
        <NavbarBottom/>
      </Router>
    </>
  );
}

export default App;
