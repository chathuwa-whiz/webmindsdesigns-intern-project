import React from 'react'
import img1 from '../assets/homebg.jpg'
import img2 from '../assets/news.jpg'

export default function Gallery() {
  // Sample gallery items - replace image URLs with your actual images
  const galleryItems = [
    { id: 1, title: 'Project 1', category: 'Interior', imageUrl: img1 },
    { id: 2, title: 'Project 2', category: 'Exterior', imageUrl: img2 },
    // Add more items as needed
  ]

  return (
    <div className='w-full min-h-screen bg-neutral-900'>
      <div className='w-full min-h-screen py-20'>
        {/* Header section similar to other pages */}
        <div className='container mx-auto px-4 md:px-6'>
          <div className='w-auto'>
            <span className='text-5xl md:text-7xl text-white font-bold tracking-wider'>Gallery</span>
            <div className='inline-flex w-3 md:w-4 h-10 md:h-16 bg-orange-400 ml-3 mb-3'></div>
            <div className='inline-flex w-3 md:w-4 h-3 md:h-4 bg-orange-400 ml-3'></div>
            
            <div className='my-4 text-sm md:text-base text-gray-200'>
              <p className='tracking-wide'>Our projects and achievements</p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {galleryItems.map((item) => (
              <div key={item.id} className='group relative overflow-hidden rounded-lg'>
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className='w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                  <h3 className='text-white text-xl font-bold'>{item.title}</h3>
                  <p className='text-orange-400'>{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
