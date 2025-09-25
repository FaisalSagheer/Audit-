'use client'
import React from 'react'
import DomeGallery from './_components/DomeGallery'

function Work() {

  return (
    <div>
      <div className="bg-[#060010]/20 -mt-20">
        <div className="mx-auto max-w-7xl pt-40 pb-10">
          <div className="flex justify-center flex-col items-center">
            <div className="text-center">
              <h2 className="text-5xl">Our Work</h2>
              <p className="w-2xl text-sm md:text-[1rem] pt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                veniam dolores adipisci natus magni porro earum inventore vel
                soluta tempora vero ad corrupti molestias totam, rerum delectus
              </p>
            </div>
            <div>
              <div style={{ width: '90vw', height: '100vh' }}>
                <DomeGallery />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
