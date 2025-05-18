"use client"

import { useState } from "react"
import type { Restaurant } from "@/types/restaurant"

interface AllergyTabsProps {
  restaurants: Restaurant[]
  onFilterChange: (filtered: Restaurant[]) => void
}

export default function AllergyTabs({ restaurants, onFilterChange }: AllergyTabsProps) {
  const [activeAllergy, setActiveAllergy] = useState<string | null>(null)

  // Get the most common allergy labels for quick access
  const commonAllergies = [
    { id: "all", label: "All", icon: "🍽️" },
    { id: "gluten-free", label: "Gluten-Free", icon: "🌾" },
    { id: "dairy-free", label: "Dairy-Free", icon: "🥛" },
    { id: "vegan", label: "Vegan", icon: "🌱" },
    { id: "vegetarian", label: "Vegetarian", icon: "🥗" },
    { id: "nut-free", label: "Nut-Free", icon: "🥜" },
  ]

  const handleAllergySelect = (allergyId: string) => {
    const newActiveAllergy = allergyId === activeAllergy ? null : allergyId
    setActiveAllergy(newActiveAllergy)

    if (newActiveAllergy === null || newActiveAllergy === "all") {
      onFilterChange(restaurants)
    } else {
      const filtered = restaurants.filter((restaurant) => restaurant.allergyLabels.includes(newActiveAllergy))
      onFilterChange(filtered)
    }
  }

  return (
    <div className="md:hidden fixed bottom-16 left-0 right-0 bg-white border-t z-[999] overflow-x-auto hide-scrollbar">
      <div className="flex p-2 gap-2">
        {commonAllergies.map((allergy) => (
          <button
            key={allergy.id}
            onClick={() => handleAllergySelect(allergy.id)}
            className={`flex flex-col items-center justify-center p-2 rounded-lg min-w-[70px] ${
              activeAllergy === allergy.id ? "bg-green-500 text-white" : "bg-gray-100 text-gray-800"
            }`}
          >
            <span className="text-lg">{allergy.icon}</span>
            <span className="text-xs font-medium whitespace-nowrap">{allergy.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
