import React,{ useEffect,useState } from 'react'
import {IoIosArrowDropupCircle} from 'react-icons/io'
export const GoToTop = () => {
  const [isVisible,setIsVisible] = useState(false)
    const goToTop = () =>{
        window.scrollTo({top:0,right:0,behaviour:'smooth'})
    }
    const listenToScroll = () =>{
      let heightToHidden = 250;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      if (winScroll > heightToHidden){
        setIsVisible(true)
      }else{
        setIsVisible(false)
      }
    }

    useEffect(()=>{
      window.addEventListener('scroll',listenToScroll)
    })

  
  return (
    <>
    {isVisible &&  <div className='fixed bottom-0 right-10 z-20'>
     <IoIosArrowDropupCircle size={50} className='text-black duration-500 hover:-translate-y-4' onClick={goToTop} />
     </div>}
    </>
  )
}
