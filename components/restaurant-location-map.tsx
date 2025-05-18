"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import type { Restaurant } from "@/types/restaurant"

// Create custom icon using the provided SVG
const createCustomIcon = () => {
  return L.icon({
    iconUrl: "/images/map-pin.svg",
    iconSize: [38, 45],
    iconAnchor: [19, 45],
    popupAnchor: [0, -45],
  })
}

interface RestaurantLocationMapProps {
  restaurant: Restaurant
}

export default function RestaurantLocationMap({ restaurant }: RestaurantLocationMapProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Create custom icon
  const customIcon = createCustomIcon()

  // Center on the restaurant location
  const center = [restaurant.latitude, restaurant.longitude]

  if (!isMounted) {
    return <div className="h-[300px] w-full bg-gray-100 rounded-lg animate-pulse" />
  }

  return (
    <div className="h-[300px] w-full rounded-lg overflow-hidden border">
      <MapContainer
        center={[center[0], center[1]]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="bottomright" />

        <Marker position={[restaurant.latitude, restaurant.longitude]} icon={customIcon} />
      </MapContainer>
    </div>
  )
}
