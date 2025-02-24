import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Donate() {

  const navigate = useNavigate('')
  return (
    <div className='relative w-full h-full py-10 px-7 lg:grid grid-cols-2 lg:py-28 gap-20'>
      <div className='absolute top-3 left-3 text-3xl cursor-pointer rounded-full bg-black shadow-inner shadow-gray-500 px-1 py-1'>
        <IoArrowBackOutline onClick={() => navigate(-1)} />
      </div>
        <div className='my-6'>
          <div className='mx-auto'>
            <div className='flex justify-center items-center'>
              <img src="https://cdn-icons-png.flaticon.com/512/962/962965.png" alt="" />
            </div>
            <div className='flex justify-center py-6'>
              <button className='bg-black shadow-inner shadow-gray-500 lg:w-[50%] w-full py-4 poppins-bold rounded-full'>Scan QR Code</button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className='py-2 lg:py-10'>
              <p className='poppins-regular lg:text-center text-blue-300 lg:text-xl text-sm'>Your support keeps this platform running! If you find our services helpful, consider donating to help us maintain and improve them. Every contribution, big or small, makes a difference. Your generosity allows us to keep providing free tools for everyone. Thank you for supporting our mission and helping us grow ❤️</p>
            </div>
            <div className='space-y-4 py-4 lg:py-10'>
              <div className='text-center'>
                <h1 className='lg:text-5xl text-3xl poppins-bold '>Connect with me</h1>
              </div>
              <div className='flex lg:justify-evenly justify-between py-2 lg:py-6'>
                  <div className='cursor-pointer rounded-full bg-black shadow-inner shadow-gray-500 px-4 py-4 flex justify-center items-center'>
                    <MdAttachEmail className='lg:text-5xl text-3xl text-blue-200'/>
                  </div>
                  <div className='cursor-pointer rounded-full bg-black shadow-inner shadow-gray-500 px-4 py-4 flex justify-center items-center'>
                    <FaGithub className='lg:text-5xl text-3xl text-blue-200'/>
                  </div>
                  <div className='cursor-pointer rounded-full bg-black shadow-inner shadow-gray-500 px-4 py-4 flex justify-center items-center'>
                    <FaLinkedin className='lg:text-5xl text-3xl text-blue-200'/>
                  </div>
                  <div className='cursor-pointer rounded-full bg-black shadow-inner shadow-gray-500 px-4 py-4 flex justify-center items-center'>
                    <FaSquareXTwitter className='lg:text-5xl text-3xl text-blue-200'/>            
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Donate