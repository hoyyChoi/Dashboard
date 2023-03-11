import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const Login = ({setAuth}) => {

  const realEmail = "abcd@naver.com";
  const realPw = "12345";

  let [email, setEmail] = useState('');
  let [pw, setPw] = useState(''); //초기값 공백 

  const navigate = useNavigate();

  const [button, setButton] = useState(true);
  function changeButton() {
      email.includes('@') && pw.length >= 4 ? setButton(false) :setButton(true);
  } //btn disable 해제 조건 

  const spaceHome = (event)=>{
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
          <Form.Control type="email" placeholder="Enter email" style={{fontSize:'20px'}}
          onChange={ e => {
            setEmail(e.target.value); 
          }}
          onKeyUp = {changeButton}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" style={{fontSize:'20px'}}
          onChange={ e => {
            setPw(e.target.value);
          }}
          onKeyUp = {changeButton}
          />
        </Form.Group>

        <Button className="loginButton" variant="danger" type="button" disabled = {button}
        onClick={e => {
          if (realEmail === email)
          {
            if (realPw === pw) {
              e.preventDefault();
              spaceHome();
            }
          }
          else {
            alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
          }
        }}
        size="lg" style={{float:'right'}}>
          Login
        </Button>

      </Form>
    </div>
  </div>
  )
}

export default Login