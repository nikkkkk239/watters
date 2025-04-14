import React, { useEffect ,useState} from 'react'
import { useAuthStore } from '../store/useAuthStore'
import Modal from "react-modal";
import toast from 'react-hot-toast';

Modal.setAppElement("#root");

function Dashboard() {
  const {authUser , getCurrentEnergy ,deleteOrdersHavingProducer,deleteOrder,fetchingCustomersOrder ,consumersCurrentOrder , getConsumersCurrentOrder ,deleteEnergy, currentEnergy,shareEnergy} = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{
      if(authUser.role == "producer"){
        getCurrentEnergy(authUser?._id);
      }else{
        getConsumersCurrentOrder(authUser._id);
      }
  },[])
  console.log("AuthUser : ",authUser);
  console.log("CurrentOrder : ",currentEnergy);
  const handleAddClick = ()=>{
    console.log(authUser.deviceNo)
    if(!authUser.electricityBillPhoto || !authUser.deviceNo || authUser.location.length == 0){
      toast.error("Please Complete your Profile.")
      return;
    }
    if(authUser.totalProduction == 0 ){
      toast.error("No Energy Available to Share.")
      return;
    }
    setIsOpen(true);

  }
  const createdAt = new Date(currentEnergy?.createdAt);
  const formatedDate = createdAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const handleShare = ()=>{
    shareEnergy({owner : authUser?._id , energy : authUser?.limitOfSharing , location : authUser.location});
    setIsOpen(false);

  }
  const handleQuit = ()=>{
    deleteOrdersHavingProducer(authUser._id);
    deleteEnergy(currentEnergy._id);
  }
  const handleOrderCancel = ()=>{
    deleteOrder(consumersCurrentOrder?._id)
  }
  return (
    <div className='flex flex-col text-white p-3 min-h-[100vh]'>
      <div className='flex flex-col gap-4  '>
        {authUser.role == "producer"? <div className='p-2 flex flex-col gap-4'>
          <p className='text-2xl'> Current Shared Energy</p>
          <div className='backdrop-blur-md min-h-[150px] bg-[#33333369] text-black rounded-2xl p-4'>
            {currentEnergy ? <div className='text-white p-2 text-[18px]'>
              <p className='mb-1'>Shared On : {formatedDate}</p>
              <p className='mb-1'>Sharing Energy : {currentEnergy.energy} KW</p>
              <p className='mb-3'>Number Of Requests : {currentEnergy.requests.length} </p>
              <button className= ' bg-blue-400 rounded-xl cursor-pointer duration-150 transition-all hover:bg-blue-700 hover:scale-105 p-2' onClick={handleQuit}>Quit Sharing</button>
            </div> : <p className='text-white w-full h-full text-center text-xl'>Not Sharing Energy Currently.</p>}
          </div>
        </div> : <div className='p-2 flex flex-col gap-4'>
          <p className='text-xl'> Your Current Order </p>
          <div className='backdrop-blur-md h-fit min-h-[150px] border-1 border-white bg-[#33333369] text-black rounded-2xl p-4'>
              {
                fetchingCustomersOrder ? <p className='text-white w-full text-center'>Loading...</p> :
                consumersCurrentOrder ? <div className='text-white  flex flex-col gap-2'>
                  <div className='flex justify-between gap-1'>
                    <p className='text-xl'>Supplier : {consumersCurrentOrder?.producer?.name}</p>
                    <p className='bg-white text-black p-2 pt-1 pb-1'>Status : {consumersCurrentOrder?.status}</p>
                  </div>
                  <div>Energy Recieved : {consumersCurrentOrder?.requiredEnergy} KW</div>
                  <div className='flex justify-between mb-5'>
                    <div> Amount : ₹  {consumersCurrentOrder?.amount != 0 && consumersCurrentOrder?.amount}</div>
                    <button className='bg-blue-400 hover:bg-blue-700 rounded-full min-w-[90px] p-2 text-white transition-all
                    duration-150 cursor-pointer' onClick={handleOrderCancel}>Cancel</button>
                  </div>
                  {consumersCurrentOrder?.status == "completed" ? <button className='w-full bg-blue-400 m-auto text-white hover:bg-blue-700 rounded-full cursor-pointer max-w-[350px] p-2'>Make Payment</button> : <p className='m-auto text-center text-[#d1d1d158]'>You will be able to make payment , onces order is accepted.</p>}
                </div> : <p className='text-white w-full text-center text-[18px]'>No Current Orders</p>
              }
          </div>
        </div>}
        
      </div>
      {authUser.role == "producer" && !currentEnergy && <button className='fixed z-20 hover:bg-[#313131] bottom-10 right-10 bg-white text-black w-[60px] h-[60px] rounded-full text-3xl cursor-pointer flex justify-center items-center text-center transition-all duration-300' onClick={handleAddClick}>
        +
      </button>}
      <Modal 
        isOpen={isOpen} 
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)" // Black shade
          },
          content: {
            maxWidth: "350px",
            height: "fit-content",
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor:"black",
            color:"white"
          }
        }} 
      >
        <div className='w-full h-full relative flex flex-col gap-7'>
        <h2 className='text-2xl'>Share Your Energy</h2>
        <div className='flex flex-col gap-2'>
          <p className='text-[18px]'>Available Energy - {authUser?.totalProduction} KW</p>
          <p className='text-[18px]'>Sharing Limit - {authUser?.limitOfSharing} KW</p>
        </div>
        <div className='flex flex-col gap-1 w-full'>
        <button className=' hover:text-white mb-2 hover:scale-105 text-black' style={{transition:"all 0.3s ease-out",background:'linear-gradient(45deg, #7CB9E8,#0066b2, #002D62)',padding:"5px 20px",borderRadius:"30px",cursor:"pointer",fontSize:"20px"}} onClick={handleShare}>Share</button>
        <p className='text-center text-[#535353]'>By Clicking Share , Consumers will be able to Request For Energy Consumption.</p>
        </div>
        <button className='cursor-pointer absolute top-0 right-1 text-2xl' onClick={() => setIsOpen(false)} title='Close'>x</button>

        </div>
      </Modal>
      
    </div>
  )
}

export default Dashboard