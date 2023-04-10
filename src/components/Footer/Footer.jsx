import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <>
    <footer className='site-footer'>
  <div className='container'>
    <div className='row'>
      <div className='col-sm-12 col-md-6'>
        <h6>Square Box</h6>
        <p className='text-justify'>La mejor tienda de cuadros, vuelve proto a revisar el catalogo, simpre tendras cosas nuevas que te pueden interesar. </p>
      </div>

      <div className='col-xs-6 col-md-3'>
        <h6>Categories</h6>
        <ul className='footer-links'>
          <li><a href='#'>C</a></li>
          <li><a href='#'>UI Design</a></li>
          <li><a href='#'>Java</a></li>
        </ul>
      </div>

      <div className='col-xs-6 col-md-3'>
        <h6>Quick Links</h6>
        <ul className='footer-links'>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>Contact Us</a></li>
          <li><a href='#'>Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className='container'>
    <div className='row'>
      <div className='col-md-4 col-sm-6 col-xs-12'>
        <ul className='social-icons'>
          <box-icon type='logo' name='facebook' size='30px' color='white'></box-icon>
         <box-icon name='instagram' type='logo' size='30px'  color='white'></box-icon>
         <box-icon name='youtube' type='logo' size='30px'  color='white' ></box-icon>
        </ul>
      </div>
    </div>
  </div>
</footer>


    </>
  )
}

export default Footer