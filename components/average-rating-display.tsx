import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Review } from "@/types/review"

interface AverageRatingDisplayProps {
  reviews: Review[]
  className?: string
  showCount?: boolean
}

export default function AverageRatingDisplay({ reviews, className, showCount = true }: AverageRatingDisplayProps) {
  // If no reviews, return a message
  if (reviews.length === 0) {
    return <div className={cn("text-sm text-muted-foreground", className)}>No reviews yet</div>
  }

  // Calculate average rating
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const roundedRating = Math.round(averageRating * 10) / 10 // Round to 1 decimal place

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "w-4 h-4",
              star <= Math.floor(averageRating)
                ? "text-yellow-400 fill-yellow-400" // Full star
                : star - 0.5 <= averageRating
                  ? "text-yellow-400 fill-yellow-400/50" // Half star (approximation)
                  : "text-gray-300", // Empty star
            )}
          />
        ))}
      </div>
      <span className="font-medium">{roundedRating.toFixed(1)}</span>
      {showCount && <span className="text-muted-foreground text-sm">({reviews.length} reviews)</span>}
    </div>
  )
}
