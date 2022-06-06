import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Register from './Components/Register';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import About from './Components/About';
import Profile from './Components/Profile';

import {BrowserRouter as  Router, Routes , Route } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Navbar sticky="top" />
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/login" element={<Login/>} />
        <Route path = "/register" element={<Register/>} />
        <Route path = "/pricing" element={<Pricing/>} />
        <Route path = "/services" element={<Services/>} />
        <Route path = "/about" element={<About/>} />
        <Route path = "/profile" element={<Profile/>} />

      </Routes>
    </Router>
  );
}

export default App;
