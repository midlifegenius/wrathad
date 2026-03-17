'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks'
import VideoSection from './VideoSection'

export default function Hero() {
  return (
    <div className='flex flex-col items-center text-center'>
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='mb-8'
      >
        <Image
          src='/logo2.png'
          alt='Wrath A.D.'
          width={500}
          height={250}
          className='object-contain'
          priority
        />
      </motion.div>

      {/* Tagline 
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className='text-xs tracking-[0.4em] text-gray-400 mb-6 uppercase'
      >
        Heavy. Relentless. Uncompromising.
      </motion.p>
*/}
      {/* Links NOW directly under */}
      <SocialLinks />
      <VideoSection />
    </div>
  )
}
