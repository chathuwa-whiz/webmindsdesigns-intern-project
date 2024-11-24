import React from 'react'

export default function Contact() {
  return (
    <div className='map-bg w-full min-h-screen bg-center bg-no-repeat bg-cover'>
      <div className='bg-black/70 w-full min-h-screen py-20'>
        
        <div className='container mx-auto px-4 md:px-6'>
          <div className='w-auto'>
            <span className='text-5xl md:text-7xl text-white font-bold tracking-wider'>Sore</span>
            <div className='inline-flex w-3 md:w-4 h-10 md:h-16 bg-orange-400 ml-3 mb-3'></div>
            <div className='inline-flex w-3 md:w-4 h-3 md:h-4 bg-orange-400 ml-3'></div>
            
            <div className='my-4 text-sm md:text-base text-gray-200'>
              <p className='tracking-wide'>Made for life</p>
            </div>

            <div className='mt-16 md:mt-20 space-y-6'>
              <div>
                <h2 className='text-orange-400 text-xl mb-2'>Address</h2>
                <p className='text-4xl md:text-6xl font-bold text-white'>Moscow</p>
                <p className='text-4xl md:text-6xl font-bold text-white'>Kutuzovsky proezd</p>
                <p className='text-4xl md:text-6xl font-bold text-white'>16-s1</p>
              </div>

              <div className='mt-12'>
                <h2 className='text-orange-400 text-xl mb-2'>Contact</h2>
                <a href='tel:84959888838' className='text-2xl md:text-4xl text-white hover:text-orange-400 transition-colors block'>
                  8 495 988-8838
                </a>
                <a href='mailto:sorel@sorel-eee.ru' className='text-2xl md:text-4xl text-white hover:text-orange-400 transition-colors block'>
                  sorel@sorel-eee.ru
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
