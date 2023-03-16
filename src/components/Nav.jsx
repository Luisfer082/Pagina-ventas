import React from 'react'
import './Nav.css'
import 'boxicons'

function Nav() {
  return (
    <header className='header'>
    <div className='container'>
    <div className='btn-menu'>
    <box-icon name='list-ul'color='black' size='50px' ></box-icon>
    </div>
    
        <div className='logo'>
            <h1>TODO CUADRO</h1>
        </div>
        <nav className='menu'>
            <a href="#">Catalogo</a>
            <a href="#">Usuario</a>
            <box-icon name='cart' color='white'></box-icon>
        </nav>
    </div>
</header>

  )
}

export default Nav