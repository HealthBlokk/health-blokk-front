import { reviews as mockReviews } from "@/data/reviews"
import type { Review } from "@/types/review"

// Mock API function to get reviews for a restaurant
export async function getRestaurantReviews(restaurantId: string): Promise<Review[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Filter reviews by restaurant ID
  return mockReviews.filter((review) => review.restaurantId === restaurantId)
}

// Mock API function to submit a new review
export async function submitReview(review: Omit<Review, "id" | "date">): Promise<Review> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // 10% chance of random error to simulate real-world API
  if (Math.random() < 0.1) {
    throw new Error("Failed to submit review. Please try again.")
  }

  // Create a new review with generated ID and current date
  const newReview: Review = {
    ...review,
    id: `rev${mockReviews.length + 1}`,
    date: new Date().toISOString().split("T")[0],
  }

  // In a real app, we would save this to a database
  // For now, we just return the new review
  return newReview
}
