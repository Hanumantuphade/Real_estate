import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import heroimg from '../assets/images/hero1.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
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
      <div className={`${darkmode ? 'dark bg-black' : 'light bg-white'}`}>
        <section id='home' className='w-[95%] h-[600px]  m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20 ' style={{ backgroundImage: `url(${heroimg})` }} >
          <h1 data-aos="zoom-in" className=' text-white text-6xl font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]'>Find your next home in PUNE</h1>
          <p data-aos="zoom-in" className='text-slate-200 text-xl  lg:pr-[500px] pr-0'>Viman Nagar Estate refers to the real estate market in Viman Nagar, a prominent residential and commercial area in Pune, India, known for its proximity to the Pune International Airport</p>
        </section>
      </div>

      {/* form start from here */}

      <div className={`${darkmode ? 'dark bg-black' : 'light bg-transparent'} z-10`}>
        <div data-aos="zoom-in" id='form' className={`${darkmode ? 'dark bg-gray-800' : 'light bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6  p-8 rounded-xl -mt-14`}>
          <div className='w-full'>
            <h1 className='text-black font-semibold dark:text-white'>LOCATION</h1>
            <input type="text" placeholder='Enter an address,state,city or pincode' className='bg-white p-2 w-full mt-2 border-b-[2px] md:w-full border[#bdb089]' />
          </div>
          <div className='w-full'>
            <h1 className='text-black font-semibold dark:text-white'>TYPE</h1>
            <select name="selectoption" id="selectoption" className='bg-white p-2 border-b[2px] border[#bdb089] w-full mt-2  text-gray-500 text-md '>
              <option value="" disabled selected>Select property</option>
              <option value="option1">Rentals</option>
              <option value="option2">Sales</option>
              <option value="option3">commercial</option>
            </select>
          </div>
          <div className='w-full'>
            <h1 className='text-black font-semibold dark:text-white'>CATEGORY</h1>
            <select name="selectoption" id="selectoption" className='bg-white p-2 border-b[2px] w-full mt-2 border[#bdb089] text-gray-500 text-md '>
              <option value="" disabled selected>property category</option>
              <option value="option1">Aparments</option>
              <option value="option2">Duples</option>
              <option value="option3">Condos</option>
              <option value="option3">ONE BHK</option>
              <option value="option3">ONE RK</option>
            </select>
          </div>
          <div className='w-full'>
            <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black  text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>SUBMIT</button>

          </div>


        </div>
      </div>
    </>



  )
}

export default Hero;
