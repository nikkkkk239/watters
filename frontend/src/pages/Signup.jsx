import React from 'react'


function Signup() {
  return (
    <div className='flex flex-col md:flex-row  bg-black text-white h-[100vh] items-center space-y-20'>
      <div className='relative md:h-[100vh] md:max-h-[100%] max-h-[200px] w-full md:w-[50%] overflow-hidden'>
        <img src="cover.jpeg" className='h-full w-full object-cover' alt="" />
        <p className='absolute bottom-1  w-full text-center' style={{textShadow : "2px 2px 5px #7CB9E8"}}>Revolutionize the way you consume and share energy</p>
      </div>
      <div className='flex space-y-10 md:w-[50%] md:max-w-full md:p-[20px] flex-col w-full max-w-[500px] items-center'>
        <div>
          <h1 className='text-2xl ' style={{background:'linear-gradient(45deg, #7CB9E8,#0066b2, #002D62)' ,fontWeight : "600",backgroundClip: "text" , WebkitBackgroundClip:"text",color:"transparent"}}>Create An Account</h1>
        </div>

        <div className='flex flex-col space-y-3 items-center  w-full p-3'>
            <div className='flex flex-col space-y-1 w-full'>
              <label htmlFor="name" className='text-xl'>Full Name</label>
              <input type="text" className='p-3 bg-[#33333369]' name='name' id='name' placeholder='John Doe'/>
            </div>
            <div className='flex flex-col space-y-1  w-full'>
              <label htmlFor="email" className='text-xl'>Email</label>
              <input type="text" className='p-3 bg-[#33333369]' name='email' id='email' placeholder='johndoe@gmail.com'/>
            </div>
            <div className='flex flex-col space-y-1  w-full'>
              <label htmlFor="password" className='text-xl'>Password</label>
              <input type="password" className='p-3 bg-[#33333369]' name='password' id='password' placeholder='******'/>
            </div>
        </div>
        <div>
          <button className='' style={{background:'linear-gradient(45deg, #7CB9E8,#0066b2, #002D62)',padding:"5px 20px",borderRadius:"5px",cursor:"pointer",fontSize:"20px"}}>Sign Up</button>
        </div>

      </div>
    </div>
  )
}

export default Signup