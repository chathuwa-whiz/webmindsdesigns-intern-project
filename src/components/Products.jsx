import React from 'react'

export default function Products() {
  return (
    <div className='w-full min-h-screen top-0 left-0 flex items-center bg-center bg-no-repeat bg-cover home-bg'>
      <div className='bg-black/80 w-full h-full flex justify-center'>
        
        <div className='mt-20 w-auto max-w-6xl px-4'>
          {/* Logo Section */}
          <div className='mb-12'>
            <span className='text-7xl text-white font-bold'>Sore</span>
            <div className='inline-flex w-3 h-10 bg-orange-400 ml-3 mb-3'></div>
            <div className='inline-flex w-3 h-3 bg-orange-400 ml-3'></div>
          </div>
          
          {/* Products Grid */}
          <div className='my-8'>
            <h2 className='text-4xl font-bold mb-8 text-orange-400'>Our Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              
              <div className='product-card bg-neutral-900/80 p-6 rounded-xl border border-neutral-700 hover:border-orange-400 transition-all duration-300 group'>
                <h3 className='text-2xl font-bold mb-4 group-hover:text-orange-400'>Building Materials</h3>
                <ul className='space-y-3 text-gray-300'>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-orange-400 rounded-full mr-3'></div>
                    Cement and Concrete
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-orange-400 rounded-full mr-3'></div>
                    Steel and Metal
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-orange-400 rounded-full mr-3'></div>
                    Lumber and Wood
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-orange-400 rounded-full mr-3'></div>
                    Insulation Materials
                  </li>
                </ul>
              </div>
              
              <div className='product-card bg-neutral-900/80 p-6 rounded-xl border border-neutral-700 hover:border-orange-400 transition-all duration-300 group'>
                <h3 className='text-2xl font-bold mb-4 group-hover:text-orange-400'>Finishing Materials</h3>
                <ul className='space-y-3 text-gray-300'>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-orange-400 rounded-full mr-3'></div>
                    Paint and Coatings
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-orange-400 rounded-full mr-3'></div>
                    Tiles and Flooring
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-orange-400 rounded-full mr-3'></div>
                    Wall Coverings
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-orange-400 rounded-full mr-3'></div>
                    Decorative Elements
                  </li>
                </ul>
              </div>

              <div className='product-card bg-neutral-900/80 p-6 rounded-xl border border-neutral-700 hover:border-orange-400 transition-all duration-300 group'>
                <h3 className='text-2xl font-bold mb-4 group-hover:text-orange-400'>Tools & Equipment</h3>
                <ul className='space-y-3 text-gray-300'>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-orange-400 rounded-full mr-3'></div>
                    Power Tools
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-orange-400 rounded-full mr-3'></div>
                    Hand Tools
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-orange-400 rounded-full mr-3'></div>
                    Safety Equipment
                  </li>
                  <li className='flex items-center'>
                    <div className='w-2 h-2 bg-orange-400 rounded-full mr-3'></div>
                    Measuring Tools
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
