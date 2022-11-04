import React ,{ useRef ,useState } from 'react'
import { useContext } from 'react'
import AuthContext from '../store/auth-context'


const Profilepage = () => {
    const ctx= useContext(AuthContext)
   
    const nameref =useRef()
    const photoref =useRef()

    const enteredname=nameref.current.value;
    const enteredphoto=photoref.current.value;

    const updatehandler =()=>{
        fetch(` https://identitytoolkit.googleapis.com/v1/accounts:update?key=
        AIzaSyDJzFGMehDL_Sv8YBjxCcs1Ox2VjgMBPG4`, {
          method: 'POST',
                body: JSON.stringify({
                  name: enteredname,
                  photourl: enteredphoto,
                  idToken:ctx.token,
                  returnSecureToken: true,
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then ( res => console.log(res))
    console.log(enteredname);
    console.log(enteredphoto);
    }

  return (
    <>
    <div>
        <ul>
            <h1>Complete Profile</h1>
            <li>Full Name</li><li><input type="text" ref={nameref}/></li>
            <li>Photo Url</li><li><input type="text" ref={photoref}/></li>
        </ul>
        <button onClick={updatehandler}>Update</button>
    </div>
    </>
  )
}

export default Profilepage