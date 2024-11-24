import React from 'react'

export default function Home() {
  return (
    <div className='home-bg w-full h-screen bg-no-repeat bg-center bg-cover top-0 left-0 fixed flex items-center'>
      <div className='flex w-1/2 h-full bg-gradient-to-r from-black/80 to-black/40'></div>

      <div className='w-full absolute justify-center flex items-center'>
        <div className='w-auto px-6 md:px-0'>
          <div className='w-auto'>
            <span className='text-7xl md:text-9xl text-white font-bold tracking-wider'>Sore</span>
            <div className='inline-flex w-4 md:w-5 h-16 md:h-20 bg-orange-400 ml-3 mb-5'></div>
            <div className='inline-flex w-4 md:w-5 h-4 md:h-5 bg-orange-400 ml-4 md:ml-6'></div>
          </div>
          <div className='my-6 text-lg md:text-xl text-gray-200 font-light tracking-wide'>
            <p className='leading-relaxed'>Building and finishing</p>
            <p className='leading-relaxed'>materials</p>
          </div>
          <div className='mt-8'>
            <a href='/products' 
               className='px-8 py-3 bg-orange-400 text-white font-medium rounded hover:bg-orange-500 transition-colors duration-300'>
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
