import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuth}) => {


  const navigate = useNavigate()

  const spaceHome = (event)=>{
    event.preventDefault()
    setAuth(true)
    navigate('/')
  }

  return (
    <div style={{display:'flex', justifyContent:"center",alignItems:'center',height:'500px'}}>
    <div id='form'>
      <div style={{display:'flex', fontSize:'50px',fontWeight:'800' ,margin:"40px", justifyContent:'center',alignItems:'center', cursor:'pointer', color:'red'}}><img width={350} src='MEDIFLIX.svg'/></div>  
      <Form onSubmit={(event)=>spaceHome(event)} style={{width:'500px'}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{fontSize:'20px'}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" style={{fontSize:'20px'}}/>
        </Form.Group>
        <Button className='button' variant="danger" size="lg" type="submit" style={{float:'right'}}>
          Login
        </Button>
      </Form>
    </div>
  </div>
  )
}

export default Login