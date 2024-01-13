import React from 'react'

export default function AboutCard(props) {
  return (
    <div className='bg-[url("/cardbg.jpg")] font-bold text-white py-10 text-center '>

<h1 className='text-4xl'>{props.title}</h1>
<h1>{props.time}</h1>
<h1 className='text-xl'>{props.name}</h1>
<h1>{props.marks}</h1>
    
    </div>
  )
}
