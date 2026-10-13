import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
const [userName, setUserName] = useState('');
const [userRole, setUserRole] = useState('');
const [imageURL, setImageURL] = useState('');
const [Userdesc, setUserDesc] = useState('');

const [allUsers, setAllUsers] = useState([]);

const submitHandler = (e)=>{
  e.preventDefault()
  
  
  setAllUsers([...allUsers,{userName,userRole,Userdesc,imageURL}])
  
  setUserName('')
  setUserRole('')
  setImageURL('')
  setUserDesc('') 
}
const deleteHandler = (idx)=>{
const copyUsers = [...allUsers]
copyUsers.splice(idx,1)
setAllUsers(copyUsers)
}
 
  return (
    <div className ='bg-black min-h-screen text-white'>
      <form  onSubmit={(e)=>{
        submitHandler(e)
      }} className='px-2 py-3 flex flex-wrap  '>
        <input 
        value={userName}
        onChange={(e)=>{
          setUserName(e.target.value)
        }}
         className='border-2 text-xl font-semibold px-5 py-2 rounded-xl m-2 lg:md-[48%]' 
        type="text" 
        placeholder="Enter your name" />

        <input
        value={imageURL}
        onChange={(e)=>{
          setImageURL(e.target.value)
        }}
         className='border-2 text-xl font-semibold px-5 py-2 rounded-xl m-2 lg:md-[48%]' 
         type="text" 
         placeholder="image url" />

        <input
        value={Userdesc}
        onChange={(e)=>{
          setUserDesc(e.target.value)
        }}
         className='border-2 text-xl font-semibold px-5 py-2 rounded-xl m-2 lg:md-[48%]' 
         type="text" 
         placeholder="Enter description" />

        <input
        value={userRole}
        onChange={(e)=>{
          setUserRole(e.target.value)
        }}
         className='border-2 text-xl font-semibold px-5 py-2 rounded-xl m-2 lg:md-[48%]' 
         type="text" 
         placeholder="Enter Role" />

        <button className=' px-5 bg-emerald-500 active:scale-99 py-2 rounded-xl ml-3 m-2 w-[97%]'>Create User</button>

      </form>
      <div className='px-4 py-10 gap-2 flex flex-wrap'>
          {allUsers.map(function(elem,idx){
            return <div key={idx} className='md:w-[23vw] sm:w-[30vw]  rounded-xl py-4 px-8 flex items-center flex-col bg-white text-black'>
    <img  className='h-24 w-24 rounded-full object-center object-cover'src={elem.imageURL} alt="" />
      <h1 className='text-xl font-semibold'>{elem.userName} </h1>
      <h5 className=' text-blue-500  text-lg font-semibold my-3'>{elem.userRole}</h5>
      <p className='text-sm font-medium leading-tight'>{elem.Userdesc}</p>
      <button onClick={()=>{
        deleteHandler(idx)
      }} className='px-4 py-2 cursor-pointer active:scale-95 bg-red-300 rounded text-white font-semibold mt-3 text-xs'>Remove</button>
    </div>
          })}

      </div>
    </div>
  )
}

export default App
