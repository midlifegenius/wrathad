'use client'

export default function VideoSection() {
  return (
    <div className='w-full max-w-3xl mt-10 flex flex-col items-center'>
      {/* Video */}
      <div className='w-full aspect-video border border-white/10'>
        <iframe
          className='w-full h-full'
          src='https://www.youtube.com/embed/6QzetJFNv5w'
          title='Wrath A.D. Live'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>

      {/* Caption */}
      <p className='mt-4 text-xs tracking-[0.3em] text-gray-400 text-center uppercase'>
        WRaTH A.D. LiVe @ The MiLWauKee MeTaLFeST oN JuLy 25th 1998
      </p>
    </div>
  )
}
