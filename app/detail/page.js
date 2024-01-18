import React from 'react'

export default function page() {
  return (
    <div>
    
    {submittedData && (
        <div className='mt-6 text-center'>
          <h2 className='text-3xl text-white'>See Details:</h2>
          <ul>
          <li>              Name: {submittedData.name} </li>
          <li>Email: {submittedData.email}</li>
          <li> Phone: {submittedData.phone}</li>
          <li>          <button
          onClick={updateHandler}
          className='bg-blue-400 text-white font-bold px-4 py-1 rounded mr-4 hover:bg-blue-600'
        >
          Update
        </button>
        <button
          onClick={deleteHandler}
          className='bg-red-400 text-white font-bold px-4 py-1 rounded hover:bg-red-600'
        >
          Delete
        </button></li>
          </ul>
        
       
        </div>
      )}
    </div>
  )
}
