'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { TiThMenu } from "react-icons/ti";
import '../../globals.css'
import Link from 'next/link';
export default function Navbar() {
  const [show,setShow]=useState(false);
  const toggleMenu = ()=>{
    setShow(!show)
  }
  return (
    <div className='flex items-center justify-between mx-5  pt-3 main '>
    <div className='flex justify-center items-center  '>
    <Image className='rounded-full h-12 ' src='/umar.jpg' width={50} height={30} />
    <h1 className='text-2xl font-bold font-[Glazier] ml-2 text-white cursor-pointer bg-green-400 py-1 px-5  hover:bg-black hover:scale-105 rounded-2xl'><Link href='/'>Umar Farooq</Link></h1>
    </div>
    <div className={`list-none flex  responsive ${show? 'navbar-show': 'navbar-hide'}`}>
    <Link href='/'><li className='bg-green-400 rounded-2xl cursor-pointer hover:bg-black hover:scale-110 hover:text-white mx-2 p-1 px-4 text-white font-bold text-1xl text-center'>Home</li></Link>
   <Link href='/about'> <li className='bg-green-400 rounded-2xl cursor-pointer hover:bg-black hover:scale-110 hover:text-white mx-2 p-1 px-4 text-white font-bold text-1xl text-center'>About</li></Link>
   <Link href='/contact'> <li className='bg-green-400 rounded-2xl cursor-pointer hover:bg-black hover:scale-110 hover:text-white mx-2 p-1 px-4 text-white font-bold text-1xl text-center'>Contact</li></Link>
    
    
    </div>
    <button className={`bg-green-400 font-bold rounded-2xl hover:bg-black btn text-white px-5 p-1 hover:scale-110 btn responsive ${show? 'navbar-show' : 'navbar-hide'}`}><Link href='https://github.com/Umar-Farooq-217' target='blank'>Github Link </Link></button>
    <button onClick={toggleMenu} className='bar'><TiThMenu /></button>
    </div>
  )
}
