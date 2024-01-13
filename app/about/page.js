import React from 'react'
import Navbar from '../components/navbar/Navbar'
import '../globals.css'
import AboutCard from '../components/aboutCard/AboutCard'
export default function page() {
  return (
    <div>
    <div className='bg-[url("/bg.jpg")]  bg-cover '>
    <Navbar/>
    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:px-10 md:px-10 sm:px-2 pt-12 gap-x-5 sm:pl-10'>
    <h1 className='umar text-3xl font-bold flex m-auto sm:m-0'>Mail: <br />uf29664@gmail.com</h1>
    <h1 className='umar  text-3xl font-bold flex m-auto sm:m-0'>Phone Number: <br /> 03486596201</h1>
    </div>

    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 px-10 pt-10'>
    <AboutCard title='Matric' time='2018-2020' marks='Marks : 1100 / 886' name='Govt. High School 217 RB Uchkera, Faisalabad' />
    <AboutCard title='F.Sc(Medical)' time='2021-2022' marks='Marks : 1100 / 886' name='Govt. Higher Secondary School Allama Iqbal Road, Faisalabad' />
    </div>

    <div className='lg:px-20 md:px-14 sm:px-5 pt-10 pb-24'>
    <AboutCard title='Web & Mobile App Development ' time='2022-2023' name='Saylani Mass IT Training Program , Faisalabad' />
    </div>

    </div>
   

    
    </div>
  )
}
