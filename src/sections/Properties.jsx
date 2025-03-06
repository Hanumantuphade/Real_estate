import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import { property } from '../components/export'
import { FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera, FaHeart } from 'react-icons/fa'
import { MdSpaceDashboard } from 'react-icons/md'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Properties = () => {
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
      <div className={`${darkmode ? 'dark bg-black' : 'light bg-transparent'}`}>
        <section id='properties' className='lg:w-[95%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10 '>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 data-aos="zoom-in" className='text-red-500 dark:text-white'>PROPERTIES :</h1>
            <h1 data-aos="zoom-in" className='text-black text-4xl font-semibold dark:text-white'>Explore the latest</h1>
          </div>

          {/* properties grid start from here */}

          <div id='grid_box' className=' w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>

            {
              property.map((item, index) => (
                <div data-aos="zoom-in" data-aos-delay="200" key={index} className='bg-white dark:bg-gray-800 rounded-xl w-full'>
                  <div id='image_box' className='bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between shadow-xl shadow-slate-900 border-b-[3px] border-r-[3px] 
                  border-r-[#463e3e] border-b-[#7b7575] items-end' style={{ backgroundImage: `url(${item.images})` }}>
                    <div id='top' className=' flex justify-between items-end w-full '>
                      <div><button className='px-3 py-1 bg-green-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Featured</button></div>
                      <div className='flex justify-between items-center gap-3'>
                        <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Sales</button>

                        <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Active</button>
                      </div>
                    </div>
                    <div id='bottom' className='flex  justify-between items-end w-full'>
                      <div className='flex justify-start items-center gap-2'>
                        <FaMapMarkerAlt className='size-4 text-white' />
                        <h1 className='text-white text-sm'>{item.address}</h1>

                      </div>
                      <div className='flex justify-center items-center gap-4'>
                        <FaVideo className='size-4 text-white' />
                        <FaCamera className='size-4 text-white' />
                      </div>
                    </div>
                  </div>

                  <div className='px-6 py-3 pt-6 flex flex-col justify-center items-start gap-2 w-full'>
                    <h1 className='text-xl text-black font-bold dark:text-white'>{item.name}</h1>
                    <h1 className='text-2xl font-bold text-red-600 dark:text-white'>{item.price}</h1>
                    <p className='dark:text-white'>{item.about}</p>
                    <div id='icons' className='flex justify-center items-start gap-4'>
                      <div className='flex justify-center items-center gap-2'>
                        <FaBath className='size-5 text-red-400' />
                        <h1 className='dark:text-white'>{item.bath}</h1>
                      </div>
                      <div className='flex justify-center items-center gap-2'>
                        <FaBed className='size-5 text-red-400' />
                        <h1 className='dark:text-white'>{item.bed}</h1>
                      </div>
                      <div className='flex justify-center items-center gap-2'>
                        <MdSpaceDashboard className='size-5 text-red-400' />
                        <h1 className='dark:text-white'>{item.area}</h1>
                      </div>
                    </div>
                    <div className='w-full h-[2px] bg-gray-300 mt-1'></div>
                    <div id='owner_info' className='flex justify-between shadow-xl shadow-slate-600 border-r-[2px] border-b-[2px] bg-slate-200 p-2  items-center w-full mt-1'>
                      <div className='flex justify-center items-center gap-2'>
                        <FaUserCircle className='size-5 text-red-400' />
                        <h1 className='dark:text-white'>{item.owner}</h1>
                      </div>
                      <div className='flex justify-center items-center gap-4'>
                      <div className='p-2 border-2 border-white hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300'><FaShareAlt className='size-5 text-red-400'/></div>
                      <div className='p-2 border-2 border-white hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300'><FaHeart className='size-5 text-red-400'/></div>
                      <div className='p-2 border-2 border-white hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300'><FaPlus className='size-5 text-red-400'/></div>
                      </div>
                    </div>
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

export default Properties;
