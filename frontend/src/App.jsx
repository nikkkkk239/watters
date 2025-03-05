import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { useAuthStore } from './store/useAuthStore'
import Toaster from "react-hot-toast"

function App() {
  const {authUser} = useAuthStore();  
  return (
    <>
      <Routes>

        <Route path='/signin' element={authUser ? <Navigate to={"/"}/> : <Signin/>}/>
        <Route path='/signup' element={authUser ? <Navigate to={"/"}/> : <Signup/>}/>
        <Route path='/' element={!authUser ? <Navigate to={"/signin"}/> : <Home/>}/>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
