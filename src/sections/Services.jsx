import React,{useEffect} from 'react'
import {service} from '../components/export'
// import { useDarkMode } from '../components/DarkModeContext'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(() => {
      Aos.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
      });
    }, [])
  
    const { darkmode, toggleDarkMode } = useDarkMode()
  return (
    <>
    <div className={`${darkmode?'dark bg-black': 'light bg-transparent'}`}>
      <section id='services' className={`${darkmode?'dark bg-gray-800': 'light bg-red-100'} lg:w-[95%] w-full h-fit m-auto flex flex-col rounded-xl justify-center items-start lg:px-20 px-6 py-20 gap-10 `}>
        <div className='flex flex-col justify-center items-start gap-4'>
          <h1 data-aos="zoom-in" className='text-red-500 dark:text-white '>OUR SERVICES</h1>
          <h1 data-aos="zoom-in" className='text-black text-[40px] font-semibold leading-10 dark:text-white'>Top real estate <br /><br />services available</h1>
        </div>
        <div id='services_box' className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
          {
            service.map((sev,value)=>(
              <div data-aos="zoom-in" data-aos-delay="200" key={value} className=' bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-8 rounded-xl border-b-[5px] border-red-600 hover:bg-pink-200 cursor-pointer '>
                <div className='p-6 rounded-full bg-red-200'>
                <sev.icon className='text-red-600 size-10 transform hover:scale-110 transition-transform duration-300 cursor-pointer'/>
                </div>
                <h1 className='text-black text-[22px] font-semibold dark:text-white'>{sev.title}</h1>
                <p className='text-lg text-slate-700  dark:text-white'>{sev.desc}</p>
                <button className='border-red-600 border-b-2 text-indigo-600 font-semibold p-0 dark:text-white '>READ MORE</button>
              
              </div>
            ))
          }

        </div>
      </section>

    </div>
    </>
  )
}

export default Services;
