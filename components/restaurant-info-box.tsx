"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Restaurant } from "@/types/restaurant"
import { getRestaurantReviews } from "@/lib/api-mock"
import { useEffect, useState } from "react"
import AverageRatingDisplay from "@/components/average-rating-display"
import type { Review } from "@/types/review"
import { allergyLabels } from "@/data/allergy-labels"

interface RestaurantInfoBoxProps {
  restaurant: Restaurant
  onClose: () => void
}

export default function RestaurantInfoBox({ restaurant, onClose }: RestaurantInfoBoxProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true)
        const data = await getRestaurantReviews(restaurant.id)
        setReviews(data)
      } catch (error) {
        console.error("Failed to fetch reviews:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [restaurant.id])

  // Get allergy label names from IDs
  const allergyLabelNames = restaurant.allergyLabels.map((id) => {
    const label = allergyLabels.find((a) => a.id === id)
    return label ? label.name : id
  })

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t z-[1000] animate-in slide-in-from-bottom">
      <div className="container mx-auto">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold">{restaurant.name}</h2>
              {!loading && reviews.length > 0 && <AverageRatingDisplay reviews={reviews} showCount={false} />}
            </div>
            <p className="text-muted-foreground">{restaurant.address}</p>
            <p className="text-sm mt-1">{restaurant.description.substring(0, 100)}...</p>

            {allergyLabelNames.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {allergyLabelNames.map((name, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {name}
                  </Badge>
                ))}
              </div>
            )}
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="mt-1">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4 flex justify-start">
          <Button asChild>
            <Link href={`/restaurant/${restaurant.id}`}>Show Menu</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
