import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'




//function
const Book = () => {


const navigate = useNavigate()


  return (

    <div className=" full-book-page">

      <h1>Book Hotel.</h1>
      <div className='book-form'>
        <input type="text" placeholder='Name'></input>
        <br>
        </br>
        <input type="text" placeholder='Surname'></input>
        <br>
        </br>
        <input type="email" placeholder='Email Address'></input>
        <br>
        </br>
        <input type="Roon Type" placeholder='Room Type'></input>
        <br></br>
        <input R type="number" placeholder='Enter Amount'></input>
        <br>
        </br>
        <input type="numbers"R placeholder='Enter number of guests'></input>
        <br>
        </br>
        <h3>Date & Time of arraival</h3>
        <input type="date" placeholder='Date of arrival'></input>
        <br></br>
        <input type="time" placeholder='Time of arrival'></input>
        <br>
        </br>
        <h3>Date & Time of departure</h3>
        <input type="date" placeholder='Date of departure'></input>
        <br></br>
        <input type="time" placeholder='Time of departure'></input>
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
