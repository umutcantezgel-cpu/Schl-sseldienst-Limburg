'use client';

import { useState, useCallback, useEffect } from 'react';
import { APIProvider, Map, AdvancedMarker, useMap } from '@vis.gl/react-google-maps';
import { BUSINESS } from '@/lib/constants';

function MapRadius({ center, radius }: { center: { lat: number; lng: number }; radius: number }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !window.google) return;

    const circle = new window.google.maps.Circle({
      strokeColor: '#f59e0b', // Amber-500
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#f59e0b',
      fillOpacity: 0.1,
      map,
      center: center,
      radius: radius,
    });

    return () => {
      circle.setMap(null);
    };
  }, [map, center, radius]);

  return null;
}

interface CustomGoogleMapProps {
  apiKey?: string;
  className?: string;
}

// Custom Deep Blue / Brand Style for Google Maps
const customMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#0f172a' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#0f172a' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#94a3b8' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f8fafc' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#64748b' }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#1e293b' }],
  },
  {
    featureType: 'poi.business',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#334155' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1e293b' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#94a3b8' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#475569' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1e293b' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f8fafc' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#1e293b' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f8fafc' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#020617' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#475569' }],
  },
];

export default function CustomGoogleMap({ apiKey, className = '' }: CustomGoogleMapProps) {
  const center = BUSINESS.address.coordinates;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Fallback if no API Key is provided (e.g. mock mode)
  if (!apiKey) {
    return (
      <div className={`w-full h-full bg-[#0f172a] flex items-center justify-center p-4 text-center border border-[var(--color-border-subtle)] rounded-2xl ${className}`}>
        <div>
          <p className="text-white font-medium mb-2">Google Maps API Key fehlt</p>
          <p className="text-slate-400 text-sm">Bitte ergänzen Sie NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in der .env Datei.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full h-full rounded-2xl overflow-hidden shadow-lg border border-[var(--color-border-subtle)] ${className}`}>
      <APIProvider apiKey={apiKey}>
        <Map
          defaultZoom={12}
          defaultCenter={center}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          styles={customMapStyle}
          mapId="DEMO_MAP_ID" // Required for AdvancedMarker
        >
          <AdvancedMarker position={center} title={BUSINESS.name}>
            {/* Custom SVG/HTML Marker with Pulse Effect */}
            <div className="relative flex items-center justify-center">
              {/* Ping Animation */}
              <div className="absolute w-12 h-12 bg-amber-500 rounded-full opacity-20 animate-ping"></div>
              {/* Center Dot */}
              <div className="relative w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full border-2 border-[#0f172a] shadow-[0_0_15px_rgba(245,158,11,0.5)] z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </AdvancedMarker>

          {/* 15-30 Min Radius (~15km around Limburg) */}
          <MapRadius center={center} radius={15000} />

          {/* Interactive UI Overlay for ETA */}
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-[#0f172a]/90 backdrop-blur-md border border-[#1e293b] rounded-2xl p-4 shadow-xl text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="font-bold text-sm">Einsatzbereit in Limburg</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">Ø Anfahrtszeit: 15-30 Min.</p>
              <a 
                href={BUSINESS.phone.href}
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl text-sm transition-colors"
              >
                Jetzt Anrufen
              </a>
            </div>
          </div>
        </Map>
      </APIProvider>
    </div>
  );
}
