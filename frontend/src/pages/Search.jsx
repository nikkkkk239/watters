import React, {useState} from 'react'

function Search() {
  const [searchQuery , setSearchQuery] = useState("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {

    }
  };
  const handleSearch = ()=>{
    alert("Hi there.")
  }
  return (
    <div className='min-h-[100vh] flex flex-col gap-4 p-4'>
      <h1 className='text-white text-xl'>Search for Energy Based on Location </h1>
      <div className='flex w-full'>
        <input type="text" onKeyDown={handleKeyDown} onChange={(e)=>setSearchQuery(e.target.value)} className='text-white p-3 w-full focus:outline-none bg-[#333]'  placeholder='Search ...' />
        <button disabled={searchQuery.length == 0 ? true : false} onClick={handleSearch} className={!searchQuery.length == 0 ? 'text-black pl-4 pr-4 cursor-pointer bg-white' : 'text-black pl-4 pr-4 cursor-pointer bg-[#333]'}>Search</button>
      </div>

      <div className='min-h-[100px] border-t-2 border-[#333] w-full'>

      </div>
      


    </div>
  )
}

export default Search