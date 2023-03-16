import './App.css';
import Home from './pages/Home/Home';
import Carrito from './pages/Carrito';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/carrito' element={<Carrito />} />
       </Routes>
     
      
  );
}


      // <Routes>
      //   <Route path='/' elemento={<Home />} />
      //   <Route path='Carrito' elemento={<Carrito />} />
      // </Routes>

export default App;