import React from 'react'
import Navbar from './Navbar'

const SeConnecter = () => {
  return (
    <div>
    <Navbar />
  <div className='box-home'>
  <div className='partie-text'>
  <h1>Time to login</h1>
  <div className='box-form'>
  <div className='box-input'>
  <label> First Name: </label><input type='text' placeholder=' First name'/></div>
  <div className='box-input'>
  <label>Last name: </label><input type='text' placeholder='Last name'/></div>
  <div className='box-input'>
  <label>E-mail Adress: </label><input type='text' placeholder='E-mail Adress'/></div>
  <div className='box-input'>
  <label>Number Phone: </label><input type='text' placeholder='Number Phone'/></div>
  <div className='box-input'>
  <label>Password: </label><input type='text' placeholder='Password'/></div>
  <button className='btn-reserver'>Book</button>
  </div>
  </div>
 
    <img src='./images/image-removebg-preview.png' className='box-imgconnecté'/>
    </div>
    </div>
  )
}

export default SeConnecter
