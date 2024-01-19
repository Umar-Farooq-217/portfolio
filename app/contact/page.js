'use client'
import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import { addDoc, collection, updateDoc, doc, deleteDoc,getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading
  const [submittedData, setSubmittedData] = useState();
  // const [people,setPeople]=usestat
  const submitHandler = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (!name || !phone || !email) {
      alert('All fields are required');
      return;
    }

    try {
      setLoading(true);
      let data = {
        name,
        email,
        phone,
      };

      const collectionName = collection(db, 'portfolio');
      await addDoc(collectionName, data);
    } catch (error) {
      console.error('Error adding document: ', error);
    } finally {
      setLoading(false);
    }

    setName('');
    setEmail('');
    setPhone('');
    alert('Thanks for Submitting your detail');
  };

  

  



  return (
    
      <div className='bg-[url("/bg.jpg")] bg-cover h-full '>
        <Navbar />
        <div className='text-center'>
      

        <div className='bg-[url("/cardbg.jpg")] font-bold text-white lg:mx-24 md:mx-16 sm:mx-0 mt-24   '>
        <div className='flex justify-center items-center '>
        <h1 className='text-5xl pb-6 text-center pt-6'>Fill This Form</h1> 
        
        </div>
          <div className='text-center '>
            <div>
              <label className='text-2xl py-1 ' htmlFor='name'>
                Enter Your Name:
              </label>
              <br />
              <input
                className='py-1 my-4 px-3 w-[250px] ml-5 text-black '
                onChange={(e) => setName(e.target.value)}
                type='text'
                id='name'
                placeholder='Enter Your Name' required
              />
            </div>
            <div>
              <label className='text-2xl py-1 ' htmlFor='mail'>
                Enter Your Email:
              </label>
              <br />
              <input
                className='py-1 my-4 px-3 ml-5 w-[250px] text-black'
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                id='mail'
                placeholder='Enter Your email' required
              />
            </div>
            <div className='pb-3'>
              <label className='text-2xl py-1 ' htmlFor='phone'>
                Enter Phone Number:
              </label>
              <br />
              <input
                className='py-1 my-4 px-3 ml-5 text-black w-[250px]'
                type='text'
                onChange={(e) => setPhone(e.target.value)}
                id='phone'
                placeholder='Enter Your Phone Number'
                required
              />
            </div>
            <button
              onClick={submitHandler}
              className='bg-green-400 text-white font-bold px-5 py-1 rounded-2xl mb-10 hover:bg-black scale-105'
              disabled={loading} // Disable the button when loading is true
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          
          
          </div>
        </div>
      </div>
    </div>
  );
}
