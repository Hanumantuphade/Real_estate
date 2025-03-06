import React from 'react'
import { useDarkMode } from './DarkModeContext'
import { Link } from 'react-scroll'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaFax, FaArrowUp, FaMoon, FaSun } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import prop7 from '../assets/images/prop7.jpg'
import prop8 from '../assets/images/prop8.jpg'


const Footer = () => {
  const { darkmode, toggleDarkMode} = useDarkMode();
  return (
    <>
      <footer className={`${darkmode ? 'dark bg-black' : 'light bg-gray-800'} w-full m-auto lg:px-20 px-10 py-11 grid lg:grid-cols-3 grid-cols-1 justify-between items-start lg:gap-20 gap-10`}>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className=' text-white font-semibold text-2xl'>About US</h1>
          <p className='text-slate-200 text-justify'>There are a variety of residential complexes, independent houses, and villas located in Viman Nagar. Residential options include 1 BHK, 2 BHK, and 3 BHK flats and apartments in mid-rise & high-rise towers across various price ranges.</p>
          <div id='socail icon' className='flex justify-start items-center gap-4 mt-4'>
            <div className='p-3 rounded-xl bg-white hover:bg-blue-800 hover:text-white cursor-pointer transfrom hover:scale-110 transition-transform duration-300'>
              <FaFacebook className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-rose-500 hover:text-white cursor-pointer transfrom hover:scale-110 transition-transform duration-300'>
              <FaInstagram className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-indigo-600 hover:text-white cursor-pointer transfrom hover:scale-110 transition-transform duration-300'>
              <FaTwitter className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transfrom hover:scale-110 transition-transform duration-300'>
              <FaYoutube className='size-5' />
            </div>
          </div>
          <h1 className='text-white mt-6'>Copyright Reail Estate, All Rights Reserve</h1>
        </div>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Contact US</h1>
          <div className='flex justify-center items-center gap-3'>
            <FaBuilding className='text-white size-5' />
            <p className='text-slate-200'>property comparisons and market trends sets their work apart.</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaMobile className='text-white size-5' />
            <p className='text-slate-200'>+984 2987 4567</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaFax className='text-white size-5' />
            <p className='text-slate-200'>9834 87567</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <IoMdMail className='text-white size-5' />
            <p className='text-slate-200'>demomail@gmail.com</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
          <div className='flex justify-center items-center gap-4'>
            <img src={prop7} alt="" className='w-[120px] rounded-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
            <div className='flex flex-col justify-center items-start'>
              <h1 className='text-[16px] text-white'>Villa With Amazing View</h1>
              <p className='text-slate-200'>$ 287.98</p>
            </div>
          </div>
          <div className='flex justify-center items-start gap-4'>
            <img src={prop8} alt="" className='w-[120px] rounded-lg transform hover:scale-110 transition-transform duration-300 cursor-pointer' />
            <div className='flex flex-col justify-center items-start'>
              <h1 className='text-[16px] text-white'>Smart View From Beach</h1>
              <p className='text-slate-200'>$ 487.47</p>
            </div>
          </div>
        </div>
      </footer>

      {/* slide-to-top button */}

      <div id='icon_box' className='bg-red-500 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-8'>
        <Link to='home' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='size-6 text-white' />
        </Link>
      </div>

      {/* dark mode toggle button section */}

      {/* <div>
        <button onClick={toggleDarkMode} className='flex items-center bg-orange-500 p-4 rounded-full fixed lg:top-52 right-8 top-6'>
          {darkmode ? <FaMoon size={25} className='text-black' /> : <FaSun size={25} className='text-black'  />}
        </button>
      </div> */}
    </>

  )
}

export default Footer
