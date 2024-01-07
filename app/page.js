import Image from 'next/image'
import Navbar from './components/navbar/Navbar';
import TypeWriter from './components/typeWriter/TypeWriter';
export default function Home() {
  const textArray = [ 'I Am Mern Stack Developer ', 'I Am UI/UX Designer','I Am Frontend Developer ']; // Add your text here

  return (
   <div>
   <div className='bg-[url("/bg.jpg")]  bg-cover'>
   <Navbar/>

   <div className='grid lg:grid-cols-2'>
   <div>
   
   <TypeWriter textArray={textArray} />
   <p className='text-xl text-pretty font-serif'>I am Mern Stack Developer in Next js . I complete my course in 2023 ,now i am ready for building web applications</p>
   </div>
   <div className='flex m-auto'>
   <Image src='/umar.png ' className=' ' width={300} height={300} />
   </div>
   </div>

   </div>


   </div>
  )
}
