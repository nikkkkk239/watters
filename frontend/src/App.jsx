import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { useAuthStore } from './store/useAuthStore'
import {Toaster} from "react-hot-toast"
import Search from './pages/Search'
import Profile from './pages/Profile'


function App() {
  const {authUser,isCheckingAuth , checkAuth} = useAuthStore();  
  useEffect(()=>{
    checkAuth();
  },[checkAuth])
  if(isCheckingAuth) return <div>Loading.....</div>
  return (
    <>
      <Routes>

        <Route path='/signin' element={authUser ? <Navigate to={"/"}/> : <Signin/>}/>
        <Route path='/signup' element={authUser ? <Navigate to={"/"}/> : <Signup/>}/>
        <Route path='/' element={!authUser ? <Navigate to={"/signin"}/> : <Home/>}>
          <Route path='/search' element={!authUser ? <Navigate to={"/signin"}/> : <Search/>}/>
          <Route path='/profile' element={!authUser ? <Navigate to={"/signin"}/> : <Profile/>}/>
        </Route>
        
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
