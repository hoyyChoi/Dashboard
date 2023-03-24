import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"
import { useNavigate } from 'react-router-dom';
import "../css/login.css"
import axios from 'axios'
import { postLogin, getLogin, postLoginUser } from "../remote/server.js";

const Login = ({setAuth}) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const [username,setEmail] = useState('')
    const [password,setPw] = useState('')

       //실험용 data
       const data = [
        {
            userEmail: "mshin0905@naver.com",
            password: "pass1"
        },
    ];

    const errors = {
        uemail : "invalid userEmail",
        pass : "invalid Password"
    };





    const handleSubmit = (event) => {
        event.preventDefault();
        // setAuth(true)
        // navigate('/')
        var {uemail, pass} = document.forms[0];
        //UserAPI 
        const userData = data.find((user) => user.userEmail === uemail.value);

        postLoginUser({username,password})
        .then(res=>{
            localStorage.setItem("accessToken",res.data.accessToken)
            console.log(localStorage.getItem("accessToken"))
            setAuth(true)
            navigate('/')
        }).catch(err=>console.log(err))

        // if (userData) {
        //     if(userData.password !== pass.value) {
        //         //Invalid Pw
        //         setErrorMessages({ name: "pass", message: errors.pass});
        //     } else {
        //         console.log("pass login");
        //         setIsSubmitted(true)
        //         setAuth(true)
        //         navigate('/')
        //     }
        // } else {
        //     //User Not Found
        //     setErrorMessages({ name: "uemail", message: errors.uemail});
        // }
    };
    //JSX Code for Message 
    const renderErrorMessage = (name) => 
    name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
    );

    //JSX Code for Login form 
    const renderForm = (
        
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email Address </label>
                    <input type="text" name="uemail" onChange={e=>setEmail(e.target.value)} required/>
                    {renderErrorMessage("uemail")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass"  onChange={e=>setPw(e.target.value)} required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="Submit" value="Log In"/>
                </div>
            </form>
        </div>
    );



    

    return (
        <div className="login">
            <div className="login-form">
            <div style={{display:'flex', fontSize:'50px',fontWeight:'800' ,margin:"40px", justifyContent:'center',alignItems:'center', cursor:'pointer', color:'red'}}><img width={350} src='MEDIFLIX.svg'/></div>  
                {isSubmitted ? <div>User is Successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default Login;


