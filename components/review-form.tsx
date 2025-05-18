"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { submitReview } from "@/lib/api-mock"
import type { Review } from "@/types/review"
import StarRating from "@/components/star-rating"

interface ReviewFormProps {
  restaurantId: string
  onReviewSubmitted: (review: Review) => void
}

export default function ReviewForm({ restaurantId, onReviewSubmitted }: ReviewFormProps) {
  const { toast } = useToast()
  const [rating, setRating] = useState(0)
  const [userName, setUserName] = useState("")
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a rating before submitting",
        variant: "destructive",
      })
      return
    }

    if (!userName.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name before submitting",
        variant: "destructive",
      })
      return
    }

    if (!comment.trim()) {
      toast({
        title: "Review required",
        description: "Please enter your review before submitting",
        variant: "destructive",
      })
      return
    }

    try {
      setIsSubmitting(true)

      const newReview = await submitReview({
        restaurantId,
        rating,
        userName,
        comment,
      })

      // Reset form
      setRating(0)
      setUserName("")
      setComment("")

      // Notify parent component
      onReviewSubmitted(newReview)

      // Show success message
      toast({
        title: "Review submitted",
        description: "Thank you for your feedback!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit review",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="rating">Your Rating</Label>
        <div id="rating">
          <StarRating rating={rating} interactive={true} size="lg" onRatingChange={setRating} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your name" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="comment">Your Review</Label>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience at this restaurant..."
          rows={4}
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  )
}
