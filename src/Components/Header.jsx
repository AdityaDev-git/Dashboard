import React, { useState } from 'react'
import { FaRegBell } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Sidebar } from 'react-pro-sidebar';
import { MdMenu } from "react-icons/md";
import Offcanvas from '../Components/Offcanvas'
import '../Assets/style.css'



const Header = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className='flex flex-row flex-wrap justify-between'>
      <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
          <Offcanvas/>
      </Sidebar>
        <div className='flex items-center space-x-4'>
          <MdMenu onClick={() => setToggled(!toggled)} className='hideNavMenu'/>
        <h2 className='text-xl font-semibold'>Dashboard</h2>
          </div>
        <div className='flex items-center gap-x-4'>
          <div className='bg-white rounded-lg p-2 flex items-center'>
            <input type="search" placeholder='Search...' className='rounded-lg'/>
            <IoSearchOutline/>
          </div>
          <FaRegBell/>
          <FaUserCircle/>
        </div>
    </div>
  )
}

export default Header