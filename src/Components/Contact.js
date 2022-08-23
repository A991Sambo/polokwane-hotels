import React from 'react'

const Contact = () => {
  return (
  
      <div className='cons2'>
        Contact us.
        {/* <h3>Please fill this form in a decent maner</h3> */}
        {/*  */}
      

      <div className='cont-form' >

        <input type="text" name="name" placeholder='full Names'></input>
        <br>
        </br>
        <input type="phoneNUMBER"  placeholder='Enter Phone Number'></input>
        <br>
        </br>
        <input type="text" email="eamil" placeholder='Email Address'></input>
        <br>
        </br>
        <input className='messege' type="messege" messege="Messege" placeholder='Messege us'></input>
        <br>
        </br>
        <button className='contact-btn'>Submit</button>
      </div>

        </div>










    

  )
}

export default Contact
