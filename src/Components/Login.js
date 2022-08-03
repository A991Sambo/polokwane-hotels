import React, { useState } from 'react'
import { Link} from "react-router-dom";
import MainPage from './MainPage';

const Login = () => {

    const [email, setEmail] = useState ('');
    const [password, setPassword] =useState("");
    const login =() =>{
        return'/main'
    }
    return (
       

        
        <div className="full-login-page">
            <h1>Login.</h1>
            <div className='login-form'>   
            <input type="email" placeholder='Email Address'>
            </input>
            <br>
            </br>
            <input type="password"  placeholder='Password'></input>
            <br>
            </br>

            <div className="btnlog"> 
            
            <Link className='log-sub' to="/main">Submit</Link>
            
            </div>
            <div className='link'>
            <Link className='link2' to="/signin">signup...</Link>
            
            </div>

            </div>
        </div>
    )
}

export default Login;
