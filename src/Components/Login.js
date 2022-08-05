import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import MainPage from './MainPage';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"
import { addDoc, collection } from 'firebase/firestore';
import { db } from "./firebase"
// import {useNavigate} from 'react-router-dom' 

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  //navigate
  const navigate = useNavigate()
  const Login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const userp = userCredential.user;
        console.log("you welcome")
        // ...
        const userlog = collection(db, "logged")
        const user = {
          email: email,
          password: password,

        }
        addDoc(userlog, user).then(() => {
          navigate('/main')
        }).catch((error) => {
          console.log("not logged")
        })

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
      });






    return '/main'
  }
  return (



    <div className="full-login-page">
      <h1>Login.</h1>
      <div className='login-form'>
        <input type="email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />

        <br>
        </br>
        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <br>
        </br>

        <div className="btnlog">
          <button onClick={(e) => { Login() }} className="log-sub">Submit</button>

          {/* <Link className='log-sub' to="/main">Submit</Link>  */}

        </div>
        <div className='link'>
          <Link className='link2' to="/signin">signup...</Link>

        </div>

      </div>
    </div>
  )
}

export default Login;
