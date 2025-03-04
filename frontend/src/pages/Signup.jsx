import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";



function Signup() {
  const navigate = useNavigate();
  const [email , setEmail ] = useState("");
  const [password , setPassword ] = useState("");
  const [name , setName ] = useState("");
  const [role , setRole ] = useState("producer");
  const [isPassShown , setIsPassShown] = useState(false);
  const handleSignUp = ()=>{
    
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
          <h1 className='text-2xl md:text-3xl' style={{background:'linear-gradient(45deg, #7CB9E8,#0066b2, #002D62)' ,fontWeight : "600",backgroundClip: "text" , WebkitBackgroundClip:"text",color:"transparent"}}>Create An Account</h1>
        </div>

        <div className='flex flex-col space-y-5 items-center  w-full p-3'>

            <div className='flex flex-col space-y-1 w-full'>
              <label htmlFor="name" className='text-xl'>Full Name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className='p-3 bg-[#33333369]' name='name' id='name' placeholder='John Doe'/>
            </div>
            
            <div className='flex flex-col space-y-1  w-full'>
              <label htmlFor="email" className='text-xl'>Email</label>
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='p-3 bg-[#33333369]' name='email' id='email' placeholder='johndoe@gmail.com'/>
            </div>
            <div className='flex flex-col relative space-y-1  w-full'>
              <label htmlFor="password" className='text-xl'>Password</label>
              <input type={isPassShown ? "text" :"password"} value={password} onChange={(e)=>setPassword(e.target.value)} className='p-3 bg-[#33333369]' name='password' id='password' placeholder='******'/>
              <div className='text-white absolute top-12 text-xl cursor-pointer right-3' onClick={()=>setIsPassShown(!isPassShown)}>{isPassShown ? <LuEye/> : <LuEyeClosed/>}</div>
            </div>
            <div className='flex flex-col space-y-1 text-xl w-full'>
              <label htmlFor="">What is your role ? </label>
              <label htmlFor="underline_select" className="sr-only">Underline select</label>
              <select id="underline_select" className="block py-2.5 px-0 w-full text-xl text-gray-500 bg-transparent  border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">

                <option selected  value="US" className='text-sm' onClick={()=>setRole("producer")}>Producer</option>
                <option value="CA" onClick={()=>setRole("consumer")} className='text-sm'>Consumer</option>
              </select>
            </div>
        </div>
        <div className='flex flex-col items-center space-y-2'>
        <button className='md:w-[250px]' style={{background:'linear-gradient(45deg, #7CB9E8,#0066b2, #002D62)',padding:"5px 20px",borderRadius:"30px",cursor:"pointer",fontSize:"20px"}} onClick={()=>handleSignUp()}>Sign Up</button>
          <p>Already have an account ? <span className='text-[#0066b2] cursor-pointer' onClick={()=>navigate("/signin")}>SignIn</span></p>
          
        </div>

      </div>
    </div>
  )
}

export default Signup