import React from 'react'
import './Home2.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Home2() {
  return (
      <div className='homeContent'>
          <div className='homeDiv colorDiv1'></div>
          <div className='homeDiv colorDiv2'></div>
          <div className='homeDiv colorDiv3'></div>
          <div className='homeDiv colorDiv4'></div>
          <div className='homeTex'>
            <h4>Te gusta el arte</h4> 
            <h5>Genial, mira nuestra coleccion de cuadros</h5>
            <Link to='/catalogo'><button className='button type3'>Colección</button> </Link>
            </div>
      </div>
      )
    }
    
    export default Home2


    {/* <motion.div 
    className='homePages'
    animate={{
     scale: [1, 2, 2, 1, 1],
     rotate:[0, 0, 270, 270, 0],
     borderRadius:["20%", "20%", "0%", "50%", "20%"],
    }} 
    /> */}