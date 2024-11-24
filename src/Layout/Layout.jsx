import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='relative flex flex-col min-h-screen'>
      <Navbar />
      
      <div className='flex flex-grow'>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
