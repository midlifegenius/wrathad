'use client'

import { FaSpotify, FaYoutube, FaInstagram, FaApple } from 'react-icons/fa'

const links = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/5axlid9Cok4er7nJKTDi6I',
    icon: FaSpotify,
    hover: 'hover:text-green-500',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/wrath-a-d/1870893700',
    icon: FaApple,
    hover: 'hover:text-gray-300',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@wrathad',
    icon: FaYoutube,
    hover: 'hover:text-red-500',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: FaInstagram,
    hover: 'hover:text-pink-500',
  },
]

export default function SocialLinks() {
  return (
    <div className='flex gap-6 mt-2'>
      {links.map((link) => {
        const Icon = link.icon

        return (
          <a
            key={link.name}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className={`text-gray-500 ${link.hover} hover:scale-110 transition duration-300`}
          >
            <Icon size={22} />
          </a>
        )
      })}
    </div>
  )
}
