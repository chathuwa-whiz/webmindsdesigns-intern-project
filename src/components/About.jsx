import React from 'react'

export default function About() {
  return (
    <div className='news-bg w-full min-h-screen bg-center bg-no-repeat bg-cover'>
      <div className='flex w-full min-h-screen bg-black bg-opacity-50'>
        <div className='w-full flex justify-center items-center py-20'>
          <div className='w-auto max-w-3xl px-6'>
            {/* Logo section - matching Home and Contact pages */}
            <div className='w-auto'>
              <span className='text-9xl text-white font-bold'>Sore</span>
              <div className='inline-flex w-5 h-20 bg-orange-400 ml-3 mb-5'></div>
              <div className='inline-flex w-5 h-5 bg-orange-400 ml-6'></div>
            </div>
            
            <div className='my-8'>
              <p className='text-lg text-orange-400'>Building Excellence Since 2000</p>
            </div>

            {/* About content with improved styling */}
            <div className='my-12 space-y-8'>
              <div>
                <h2 className='text-5xl font-bold mb-6 text-white'>About Us</h2>
                <p className='text-lg text-gray-200 leading-relaxed'>
                  We are a leading provider of premium building and finishing materials, 
                  committed to delivering excellence in construction solutions since 2000.
                </p>
              </div>

              <div className='space-y-4'>
                <p className='text-lg text-gray-200 leading-relaxed'>
                  Our expertise spans across various construction domains, offering 
                  high-quality materials that meet international standards.
                </p>
                <p className='text-lg text-gray-200 leading-relaxed'>
                  With a focus on innovation and sustainability, we continue to shape 
                  the future of construction materials in Russia and beyond.
                </p>
              </div>

              {/* Values section with improved styling */}
              <div className='mt-12'>
                <h3 className='text-3xl font-bold mb-6 text-white'>Our Values</h3>
                <ul className='grid grid-cols-2 gap-4'>
                  <li className='text-lg text-gray-200 flex items-center'>
                    <span className='text-orange-400 mr-2'>✓</span> Quality Excellence
                  </li>
                  <li className='text-lg text-gray-200 flex items-center'>
                    <span className='text-orange-400 mr-2'>✓</span> Innovation
                  </li>
                  <li className='text-lg text-gray-200 flex items-center'>
                    <span className='text-orange-400 mr-2'>✓</span> Sustainability
                  </li>
                  <li className='text-lg text-gray-200 flex items-center'>
                    <span className='text-orange-400 mr-2'>✓</span> Customer Satisfaction
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
