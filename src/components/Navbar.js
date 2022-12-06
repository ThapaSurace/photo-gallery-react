import React from 'react'
import {FcGallery} from 'react-icons/fc'
export const Navbar = () => {
  return (
    <>
   <div className='bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 shadow-sm shadow-gray-300'>
   <div className= 'flex justify-between container mx-auto p-4 items-center'>
        <div className="brand-logo flex items-center gap-3">
           <FcGallery size={40} />
            <span className='text-2xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600'>Gallery Hub</span>
        </div>
        <nav>
            <ul className='flex gap-4 text-white font-bold text-1xl cursor-pointer'>
                <li className=' hover:text-yellow-500'>Home</li>
                <li className=' hover:text-yellow-500'>About</li>
                <li className=' hover:text-yellow-500'>Contact Us</li>
            </ul>
        </nav>
    </div>
   </div>
    </>
  )
}
