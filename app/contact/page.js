'use client'
import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/config/firebase';

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading

  const submitHandler = async () => {
    if(!name || !phone || !email){
      alert('all fields are required')
      return;
    }
    try {
      setLoading(true); // Set loading to true when the form is being submitted
      let data = {
        name,
        email,
        phone,
      };

      const collectionName = collection(db, 'portfolio');
      await addDoc(collectionName, data);
      console.log('Document written with ID: ');
    } catch (error) {
      console.error('Error adding document: ', error);
    } finally {
      setLoading(false); // Set loading back to false when the submission is complete (success or error)
    }

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <div className='bg-[url("/bg.jpg")] bg-cover h-screen '>
        <Navbar />

        <div className='bg-[url("/cardbg.jpg")] font-bold text-white lg:mx-24 md:mx-16 sm:mx-0 mt-24  '>
          <h1 className='text-5xl pb-6 text-center pt-6'>Fill This Form</h1>
          <div className='text-center'>
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
