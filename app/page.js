import Image from 'next/image'
import Navbar from './components/navbar/Navbar';
import TypeWriter from './components/typeWriter/TypeWriter';


export default function Home() {
  const textArray = [ 'I Am Mern Stack Developer ', 'I Am UI/UX Designer','I Am Frontend Developer ']; // Add your text here

  return (
   <div>
   <div className='bg-[url("/bg.jpg")]  bg-cover '>
   <Navbar/>

   <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mx-10 pt-10'>
   <div className='pt-24'>
   
   <TypeWriter textArray={textArray} />
   <p className='text-xl text-pretty font-serif text-[#ff0080] font-bold pt-10
   bg-gradient-to-b from-purple-500 via-purple-600 to-purple-700 text-transparent bg-clip-text
   '>I am Mern Stack Developer in Next js . I complete my course in 2023 ,now i am ready for building web applications.I like this field because i am interested in coding</p>
   </div>
   <div className='flex m-auto'>
  
   <Image src='/farooq.jpg' width={200} height={300}  className='rounded-full w-72 md:pt-5 sm:pt-7 ' />

   </div>
   </div>

   <div className='grid lg:grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-2 pt-28'>
   <Image src='/card.png' className='rounded-full md:flex md:m-auto sm:flex sm:m-auto' width={200}  height={100}/>
   <Image src='/card1.png' className='rounded-full md:flex md:m-auto sm:flex sm:m-auto' width={200}  height={100}/>
   <Image src='/card3.png' className='rounded-full md:flex md:m-auto sm:flex sm:m-auto' width={200}  height={100}/>
   <Image src='/card2.png' className='rounded-full md:flex md:m-auto sm:flex sm:m-auto' width={200}  height={200}/>

   </div>

   </div>


   </div>
  )
}
