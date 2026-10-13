import React from 'react'

const Card = () => {
  return (
    <div className='w-[23vw] rounded-xl py-4 px-8 flex items-center flex-col bg-white text-black'>
    <img  className='h-24 w-24 rounded-full'src="https://images.unsplash.com/photo-1788080567027-cdfc4ba881fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" alt="" />
      <h1 className='text-xl font-semibold'>Himanshu kumar </h1>
      <h5 className=' text-blue-500  text-lg font-semibold my-3'>Developer</h5>
      <p className='text-sm font-medium leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, porro.</p>
      <button className='px-4 py-2 cursor-pointer active:scale-95 bg-red-300 rounded text-white font-semibold mt-3 text-xs'>Remove</button>
    </div>
  )
}

export default Card
