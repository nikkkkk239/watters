import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'

function Profile() {
  const {authUser} = useAuthStore();
  const [name ,setName] = useState(authUser.name);
  const [email ,setEmail] = useState(authUser.email);
  const [totalEnergy , setTotalEnergy] = useState(authUser.totalProduction)
  const [consumedEnergy , setConsumedEnergy] = useState(authUser.consumedEnergy)
  const [deviceId , setDeviceId] = useState(authUser.deviceNo)
  const [location , setLocation] = useState(authUser.location)
  const [limitOfSharing , setLimitOfSharing] = useState(authUser.limitOfSharing)

  return (
    <div className='w-full flex justify-center items-center min-h-[100vh]' >
    <div className='flex space-y-10 max-w-[500px] md:p-[20px] pt-0 flex-col w-full  justify-center items-center pb-[40px]'>
            <div>
              <h1 className='text-2xl md:text-3xl text-white' >Profile</h1>
            </div>
    
            <div className='flex flex-col space-y-5 items-center  w-full p-3'>
    
                <div className='flex flex-col space-y-1 w-full text-white'>
                  <label htmlFor="name" className='text-xl'>Full Name</label>
                  <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className='p-3 bg-[#33333369] text-white' name='name' id='name' placeholder='John Doe'/>
                </div>
                
                <div className='flex flex-col space-y-1  w-full text-white'>
                  <label htmlFor="email" className='text-xl'>Email</label>
                  <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='p-3 bg-[#33333369] text-white' name='email' id='email' placeholder='johndoe@gmail.com'/>
                </div>

                {authUser.role == "producer" && <div className='flex flex-col space-y-1  w-full text-white'>
                  <label htmlFor="email" className='text-xl'>Total Energy Production (KW)</label>
                  <input readOnly type="Number" value={totalEnergy}  className='p-3 bg-[#33333369] text-white' name='totalEnergy' id='totalEnergy' placeholder='Total Energy Produced'/>
                </div>}

                <div className='flex flex-col space-y-1  w-full text-white'>
                  <label htmlFor="email" className='text-xl'>Device ID</label>
                  <input type="text" value={deviceId} onChange={(e)=>setDeviceId(e.target.value)}  className='p-3 bg-[#33333369] text-white' name='deviceNo' id='deviceNo' placeholder='Enter your Device Id'/>
                </div>

                <div className='flex flex-col space-y-1  w-full text-white'>
                  <label htmlFor="address" className='text-xl'>Address</label>
                  <textarea rows={4} type="text" value={location} onChange={(e)=>setLocation(e.target.value)}  className='p-3 bg-[#33333369] text-white' name='address' id='address' placeholder='Enter your Address'/>
                </div>

                {authUser.role == "producer" && <div className='flex flex-col space-y-1  w-full text-white'>
                  <label htmlFor="email" className='text-xl'>Limit Of Sharing (KW)</label>
                  <input type="Number" value={limitOfSharing} onChange={(e)=>setLimitOfSharing(e.target.value)}  className='p-3 bg-[#33333369] text-white' name='totalEnergy' id='totalEnergy' placeholder='Limit Of Sharing' min={0}/>
                </div>}

                {authUser.role == "consumer" && <div className='flex flex-col space-y-1  w-full text-white'>
                  <label htmlFor="email" className='text-xl'>Energy Consumed</label>
                  <input readOnly type="Number" min={0} value={consumedEnergy}  className='p-3 bg-[#33333369] text-white' name='totalEnergy' id='totalEnergy' placeholder='Total Energy Consumed'/>
                </div>}

                <div className='flex flex-col space-y-1  w-full text-white'>
                <label htmlFor="email" className='text-xl'>Electricity Bill</label>
                <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 cursor-pointer shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                  file:bg-gray-50 file:border-0
                  file:me-4
                  file:py-3 file:px-4
                  dark:file:bg-neutral-700 dark:file:text-neutral-400"/>
              </div>

                <button className='md:w-[250px] hover:text-white hover:scale-105' style={{transition:"all 0.3s ease-out",background:'linear-gradient(45deg, #7CB9E8,#0066b2, #002D62)',padding:"5px 20px",borderRadius:"30px",cursor:"pointer",fontSize:"20px"}} >Update</button>
                
                
            </div>
            
    
          </div>
          </div>
  )
}

export default Profile