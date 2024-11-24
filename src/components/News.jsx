import React from 'react'

export default function News() {
  return (
    <div className='home-bg w-full min-h-screen bg-no-repeat bg-center bg-cover'>
      <div className='bg-black/70 w-full min-h-screen py-20'>
        <div className='container mx-auto px-4 md:px-6'>
          
          <div className='w-auto'>
            <span className='text-5xl md:text-7xl text-white font-bold tracking-wider'>Sore</span>
            <div className='inline-flex w-3 md:w-4 h-10 md:h-16 bg-orange-400 ml-3 mb-3'></div>
            <div className='inline-flex w-3 md:w-4 h-3 md:h-4 bg-orange-400 ml-3'></div>
            <div className='my-4 text-sm md:text-base text-gray-200'>
              <p className='tracking-wide'>Made for life</p>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row justify-between mt-16 md:mt-20'>
            <div className='flex mb-10 lg:mb-0'>
              <div className='text-sm text-gray-300'>
                <p className='py-1'>2015</p>
                <p className='py-1'>2014 - 2013</p>
              </div>
              <div className='ml-10 h-0.5 w-32 bg-orange-400 self-center'></div>
            </div>
            
            <div className='flex flex-col space-y-12 lg:w-1/2'>
              <div className='hover:bg-black/40 p-6 rounded-lg transition-all duration-300'>
                <p className='text-3xl font-bold text-white'>An extensive dealer network of our company</p>
                <p className='text-sm text-orange-400 mt-4'>20.06.2015</p>
              </div>
              <div className='hover:bg-black/40 p-6 rounded-lg transition-all duration-300'>
                <p className='text-xl text-white'>Eco-friendly materials & best european quality</p>
                <p className='text-sm text-orange-400 mt-4'>05.06.2015</p>
              </div>
              <div className='hover:bg-black/40 p-6 rounded-lg transition-all duration-300'>
                <p className='text-xl text-white'>New arrivals. Building and finishing materials</p>
                <p className='text-sm text-orange-400 mt-4'>11.02.2015</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
