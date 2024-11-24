import React from 'react'

export default function Info() {
  return (
    <div className='home-bg w-full min-h-screen bg-center bg-cover'>
      <div className='bg-black/70 w-full min-h-screen py-20'>
        <div className='container mx-auto max-w-3xl px-4'>
          <span className='text-5xl md:text-7xl text-white font-bold'>Info</span>
          <div className='inline-flex w-3 h-10 bg-orange-400 ml-3 mb-3'></div>
          <div className='inline-flex w-3 h-3 bg-orange-400 ml-3'></div>

          <div className='mt-12 space-y-8'>
            <div>
              <h2 className='text-3xl font-bold mb-4'>About Sore</h2>
              <p className='text-lg text-gray-300'>
                We specialize in providing high-quality building and finishing materials 
                for both residential and commercial projects.
              </p>
            </div>

            <div>
              <h2 className='text-3xl font-bold mb-4'>Our Mission</h2>
              <p className='text-lg text-gray-300'>
                To deliver exceptional building materials that meet the highest 
                standards of quality and sustainability, while providing outstanding 
                service to our clients.
              </p>
            </div>

            <div>
              <h2 className='text-3xl font-bold mb-4'>Working Hours</h2>
              <div className='text-lg text-gray-300'>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
