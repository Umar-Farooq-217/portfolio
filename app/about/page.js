import React from 'react'
import Navbar from '../components/navbar/Navbar'
import '../globals.css'
export default function page() {
  return (
    <div>
    <div className='bg-[url("/bg.jpg")]  bg-cover '>
    <Navbar/>
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:px-10 md:px-10 sm:px-2 pt-12 gap-x-5'>
    <h1 className='umar text-3xl font-bold flex m-auto sm:m-0'>Mail: <br />uf29664@gmail.com</h1>
    <h1 className='umar  text-3xl font-bold flex m-auto sm:m-0'>Phone Number: <br /> 03486596201</h1>
    </div>
    </div>

    
    </div>
  )
}
