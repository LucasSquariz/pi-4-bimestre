import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/home.js';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Registro from '../pages/Registro/registro.js';

const RouteList = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/home" element={<Home />} />  
            <Route path="/login" element={<Login />} />   
            <Route path="/registrar" element={<Registro />} />   
        </Routes>
        <Footer />
    </BrowserRouter>
) 

export default RouteList;