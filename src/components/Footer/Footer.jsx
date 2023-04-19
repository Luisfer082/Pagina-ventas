import React, { useContext } from 'react'
import './Footer.css'
import { UserContext } from '../../context/UserContet'


function Footer() {
  const {letra, setLetra} = useContext(UserContext)
  return (
    <>
    <footer className='site-footer'>
  <div className='container'>
    <div className='row'>
      <div className='col-sm-12 col-md-6'>
        <h6>Square Box</h6>
        {<p className='text-justify'>{letra} </p>}
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
    
  </div>
</footer>


    </>
  )
}

export default Footer