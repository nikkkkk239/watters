import React, {useActionState, useEffect, useState} from 'react'
import { useAuthStore } from '../store/useAuthStore';

function Search() {
  const [searchQuery , setSearchQuery] = useState("");
  const {searchEnergies ,searchResults ,authUser,setSearchResult ,createOrder} = useAuthStore();
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchQuery.length != 0) {
      console.log("enter")
      handleSearch();
    }
  };
  const handleSearch = ()=>{
    searchEnergies({location : searchQuery})

  }
  console.log("search Result : ",searchResults);
  useEffect(()=>{
    if(searchQuery.length == 0){
      setSearchResult(null)
    }
  },[searchQuery])

  const handleRequest = (energy)=>{
    createOrder({producer : energy.owner._id , consumer : authUser._id , AvailEnergy : energy.energy , requiredEnergy,requiredEnergy : energy.energy})
  }
  return (
    <div className='min-h-[100vh] flex flex-col gap-4 p-4'>
      <h1 className='text-white text-xl'>Search for Energy Based on Location </h1>
      <div className='flex w-full'>
        <input type="text" onKeyDown={handleKeyDown} onChange={(e)=>setSearchQuery(e.target.value)} className='text-white p-3 w-full focus:outline-none bg-[#333]'  placeholder='Suitable Location...' />
        <button disabled={searchQuery.length == 0 ? true : false} onClick={handleSearch} className={!searchQuery.length == 0 ? 'text-black pl-4 pr-4 cursor-pointer bg-white' : 'text-[#cdcdcd72] pl-4 pr-4 cursor-pointer bg-[#333]'}>Search</button>
      </div>

      <div className='min-h-[100px] border-t-2 border-[#333] pt-7 w-full'>
          {
            searchResults && <div>
              {searchResults.map((result)=>{
                return <div className=' flex flex-col gap-2 p-3  rounded bg-black text-white border-white border-[0.5px]'>
                  <div className='flex justify-between w-full '>
                    <h1 className="text-[20px]">Supplier : {result.owner.name}</h1>
                    <p>
                      <input type="Number" />{result.energy} KW</p>
                  </div>
                  <div className='flex justify-between items-end w-full '>
                    <p className='text-[17px]'>{result.location}<br/><span className='text-[15px] text-[#7a7878cc]'>{result.createdAt}</span></p>
                    <button className='bg-blue-400 text-white h-fit pl-4 pr-4 pt-2 pb-2 rounded-2xl cursor-pointer hover:bg-blue-700 transition-all duration-150' onClick={()=>handleRequest(result)}>Request</button>
                  </div>
                </div>
              })}
            </div>
          }
      </div>
      


    </div>
  )
}

export default Search