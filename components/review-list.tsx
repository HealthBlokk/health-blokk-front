"use client"

import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { getRestaurantReviews } from "@/lib/api-mock"
import type { Review } from "@/types/review"
import StarRating from "@/components/star-rating"

interface ReviewListProps {
  restaurantId: string
  newReview?: Review
}

export default function ReviewList({ restaurantId, newReview }: ReviewListProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true)
        const data = await getRestaurantReviews(restaurantId)
        setReviews(data)
        setError(null)
      } catch (err) {
        setError("Failed to load reviews. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [restaurantId])

  // Add new review to the list if provided
  useEffect(() => {
    if (newReview) {
      setReviews((prevReviews) => {
        // Check if the review is already in the list to avoid duplicates
        if (!prevReviews.some((review) => review.id === newReview.id)) {
          return [newReview, ...prevReviews]
        }
        return prevReviews
      })
    }
  }, [newReview])

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="border rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return <div className="text-red-500 p-4 border rounded-lg">{error}</div>
  }

  if (reviews.length === 0) {
    return <div className="text-center py-6 text-muted-foreground">No reviews yet. Be the first to leave a review!</div>
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border rounded-lg p-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
            <div className="font-medium">{review.userName}</div>
            <div className="text-muted-foreground text-sm sm:ml-auto">{new Date(review.date).toLocaleDateString()}</div>
          </div>
          <div className="mb-2">
            <StarRating rating={review.rating} size="sm" />
          </div>
          <p className="text-sm">{review.comment}</p>
        </div>
      ))}
    </div>
  )
}
