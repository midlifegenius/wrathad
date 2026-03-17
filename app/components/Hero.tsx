'use client'

import Image from 'next/image'

import SocialLinks from './SocialLinks'
import VideoSection from './VideoSection'

export default function Hero() {
  return (
    <div className='flex flex-col items-center text-center'>
      {/* Logo */}
      <div className='mb-8 relative'>
        <Image
          src='/logo2.png'
          alt='Wrath A.D.'
          width={500}
          height={250}
          className='object-contain wrath-logo'
          priority
        />
      </div>

      {/* Tagline 
      <p className='text-xs tracking-[0.4em] text-gray-400 mb-6 uppercase'>
        Heavy. Relentless. Uncompromising.
      </p>*/}

      <SocialLinks />
      <VideoSection />
    </div>
  )
}
