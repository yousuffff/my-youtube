import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col p-2 mx-2 shadow-lg'>
      <div className='flex col-span-1 '>
        <img 
        className='h-8 mx-4'
        alt='hamburger-icon' 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png'
        />
        <img 
        className='h-8'
        alt='youtube-icon' 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png'/>
      </div>
      <div className='col-span-10 text-center' >
        <input type="text" name="search" id="search" className='border border-gray-400 rounded-l-2xl w-1/3 p-1 pl-2'/>
        <button className='border border-gray-400 rounded-r-2xl p-1 hover:cursor-pointer bg-gray-400 hover:transform(2)'>Search</button>
      </div>
      <div className='col-span-1'>
        <img className='h-8'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="user-icon" />
      </div>
    </div>
  )
}

export default Head