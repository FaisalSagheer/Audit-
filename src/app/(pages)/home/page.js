'use client'
import React from 'react'
import Culture from './_components/Culture'
import Services from './_components/Services'
import Work from './_components/Work'
import News from './_components/News'
import Hero from './_components/Hero'

function Home() {
  
  return (
    <div>
      <Hero/>
      <Culture/>
      <Services/>
      <Work/>
      <News/>
    </div>
  )
}

export default Home
