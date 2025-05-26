'use client';

import type { Restaurant } from '@/types/restaurant';
import { Heart, MapPin, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface MobileRestaurantListProps {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
  onSelectRestaurant: (restaurant: Restaurant) => void;
  onCloseSelection: () => void;
}

export default function MobileRestaurantList({
  restaurants,
  selectedRestaurant,
  onSelectRestaurant,
  onCloseSelection,
}: MobileRestaurantListProps) {
  const router = useRouter();

  const displayRestaurants = selectedRestaurant
    ? [selectedRestaurant]
    : restaurants;

  return (
    <div className="fixed bottom-20 left-0 right-0 z-[1001] border-t border-gray-200">
      <div className="flex overflow-x-auto gap-3 p-4 hide-scrollbar">
        {displayRestaurants.map((restaurant) => {
          const isSelected =
            selectedRestaurant && selectedRestaurant.id === restaurant.id;

          // Get the first few allergy labels to use as cuisine type
          const cuisineType = restaurant.cuisine
            ? restaurant.cuisine
            : restaurant.allergyLabels && restaurant.allergyLabels.length > 0
            ? restaurant.allergyLabels.slice(0, 2).join(' • ')
            : 'Traditional';

          return (
            <div
              key={restaurant.id}
              className={`flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden border-2 cursor-pointer ${
                isSelected ? 'border-blue-500' : 'border-transparent'
              }`}
              onClick={() => {
                // If this restaurant is already selected, navigate to its page
                if (isSelected) {
                  router.push(`/restaurant/${restaurant.id}`);
                } else {
                  // Otherwise, select this restaurant
                  onSelectRestaurant(restaurant);
                }
              }}
            >
              <div className="flex p-4 items-center">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                  <img
                    src={
                      restaurant.image
                        ? restaurant.image
                        : `/bustling-city-restaurant.png?height=80&width=80&query=restaurant ${restaurant.name}`
                    }
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold h-14 overflow-hidden">
                    {restaurant.name}
                  </h3>
                  {/* <p className="text-gray-600 text-sm">
                    {cuisineType} •{' '}
                    {restaurant.priceRange ? restaurant.priceRange : '$$'}
                  </p> */}

                  <div className="flex items-center mt-1">
                    <div className="flex items-center mr-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm font-medium">
                        {restaurant.rating
                          ? restaurant.rating.toFixed(1)
                          : '4.5'}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="ml-1 text-sm">
                        {(Math.random() * 2).toFixed(1)} km
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  className="p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isSelected) {
                      onCloseSelection();
                    }
                  }}
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isSelected ? 'text-red-500 fill-red-500' : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
