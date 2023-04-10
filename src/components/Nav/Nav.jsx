import React from 'react'
import './Nav.css'
import 'boxicons'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <header className='header'>
    <div className='container'>
    <div className='btn-menu'>
    <box-icon name='list-ul'color='white' size='50px' ></box-icon>
    </div>
    
        <div className='logo'>
            <h1>Square Box</h1>
        </div>
        <nav className='menu'>
            <a><Link to='/'>Home</Link></a>
            <a><Link to='/catalogo'>Catalogo</Link></a>
            <a><Link to='/usuario'>Usuario</Link> </a>
            <Link to=''><box-icon name='cart' color='white'></box-icon></Link>
        </nav>
    </div>
</header>

  )
}

export default Nav