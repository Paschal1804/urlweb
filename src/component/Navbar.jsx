import React from 'react'
import logo from '../assets/Logo-1.svg'
import arrow from '../assets/arrow.svg'
import HamburgerComponent from './Hamburger'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <div>
    <div className=' md:hidden'>
      <img src={logo} alt=""  />
      <HamburgerComponent />
      
    </div>
           
    <div className=' hidden md:flex justify-center text-center'>
     

      <ul className='   md:list-none flex pt-[20px] text-center bold text-[20px] gap-[80px] lg:flex '>
         <img src={logo} alt="" className='' />
        <li><a href="#">MyURLs</a></li>
        <li ><a href="#" className='flex'>Features <img src={arrow} alt="" /></a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Analytics</a></li>
        <li><Link to="/faqs">FAQs</Link> </li>
      </ul>

      <button className='text-[23px] ml-[110px] pt-[10px] cursor-pointer'><Link to="/login">Login</Link></button>
       <button className='text-[23px] ml-[20px] mt-[5px] p-[7px] cursor-pointer bg-[#0065FE] rounded-[30px] text-[white]'>Try for free</button>
    </div>
   </div>
  )
}

export default Navbar