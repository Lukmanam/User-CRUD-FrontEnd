import React from 'react'

const AddUser = () => {
  return (
    <div className='w-full h-full bg-slate-500 pb-40  '>
      <h1 className='text-center font-extrabold text-4xl p-10'>USER SIGNUP</h1>
      <form className='bg-transparent rounded-2xl '>
      <div className='label'>
        <label for="Name" className='p-6 text-xl font-bold text-slate-800  ' >Name :</label>
        <input type="text"  placeholder="Enter Student name" className='w-1/2 h-11 p-5 m-5 bg-teal-100 ' />
      </div>
      <div className='label'>
        <label for="Name" className='p-6 text-xl font-bold text-slate-800  ' >School :</label>
        <input type="text"  placeholder="Enter Student name" className='w-1/2 h-11 p-5 m-5 bg-teal-100 ' />
      </div>
      <div className='label'>
        <label for="Name" className='p-6 text-xl font-bold text-slate-800  ' >Gender :</label>
        <input type="text"  placeholder="Enter Student name" className='w-1/2 h-11 p-5 m-5 bg-teal-100 ' />
      </div>
      <div className='label'>
        <label for="Name" className='p-6 text-xl font-bold text-slate-800  ' ><span className='m-4'>Age</span>    :</label>
        <input type="text"  placeholder="Enter Student name" className='w-1/2 h-11 p-5 m-5 bg-teal-100 ' />
      </div>
      <div className='label'>
        <label for="Progress" className='p-6 text-xl font-bold text-slate-800  ' >Progress :</label>
        <input type="select"  placeholder="Enter Student name" className='w-1/2 h-11 p-5 m-5 bg-teal-100 ' />
        <select name="progress" id="progress">
        <select itemID='selected' id="">
          Selected
        </select>

        </select>
       
      </div>



      </form>
      
    </div>
  )
}

export default AddUser
