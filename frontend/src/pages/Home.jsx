import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import toast from 'react-hot-toast'

function Home() {

  return (
    <div className='bg-black '>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Home