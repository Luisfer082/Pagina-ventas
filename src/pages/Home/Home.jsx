import React from 'react'
import './Home.css'
import Home2 from './Home2'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div>
      <div  className='contentHeader'>
      <motion.div
      className='title'
      transition={{duration: 4}}
      animate={{
      scale: [15, 22, 12, 5, 10],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  />
         
        
        {/* <div className='title'>
          <h1>Square Box</h1>
        </div> */}
        


       <div className='logosRedes'>
         <box-icon type='logo' name='facebook' size='30px' color='white'></box-icon>
         <box-icon name='instagram' type='logo' size='30px'  color='white'></box-icon>
         <box-icon name='youtube' type='logo' size='30px'  color='white' ></box-icon>
       </div>
    </div>
    
       <Home2 />
    </div>
  )
}

export default Home