import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Carrito from './pages/Carrito/Carrito';
import Nav from './components/Nav/Nav';
import Usuario from './pages/Usuario/Usuario'
import Catalogo from './pages/Catalogo/Catalogo'
import Footer from './components/Footer/Footer';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Singup from './pages/Usuario/Singup';
import Dashboard from './pages/Usuario/Dashboard';
import { UserProvider } from './context/UserContet';


function App() {
  return (
    <UserProvider>
    <BrowserRouter>
    <Nav></Nav>
      <Routes>
        <Route path='/Proyecto5-cuadros/' element={<Home />} />
         <Route path='/carrito' element={<Carrito />} />
         <Route path='/usuario' element={<Usuario />} />
         <Route path='/catalogo' element={<Catalogo />} />
         <Route path='/Singup' element={<Singup />} />
         <Route path='/Dashboard' element={<Dashboard />} />
       </Routes>
       <Footer></Footer>
     </BrowserRouter>
    </UserProvider>
      
  );
}


      // <Routes>
      //   <Route path='/' elemento={<Home />} />
      //   <Route path='Carrito' elemento={<Carrito />} />
      // </Routes>

export default App;