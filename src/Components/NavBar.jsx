import React, { Component } from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Contact from './Contact'
import { About } from './About'

function NavBar ()  {

  const navigate =useNavigate()
  return (
    
        <div className='nav'>
                    
                    <Link className='Contact' to="/Contact">Contact</Link>
                    <br>
                    </br>
                    <Link className='About' to="/About">About</Link>
                    
                </div>

  
  )
}

export default NavBar;

