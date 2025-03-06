import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, [])

  const { darkmode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className={`${darkmode ? 'dark bg-black ' : 'light bg-transparent'} pb-20`}>
        <section id='contact' className={`${darkmode ? 'dark bg-gray-800 ' : 'light bg-red-100'} lg:[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`} >
          <div data-aos="zoom-in" className='bg-white dark:bg-black flex flex-col p-10 justify-center items-start gap-4 rounded-xl'>
            <h1 className='text-black text-2xl font-semibold dark:text-white'>Sens us message today</h1>
            <input type="text" placeholder='Enter your full name here' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl' />
            <input type="email" placeholder='Enter your valid email ' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl' />
            <input type="number" placeholder='Enter your valid mobile number' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl' />
            <textarea name="" id="" cols="20" rows="4" placeholder='Enter your message here...' className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl'></textarea>
            <button   className='bg-red-600 w-full px-8 py-3 text-white rounded-xl font-semibold hover:bg-black hover:dark:bg-red-700'>SEND EMAIL</button>
          </div>
          <div className='flex flex-col justify-center items-start gap-8 lg:p-20 p-6'>
            <h2 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[40px] font-semibold leading-10 dark:text-white'>Pune Property Snapshot</h2>
            <p> home to about 20 million People, Mumbai is the entertainment capital of India. Also known as Bombay and being the financial capital of India this city is a destination for many big events and activities throughout the year. The number of people who visit Mumbai is countless and so as the number of people who migrate to Mumbai.  </p>
            <button className=' bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black hover:dark:bg-red-700 cursor-pointer '>SEND EMAIL</button>
          </div>
          

        </section>
      </div>
    </>

  )
}

export default Contact
