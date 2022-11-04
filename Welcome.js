import React from 'react'
import { useState } from 'react'
import Profilepage from './Profilepage'


const Welcome = () => {
    const [isclicked,setisclicked] =useState(false)

 const profilecompletehandler = () =>{
    setisclicked(true)
 }

  return (
    <>
            <div className='head'>
                  <div>Welcome To Expense Tracker</div>
                  <div>Your Profile is  64% COMPLETE <button onClick={profilecompletehandler}>Complete Now</button></div>
                  { isclicked && <Profilepage />}
            </div>
    </>
  )
}

export default Welcome