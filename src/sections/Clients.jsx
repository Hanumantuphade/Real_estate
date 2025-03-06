import React, { useEffect } from 'react'
import { client } from '../components/export'
import { useDarkMode } from '../components/DarkModeContext'
import { FaStar } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Clients = () => {
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
      <div className={`${darkmode ? 'dark bg-black' : 'light bg-transparent'}`}>
        <section id='testimonials' className='lg:[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20 '>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>OUR CLIENTS</h1>
            <h1 data-aos="zoom-in" className='text-black dark:text-white text-[40px] font-semibold leading-10' >What Our Clients <br /><br /> Saying About Us</h1>
          </div>
          <div id='Clients_box' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 '>
            {
              client.map((item, index) => (
                <div data-aos="zoom-in" data-aos-delay="200" key={index} className='bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-7 flex flex-col justify-center items-center w-full gap-6 rounded-xl border-b-[3px] border-b-slate-200 border-r-[2px] border-r-slate-200 shadow-slate-300 shadow-lg '>
                  <div className='flex justify-center items-center gap-4 w-full'>
                    <img src={item.image} alt="img" className='w-[130px] transfrom hover:scale-110 transition-transform divide-purple-300' />
                  </div>
                  <div className='flex flex-col justify-center items-center gap-1'>
                    <h1 className='text-xl text-black font-semibold dark:text-white'>{item.name}</h1>
                    <h1 className='text-gray-900 dark::text-white'>{item.text}</h1>
                  </div>
                  <div >
                    <p className='text-md text-justify text-slate-600 dark:text-white'>{item.feedback}</p>
                  </div>
                  <div className='flex justify-start items-start gap-2 w-full'>
                    <FaStar className='size-4 text-yellow-400' />
                    <FaStar className='size-4 text-yellow-400' />
                    <FaStar className='size-4 text-yellow-400' />
                    <FaStar className='size-4 text-yellow-400' />
                    <FaStar className='size-4 text-yellow-400' />
                  </div>
                </div>
              ))
            }

          </div>
        </section>

      </div>
    </>

  )
}

export default Clients
