import React, { useEffect } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import toast from 'react-hot-toast';

function Dashboard() {
  const {authUser , getCurrentOrder , currentOrder} = useAuthStore();
  useEffect(()=>{
    for(let i = 0 ; i<authUser?.orders?.length ; i++){
      if(authUser?.orders[i].status == "placed"){
        getCurrentOrder(authUser?.orders[i]._id);
      }
    }
  },[])
  console.log("AuthUser : ",authUser);
  console.log("CurrentOrder : ",currentOrder);
  const handleAddClick = ()=>{
    if(!authUser.electricityBillPhoto){
      toast.error("Please Complete your Profile.")
      return;
    }
    if(authUser.totalProduction == 0 ){
      toast.error("No Energy Available to Share.")
      return;
    }

  }
  return (
    <div className='flex flex-col text-white p-3 min-h-[100vh]'>
      <div className='flex flex-col gap-4  '>
        {authUser.role == "producer"? <div className='p-2 flex flex-col gap-4'>
          <p className='text-2xl'> Current Consumer and Current Order </p>
          <div className='backdrop-blur-md min-h-[250px] bg-[#33333369] text-black rounded-2xl p-4'>
            {currentOrder ? <div>Yeahh i have a current order</div> : <p className='text-white w-full h-full text-center text-xl'>No current Placed order</p>}
          </div>
        </div> : <div className='p-2 flex flex-col gap-4'>
          <p className='text-xl'> Current Supplier and Current Order </p>
          <div className='backdrop-blur-md min-h-[250px] bg-[#33333369] text-black rounded-2xl p-4'>

          </div>
        </div>}
        
      </div>
      {authUser.role == "producer" && <button className='fixed z-20 hover:bg-[#313131] bottom-10 right-10 bg-white text-black w-[60px] h-[60px] rounded-full text-3xl cursor-pointer flex justify-center items-center text-center transition-all duration-300' onClick={handleAddClick}>
        +
      </button>}
      
    </div>
  )
}

export default Dashboard