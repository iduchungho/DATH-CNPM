import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarTop from './component/Navbar/NavbarTop'
import Home from './pages/Home'

function App() {
  return (
    <>
    <Router>
      <NavbarTop/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
