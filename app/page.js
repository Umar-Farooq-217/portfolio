import Image from 'next/image'
import Navbar from './components/navbar/Navbar';

export default function Home() {
  return (
   <div>
   <div className='bg-[url("/bg.jpg")] h-52 bg-cover'>
   <Navbar/>
   </div>


   </div>
  )
}
