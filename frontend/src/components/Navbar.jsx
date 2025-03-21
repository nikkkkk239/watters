import { MdOutlineLogout } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import React from 'react'
import { FiSearch } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { useAuthStore } from "../store/useAuthStore";

function Navbar() {
  const navigate = useNavigate();
  const {authUser , signout} = useAuthStore();
  const handleLogout = ()=>{
    signout();
  }
  return (
    <div className='w-full text-white flex justify-between items-center p-7 md:pl-28 md:pr-28' >
      <div className='text-xl md:text-[25px] cursor-pointer' style={{background:' linear-gradient(45deg, #7CB9E8,#0066b2, #002D62)' ,fontWeight : "600",backgroundClip: "text" , WebkitBackgroundClip:"text",color:"transparent"}} onClick={()=>navigate("/")}>
        Watters
      </div>
      <div className='flex items-center space-x-3 md:space-x-7.5'>
      <div className=' w-[40px] md:w-[100px] h-[40px] flex justify-center items-center hover:bg-white bg-[#333] text-white hover:text-black rounded-full md:text-[20px] cursor-pointer space-x-1 text-[18px]' title="Home" onClick={()=>navigate("/")}>
      <GoHomeFill/> <p className="hidden md:block">Home</p>
        </div>
        <div className=' w-[40px] md:w-[100px] h-[40px] flex justify-center items-center hover:bg-white bg-[#333] text-white hover:text-black rounded-full md:text-[20px] cursor-pointer space-x-1 text-[18px]' title='Search' onClick={()=>navigate("/search")}>
        <FiSearch/><p className="hidden md:block">Search</p>
        </div>
        
        <div className='  w-[40px] md:w-[100px] h-[40px] flex justify-center items-center hover:bg-white bg-[#333] text-white hover:text-black rounded-full md:text-[20px] cursor-pointer space-x-1 text-[18px]' onClick={()=>navigate("/profile")} title='Profile'>
        <FaUser /><p className="hidden md:block">Profile</p>
        </div>
        <div className='  w-[40px]  h-[40px] flex justify-center items-center hover:bg-white bg-[#333] text-white hover:text-black rounded-full md:text-[20px] cursor-pointer space-x-1 text-[18px]' onClick={handleLogout} title='Logout'>
        <MdOutlineLogout />
        </div>
      </div>
    </div>
  )
}

export default Navbar