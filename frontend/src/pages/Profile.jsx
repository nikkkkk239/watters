import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'

function Profile() {
  const {authUser} = useAuthStore();
  const [name ,setName] = useState("");
  const [email ,setEmail] = useState("");

  return (
    <div className='w-full flex justify-center items-center'>
    <div className='flex space-y-10 max-w-[500px] md:p-[20px] flex-col w-full  justify-center items-center'>
            <div>
              <h1 className='text-2xl md:text-3xl text-white' >Profile</h1>
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
                
                
            </div>
            
    
          </div>
          </div>
  )
}

export default Profile