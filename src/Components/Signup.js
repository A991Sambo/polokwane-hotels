import React, { Component, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"
import { db } from "./firebase"
import { addDoc, collection } from "firebase/firestore"


function Signup() {
   const [name, setName] = useState("")
   const [surname, setSurname] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const navigate = useNavigate()


    const register = () => {
      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const userD = userCredential.user; 
    console.log("registered")

    const userRef = collection(db,"users")
    const user = {
        name: name,
        surname: surname,

    }
    addDoc(userRef,user).then(()=>{
      navigate('/main')
    }).catch((error)=>{
      console.log("not added")
    })

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)

    // ..
  });

      
    }


      

    return (
      <div className="full-page-signin">



             <h1>Signup.</h1>
          <div className='Signup-form'>   
             <input type="text" name="name " placeholder='Name' onChange={(e)=>setName(e.target.value)} />
              
                <br>
                </br>
                <input type="text"  placeholder='Surname' onChange = {(e)=>setSurname(e.target.value)} />
                <br>
                </br>
              <input type="email"  placeholder='Email Address' onChange = {(e)=>setEmail(e.target.value)} />
                <br>
                </br>
              <input type="password" placeholder='Password'  onChange ={(e)=>setPassword(e.target.value)} />
                <br>
                </br>

                              
              <div className="sign-btn"> 
              <button onClick={(e)=>{register()}} className='Signup-but'>Submit</button>
              </div>
            </div>
      </div>
    )
  }

export default Signup;
