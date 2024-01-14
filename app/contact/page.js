import React from 'react'
import Navbar from '../components/navbar/Navbar'

export default function page() {
  return (
    <div>
    <div className='bg-[url("/bg.jpg")]  bg-cover h-screen '>
    <Navbar/>


    <div  className='bg-[url("/cardbg.jpg")] font-bold text-white lg:mx-24 md:mx-16 sm:mx-0 mt-24  '>
    <h1 className='text-5xl pb-6 text-center pt-6'>Fill This Form</h1>
    <div className='text-center'>
    <div>
    <label className='text-2xl py-1 ' htmlFor="name">Enter Your Name:</label>
    <input className='py-1 my-4 px-3 w-[250px] ml-5 text-black ' type="text" id='name' placeholder='Enter Your Name' />
    </div>
    <div>
    <label className='text-2xl py-1 ' htmlFor="name">Enter Your Name:</label>
    <input className='py-1 my-4 px-3 ml-5 w-[250px] text-black' type="text" id='name' placeholder='Enter Your Name' />
    </div>
    <div className='pb-10'>
    <label className='text-2xl py-1 ' htmlFor="name">Enter Your Name:</label>
    <input className='py-1 my-4 px-3 ml-5 text-black w-[250px]' type="text" id='name' placeholder='Enter Your Name' />
    </div>
   
    </div>
    
    </div>

    </div>
    
    
    </div>
  )
}
