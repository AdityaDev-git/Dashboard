import React from 'react'
// import {Outlet} from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import '../Assets/style.css'
import Home from '../Components/Home'


const MainLayout = () => {
  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden bg-slate-50 mainPadding'>
        <Sidebar/>
        <div className='flex-1 px-8 py-4 overflow-y-scroll scroll-smooth'>
        <Header/>
        <Home/>
        </div>
    </div>
  )
}

export default MainLayout