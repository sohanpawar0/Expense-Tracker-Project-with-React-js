import React from 'react'
import AuthForm from '../Auth/AuthForm'
import { useContext ,useState } from 'react'
import { Routes, Route } from "react-router-dom";
import AuthContext from '../store/auth-context';


const HomePage = () => {
    const [forgotpass ,setforgotpass ] = useState(false)

  return (
    <>
        <AuthForm />
    </>
  )
}

export default HomePage