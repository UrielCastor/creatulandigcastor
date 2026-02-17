import './App.css'
import { Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Navbar } from './components/navbar/index.jsx';
import { Contact } from './pages/Contact/Contact';
import { ListaProductos } from './pages/Products/Products.jsx';
import {Product} from './pages/Products/Product.jsx';
import {Cat} from './pages/Products/Categoria.jsx';
import { Home } from './home.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import {Cart} from './pages/Cart/Cart.jsx';




function App() {

  return (
    <>
   
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Products" element={<ListaProductos />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product/:id" element={<Product />} />
        <Route path="/Categoria/:cat" element={<Cat />} />
        <Route path="/Cart" element={<Cart />} />
     </Routes>
     <br></br>
 
         <Footer/>
    </>

  )
}

export default App; 