import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import { useAuthStore } from '../store/useAuthStore';
import toast from 'react-hot-toast';

function Signin() {
  const navigate = useNavigate();
  const {signin} = useAuthStore();
  const [isPassShown , setIsPassShown ] = useState(false);
  const [password , setPassword ] = useState("");
  const [email , setEmail] = useState("");
  const handleSignIn = async()=>{
    if(email.length == 0){
      toast.error("Email is required.")
      return;
    }
    if(password.length == 0){
      toast.error("Password is required.")
      return;
    }
    await signin({email , password})
  }

  return (
    <div className='flex flex-col md:flex-row  bg-black text-white h-[100vh] items-center space-y-20'>
      <div className='relative md:h-[100vh] md:max-h-[100%] max-h-[200px] w-full md:w-[50%] overflow-hidden flex items-center justify-center'>
      <DotLottieReact
      src="https://lottie.host/6af6e600-bec3-482a-ab12-81d2242ba77e/UELxFIJAQV.lottie"
      loop
      autoplay
      className='object-contain min-h-[400px] md:h-[450px]  md:max-h-[full] w-full h-full max-w-[370px] md:min-w-[450px] md:max-w-[full]'
    />

        <p className='absolute bottom-1 md:top-[600px]  w-full text-center' style={{textShadow : "1px 1px 2px #7CB9E8"}}>Revolutionize the way you consume and share energy</p>
      </div>
      <div className='flex space-y-10 md:w-[50%] md:max-w-full md:p-[20px] flex-col w-full max-w-[500px] items-center'>
        <div>
          <h1 className='text-2xl md:text-3xl' style={{background:'linear-gradient(45deg, #7CB9E8,#0066b2, #002D62)' ,fontWeight : "600",backgroundClip: "text" , WebkitBackgroundClip:"text",color:"transparent"}}>Welcome again.</h1>
        </div>

        <div className='flex flex-col space-y-5 items-center  w-full p-3'>
            <div className='flex flex-col space-y-1  w-full'>
              <label htmlFor="email" className='text-xl'>Email</label>
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='p-3 bg-[#33333369]' name='email' id='email' placeholder='johndoe@gmail.com'/>
            </div>
            <div className='flex flex-col relative space-y-1  w-full'>
              <label htmlFor="password" className='text-xl'>Password</label>
              <input type={isPassShown ? "text" :"password"} value={password} onChange={(e)=>setPassword(e.target.value)} className='p-3 bg-[#33333369]' name='password' id='password' placeholder='******'/>
              <div className='text-white absolute top-12 text-xl cursor-pointer right-3' onClick={()=>setIsPassShown(!isPassShown)}>{isPassShown ? <LuEye/> : <LuEyeClosed/>}</div>
            </div>
        </div>
        <div className='flex flex-col items-center space-y-2'>
        <button className='md:w-[250px]' style={{background:'linear-gradient(45deg, #7CB9E8,#0066b2, #002D62)',padding:"5px 20px",borderRadius:"30px",cursor:"pointer",fontSize:"20px"}} onClick={handleSignIn}>Sign In</button>
          <p>Already have an account ? <span className='text-[#0066b2] cursor-pointer' onClick={()=>navigate("/signup")}>SignUp</span></p>
          
        </div>

      </div>
    </div>
  )
}

export default Signin