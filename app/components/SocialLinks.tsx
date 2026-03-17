'use client'

const links = [
  { name: 'Spotify', url: 'https://spotify.com' },
  { name: 'Apple Music', url: 'https://music.apple.com' },
  { name: 'YouTube', url: 'https://youtube.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
]

export default function SocialLinks() {
  return (
    <div className='flex gap-6 text-xs tracking-[0.3em] uppercase text-gray-500'>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-white transition'
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}
