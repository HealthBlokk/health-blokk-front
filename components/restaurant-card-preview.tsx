"use client"

import { MapPin, Star, Heart } from "lucide-react"
import type { Restaurant } from "@/types/restaurant"

interface RestaurantCardPreviewProps {
  restaurant: Restaurant
  onClose: () => void
}

export default function RestaurantCardPreview({ restaurant, onClose }: RestaurantCardPreviewProps) {
  // Get the first few allergy labels to use as cuisine type
  const cuisineType =
    restaurant.allergyLabels && restaurant.allergyLabels.length > 0
      ? restaurant.allergyLabels.slice(0, 2).join(" • ")
      : "Traditional"

  // Default rating and price range
  const rating = 4.5 // Default rating since it's not in the Restaurant type
  const priceRange = "$$" // Default price range

  return (
    <div className="fixed bottom-20 left-4 right-4 z-[1001] bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex p-4 items-center">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden mr-3 flex-shrink-0">
          <img
            src={`/bustling-city-restaurant.png?height=80&width=80&query=restaurant ${restaurant.name}`}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold">{restaurant.name}</h3>
          <p className="text-gray-600 text-sm">
            {cuisineType} • {priceRange}
          </p>

          <div className="flex items-center mt-1">
            <div className="flex items-center mr-4">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
            </div>

            <div className="flex items-center">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="ml-1 text-sm">{(Math.random() * 2).toFixed(1)} km</span>
            </div>
          </div>
        </div>

        <button className="p-2" onClick={onClose}>
          <Heart className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </div>
  )
}
