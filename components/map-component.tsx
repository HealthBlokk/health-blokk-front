'use client';
import type { Restaurant } from '@/types/restaurant';
import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  useMap,
} from 'react-leaflet';

// Create custom icon using the provided SVG
const createCustomIcon = (isSelected = false) => {
  return L.icon({
    iconUrl: '/images/map-pin.svg',
    iconSize: isSelected ? [50, 60] : [38, 45], // Larger size for selected pin
    iconAnchor: isSelected ? [25, 60] : [19, 45], // Adjusted anchor for selected pin
    popupAnchor: [0, -45],
    className: isSelected ? 'selected-pin' : 'normal-pin',
  });
};

// Helper component to add/remove class on the map container
function MapClassUpdater({
  selectedRestaurant,
}: {
  selectedRestaurant: Restaurant | null;
}) {
  const map = useMap();

  useEffect(() => {
    const container = map.getContainer();
    if (selectedRestaurant) {
      container.classList.add('has-selected-pin');
    } else {
      container.classList.remove('has-selected-pin');
    }
  }, [selectedRestaurant, map]);

  return null;
}

// Helper component to update zoom based on mobile state
function ZoomUpdater({ isMobile }: { isMobile: boolean }) {
  const map = useMap();

  useEffect(() => {
    map.setZoom(isMobile ? 13 : 15);
  }, [isMobile, map]);

  return null;
}

interface MapComponentProps {
  restaurants: Restaurant[];
  onSelectRestaurant: (restaurant: Restaurant) => void;
  selectedRestaurant: Restaurant | null;
}

export default function MapComponent({
  restaurants,
  onSelectRestaurant,
  selectedRestaurant,
}: MapComponentProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Center the map on the average position of all restaurants
  const center =
    restaurants.length > 0
      ? [
          restaurants.reduce((sum, r) => sum + r.latitude, 0) /
            restaurants.length,
          restaurants.reduce((sum, r) => sum + r.longitude, 0) /
            restaurants.length,
        ]
      : [48.2082, 16.3738]; // Default to Vienna if no restaurants

  return (
    <MapContainer
      center={[47.378955, 8.5428021]}
      zoom={15}
      style={{ height: '100%', width: '100%' }}
      zoomControl={false}
      className="z-0"
    >
      <MapClassUpdater selectedRestaurant={selectedRestaurant} />
      <ZoomUpdater isMobile={isMobile} />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ZoomControl position="bottomleft" />

      {restaurants.map((restaurant) => {
        const isSelected = selectedRestaurant?.id === restaurant.id;
        return (
          <Marker
            key={restaurant.id}
            position={[restaurant.latitude, restaurant.longitude]}
            icon={createCustomIcon(isSelected)}
            eventHandlers={{
              click: () => {
                onSelectRestaurant(restaurant);
              },
            }}
            zIndexOffset={isSelected ? 1000 : 0} // Ensure selected pin is on top
          >
            {/* Only show popup when no restaurant is selected */}
            {!selectedRestaurant && (
              <Popup>
                <div className="text-center">
                  <h3 className="font-semibold">{restaurant.name}</h3>
                </div>
              </Popup>
            )}
          </Marker>
        );
      })}
    </MapContainer>
  );
}
