import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Container } from "react-bootstrap";


export default function Dashboard() {

  const navigate = useNavigate()
  

  function handleLogout() {
    //logica de como cerrar sesion
    localStorage.clear()
    navigate('/usuario')
  }

  return (
    <>
      <Container className="d-flex aling-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Perfil</h2>
          <strong>Correo electrónico:</strong> {localStorage.getItem('email')}
        </Card.Body>


      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout}>Cerrar Sesión</Button>
      </div>
      </div>
      </Container>
      

    </>
  )
}