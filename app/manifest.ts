import { MetadataRoute } from 'next';
import { BUSINESS } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS.name,
    short_name: 'Schlüsseldienst',
    description: 'Ihr lokaler Schlüsseldienst in Limburg. 24/7 Notdienst.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
