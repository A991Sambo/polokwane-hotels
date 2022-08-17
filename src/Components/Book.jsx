// import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebase"







//function
function Book () {
  // const [name, setName] = useState("")
  // const [surname, setSurname] = useState("")
  // const [email, setemail] = useState("")
  const [room, setRoom] = useState("")
  const [amount, setAmount] = useState("")
  const [numbers, setNumbers] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [date2, setDate2] = useState("")
  const [password, setPassword] = useState("")

  const [time2, setTime2] = useState("")
  const navigate = useNavigate()

 

  const hotelsRef = collection(db,"hotels")
  const hotels = {
      // name: name,
      // surname: surname,
      room:room,
      amount:amount,
      numbers:numbers,
      date:date,
      time:time,
      date2:date2,
      time:time2,

  }

  const  booking = async()=>{
  addDoc(hotelsRef,hotels).then(()=>{
    navigate('/main')
  }).then(()=>{
    alert('booked')
  })

}

  return (

    <div className=" full-book-page">

      <h1>Book Hotel.</h1>
      <div className='book-form'>
        {/* <input  type="text"  name="name "   placeholder='Name'onChange={(e)=>{setName(e.target.value)}}/> */}
        <br>
        </br>
        {/* <input type="text" placeholder='Surname'onChange={(e)=>{setSurname(e.target.value)}} /> */}
        <br>
        </br>
        {/* <input type="email" placeholder='Email Address' onChange ={(e)=>{ setemail(e.target.value)}} /> */}
        <br>
        </br>
        {/* <input type="Room" placeholder='Room Type' onChange={(e)=>{setRoom(e.target.value)}} /> */}
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
      <button onClick={booking} className='Signup-but'>Submit</button>
      </div>

    </div>

  );
}


export default Book
