import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kadro Takip',
    short_name: 'KadroTakip',
    description: 'Burayı Anca Rıdvan güncelleyebilir',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e0775',
    icons: [
      {
        src: '/football.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/football.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}