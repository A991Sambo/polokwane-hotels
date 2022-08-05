// import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import React, { Component, useState } from 'react'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"
import { db } from "./firebase"
import { addDoc, collection } from "firebase/firestore"





//function
function Book () {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setemail] = useState("")
  const [room, setRoom] = useState("")
  const [amount, setAmount] = useState("")
  const [numbers, setNumbers] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [date2, setDate2] = useState("")
  const [time2, setTime2] = useState("")
  const [password, setPassword] = useState("")
 
  const navigate = useNavigate()

 const Book = () => {

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const userD = userCredential.user; 
    console.log("booked")

    const hotels = collection(db,"bookings")
    const user = {
         booo
//         password:password
// ,        name: name,
//         surname: surname,
//         email: email,
//         room: room,
//         amount: amount,
//         numbers: numbers,
//         date: date,
//         time: time,
//         date2: time,

    }
    addDoc(hotels,user).then(()=>{
      navigate('/main')
    }).catch((error)=>{
      console.log("not booked")
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




  // console.log ("Book")



  return (

    <div className=" full-book-page">

      <h1>Book Hotel.</h1>
      <div className='book-form'>
        <input  type="text" placeholder='Name'onChange={(e)=>{setName(e.target.value)}}/>
        <br>
        </br>
        <input type="text" placeholder='Surname'onChange={(e)=>{setSurname(e.target.value)}} />
        <br>
        </br>
        <input type="email" placeholder='Email Address' onChange ={(e)=>{ setemail(e.target.value)}} />
        <br>
        </br>
        <input type="Room" placeholder='Room Type' onChange={(e)=>{setRoom(e.target.value)}} />
        <br></br>
        <input  type="Amount" placeholder='Enter Amount' onChange={(e)=>{setAmount(e.target.value)}} />
        <br>
        </br>
        <input type="numbers" placeholder='Enter number of guests' onChange={(e)=>{setNumbers(e.target.value)}} />
        <br>
        </br>
        <h3>Date & Time of arraival</h3>
        <input type="date" placeholder='Date of arrival' onChange={(e)=>{setDate(e.target.value)}}/>
        <br></br>
        <input type="time" placeholder='Time of arrival' onChange={(e)=>{setTime(e.target.value)}} />
        <br>
        </br>
        <h3>Date & Time of departure</h3>
        <input type="date" placeholder='Date of departure' onChange={(e)=>{setDate2(e.target.value)}}  />
        <br></br>
        <input type="time" placeholder='Time of departure' onChange={(e)=>{setTime2(e.target.value)}}  />
        <br>
        </br>
      </div>

      <div className="sign-out-div">  
          <button onClick={()=>{
                  navigate('/main')
          }} className='Signup-but2'>Submit</button>
      </div>

    </div>

  );
}


export default Book;
