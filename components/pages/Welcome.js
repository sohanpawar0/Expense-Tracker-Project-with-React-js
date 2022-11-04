import React, { useContext } from 'react'
import { useState } from 'react'
import Profilepage from './Profilepage'
import AuthContext from '../store/auth-context'
import {Routes ,Route} from 'react-router-dom'
import HomePage from './Homepage'

const Welcome = () => {
    const authctx =useContext(AuthContext);

    const [isclicked,setisclicked] =useState(false);
    const [islogout,setislogout] =useState(false);


 const profilecompletehandler = () =>{
    setisclicked(true)
 }

 const verifyemail = () =>{
    // setisclickedverify(true)

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=
    AIzaSyDJzFGMehDL_Sv8YBjxCcs1Ox2VjgMBPG4`
    ,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: authctx.token,
          requestType:"VERIFY_EMAIL"
        }),
    }).then(res => console.log(res))
 }

 const logout = () =>{
    setislogout(true);
    authctx.token=""
 }



  return (
    <>
                  <Routes>
                    { islogout && <Route path="/" element={<HomePage />} /> }

                  </Routes>

                 { !islogout && 
                      <div className='head'>
                  <div>Welcome To Expense Tracker</div>
                  <button onClick={logout}>Logout</button>
                  <div>Your Profile is  64% COMPLETE <button onClick={profilecompletehandler}>Complete Now</button></div>
                  { isclicked && <Profilepage />}
                   <div><button onClick={verifyemail}>Verify Email</button></div>
                  </div>
                  }
    </>
  )
}

export default Welcome