import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { useAuthStore } from './store/useAuthStore'
import Dashboard from './components/Dashboard'
import {Toaster} from "react-hot-toast"
import Search from './pages/Search'
import Profile from './pages/Profile'


function App() {
  const {authUser,isCheckingAuth , checkAuth} = useAuthStore();  
  useEffect(()=>{
    checkAuth();
  },[checkAuth])
  if(isCheckingAuth) return <div class="h-[100vh] flex flex-col border shadow-2xs  bg-black">
  <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
    <div class="flex justify-center">
      <div class="animate-spin inline-block size-6 border-3 border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</div>
  return (
    <>
      <Routes>

        <Route path='/signin' element={authUser ? <Navigate to={"/"}/> : <Signin/>}/>
        <Route path='/signup' element={authUser ? <Navigate to={"/"}/> : <Signup/>}/>
        <Route path='/' element={!authUser ? <Navigate to={"/signin"}/> : <Home/>}>
          <Route path='/' element={!authUser ? <Navigate to={"/signin"}/> : <Dashboard/>}/>
          <Route path='/search' element={!authUser ? <Navigate to={"/signin"}/> : <Search/>}/>
          <Route path='/profile' element={!authUser ? <Navigate to={"/signin"}/> : <Profile/>}/>
        </Route>
        
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
